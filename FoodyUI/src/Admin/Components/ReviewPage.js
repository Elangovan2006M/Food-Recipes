import React, { useEffect, useState } from 'react';
import {
  getAllReviews,
  getReviewsByRecipe,
  deleteReviewById
} from '../../Service/ReviewService';
import SideBar from './SideBar';
import '../Styles/ReviewPage.css';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [recipeId, setRecipeId] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const pageSize = 10;

  const loadReviews = async (pageNum = 0) => {
    try {
      const res = await getAllReviews(pageNum, pageSize);
      setReviews(res.data.content);
      setTotalPages(res.data.totalPages);
      setPage(pageNum);
    } catch (error) {
      alert("Failed to load reviews: " + error.message);
    }
  };

  const searchByRecipeId = async (pageNum = 0) => {
    if (!recipeId) return;
    try {
      const res = await getReviewsByRecipe(recipeId, pageNum, pageSize);
      setReviews(res.data.content);
      setTotalPages(res.data.totalPages);
      setPage(pageNum);
      setIsSearching(true);
    } catch (error) {
      alert("Failed to search reviews: " + error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteReviewById(id);
      alert("Review deleted successfully!");
      isSearching ? searchByRecipeId(page) : loadReviews(page);
    } catch (error) {
      alert("Failed to delete review: " + error.message);
    }
  };

  const handleSearch = () => {
    if (recipeId.trim() === '') {
      alert("Please enter a Recipe ID.");
      return;
    }
    searchByRecipeId(0);
  };

  const handleClearSearch = () => {
    setRecipeId('');
    setIsSearching(false);
    loadReviews(0);
  };

  const handlePageChange = (direction) => {
    const newPage = direction === 'next' ? page + 1 : page - 1;
    isSearching ? searchByRecipeId(newPage) : loadReviews(newPage);
  };

  useEffect(() => {
    loadReviews();
  }, []);

  return (
    <div className="review-content">
      <SideBar />
      <div className="table-container">
        <h2 className="title">All Reviews</h2>

        {/* Search Bar */}
        <div style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            placeholder="Enter Recipe ID"
            value={recipeId}
            onChange={(e) => setRecipeId(e.target.value)}
            style={{
              padding: '0.5rem',
              width: '200px',
              marginRight: '0.5rem',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '1rem'
            }}
          />
          <button onClick={handleSearch} style={{ marginRight: '0.5rem' }} className="buttons">
            Search
          </button>
          <button onClick={handleClearSearch} className="buttons">Clear</button>
        </div>

        <table className="review-table">
          <thead>
            <tr>
              <th>Recipe ID</th>
              <th>Recipe</th>
              <th>User Name</th>
              <th>Review</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review.id}>
                <td>{review.recipe.id}</td>
                <td>{review.recipe?.foodName || 'Unknown'}</td>
                <td>{review.user?.userName || 'Unknown'}</td>
                <td>{review.reviewText}</td>
                <td>{new Date(review.createdAt).toLocaleString()}</td>
                <td>
                  <button onClick={() => handleDelete(review.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div style={{ marginTop: '1rem' }}>
          <button
            disabled={page === 0}
            onClick={() => handlePageChange('prev')}
            style={{marginRight:'1rem'}}
            className="buttons"
          >
            Prev
          </button>
          <span>Page {page + 1} of {totalPages}</span>
          <button
            disabled={page + 1 >= totalPages}
            onClick={() => handlePageChange('next')}
            style={{marginLeft:'1rem'}}
            className="buttons"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
