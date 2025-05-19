import React, { useEffect, useState, useRef } from 'react';
import {
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  searchBlogByName,
} from '../../Service/BlogService';
import SideBar from './SideBar';
import '../Styles/BlogPage.css';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState(initialBlogState());
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 5;
  const suggestionRef = useRef(null);
  const [isSearching, setIsSearching] = useState(false);

  const fields = [
    'recipeName',
    'recipeImgUrl',
    'overview',
    'history',
    'historyImg1',
    'historyImg2',
    'variations',
    'alsoKnownAs',
    'proTips',
    'bestServedWith',
    'recipeId',
  ];

  function initialBlogState() {
    return {
      recipeName: '',
      recipeImgUrl: '',
      overview: '',
      history: '',
      historyImg1: '',
      historyImg2: '',
      variations: '',
      alsoKnownAs: '',
      proTips: '',
      bestServedWith: '',
      recipeId: '',
    };
  }

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setIsSearching(false);
      loadBlogs();
    } else {
      handleSearch(searchQuery, page); // for paginated search
    }
  }, [page]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const loadBlogs = async () => {
    try {
      const res = await getAllBlogs(page, pageSize);
      const formatted = res.data.content.map(blog => ({
        ...blog,
        recipeId: blog.recipe?.id || '',
      }));
      setBlogs(formatted);
      setTotalPages(res.data.totalPages);
    } catch (err) {
      console.error('Error loading blogs:', err);
    }
  };

  const handleSearchInput = async (query) => {
    setSearchQuery(query);
    setPage(0); // Reset pagination on new input
    if (query.length > 1) {
      try {
        const res = await searchBlogByName(query, 0, pageSize);
        const recipeNames = res.data.content.map(blog => blog.recipeName);
        setSuggestions(recipeNames);
      } catch (err) {
        console.error('Suggestion fetch error:', err);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (name) => {
    setSearchQuery(name);
    setSuggestions([]);
    setPage(0);
    handleSearch(name, 0);
  };

  const handleSearch = async (queryParam, pageParam = 0) => {
    const queryToUse = queryParam || searchQuery.trim();
    if (!queryToUse) return;

    try {
      setIsSearching(true);
      const res = await searchBlogByName(queryToUse, pageParam, pageSize);
      const formatted = res.data.content.map(blog => ({
        ...blog,
        recipeId: blog.recipe?.id || '',
      }));
      setBlogs(formatted);
      setTotalPages(res.data.totalPages);
    } catch (err) {
      console.error('Search error:', err);
    }
  };

  const handleAdd = async () => {
    try {
      const payload = {
        ...newBlog,
        recipe: { id: parseInt(newBlog.recipeId) },
      };
      delete payload.recipeId;
      await createBlog(payload);
      setNewBlog(initialBlogState());
      setPage(0);
      if (searchQuery.trim()) {
        handleSearch(searchQuery, 0);
      } else {
        loadBlogs();
      }
    } catch (err) {
      alert('Failed to add blog: ' + err.message);
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      const payload = {
        ...updatedData,
        recipe: { id: parseInt(updatedData.recipeId) },
      };
      delete payload.recipeId;
      await updateBlog(id, payload);
      if (searchQuery.trim()) {
        handleSearch(searchQuery, page);
      } else {
        loadBlogs();
      }
    } catch (err) {
      console.error('Update error:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBlog(id);
      if (searchQuery.trim()) {
        handleSearch(searchQuery, page);
      } else {
        loadBlogs();
      }
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  const handleInputChange = (e, idx, field) => {
    const updatedBlogs = [...blogs];
    updatedBlogs[idx][field] = e.target.value;
    setBlogs(updatedBlogs);
  };

  return (
    <div className="recipe-page">
      <SideBar />
      <div className="recipe-content">
        <h2>Blog Admin Panel</h2>

        <div className="search-bar" style={{ position: 'relative' }}>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => handleSearchInput(e.target.value)}
            placeholder="Search by recipe name"
            autoComplete="off"
          />
          <button onClick={() => {
            setPage(0);
            handleSearch();
          }}>Search</button>

          {suggestions.length > 0 && (
            <ul className="suggestion-list" ref={suggestionRef}>
              {suggestions.map((s, i) => (
                <li
                  key={i}
                  onClick={() => handleSuggestionClick(s)}
                  className="suggestion-item"
                >
                  {s}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="table-container" style={{ overflowX: 'auto' }}>
          <table className="blog-table" style={{ minWidth: '1200px', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                {fields.map((field) => (
                  <th key={field} style={{ border: '1px solid #ccc', padding: '8px' }}>
                    {field}
                  </th>
                ))}
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Add New Blog */}
              <tr>
                {fields.map((field) => (
                  <td key={'new-' + field} style={{ border: '1px solid #ccc', padding: '8px' }}>
                    {['overview', 'history', 'variations', 'proTips'].includes(field) ? (
                      <textarea
                        rows={2}
                        value={newBlog[field]}
                        onChange={(e) =>
                          setNewBlog((prev) => ({ ...prev, [field]: e.target.value }))
                        }
                        placeholder={field}
                      />
                    ) : (
                      <input
                        type={field === 'recipeId' ? 'number' : 'text'}
                        value={newBlog[field]}
                        onChange={(e) =>
                          setNewBlog((prev) => ({ ...prev, [field]: e.target.value }))
                        }
                        placeholder={field}
                      />
                    )}
                  </td>
                ))}
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                  <button onClick={handleAdd}>Add Blog</button>
                </td>
              </tr>

              {/* Existing Blogs */}
              {blogs.map((blog, idx) => (
                <tr key={blog.blogId}>
                  {fields.map((field) => (
                    <td key={field} style={{ border: '1px solid #ccc', padding: '8px' }}>
                      {['overview', 'history', 'variations', 'proTips'].includes(field) ? (
                        <textarea
                          rows={2}
                          value={blog[field]}
                          onChange={(e) => handleInputChange(e, idx, field)}
                        />
                      ) : (
                        <input
                          type={field === 'recipeId' ? 'number' : 'text'}
                          value={blog[field]}
                          onChange={(e) => handleInputChange(e, idx, field)}
                        />
                      )}
                    </td>
                  ))}
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                    <button onClick={() => handleUpdate(blog.blogId, blog)}>Save</button>
                    <button onClick={() => handleDelete(blog.blogId)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination" style={{ marginTop: '20px' }}>
          <button disabled={page === 0} onClick={() => setPage(page - 1)}>
            Prev
          </button>
          <span style={{ margin: '0 10px' }}>
            Page {page + 1} of {totalPages}
          </span>
          <button disabled={page + 1 === totalPages} onClick={() => setPage(page + 1)}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
