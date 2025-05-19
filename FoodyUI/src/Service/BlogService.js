import axios from "axios";

const API_BASE_URL = 'http://localhost:8080/api/blogs';

// GET: All blogs with pagination
export const getAllBlogs = (page = 0, size = 10) => {
    return axios.get(`${API_BASE_URL}`, {
        params: { page, size }
    });
};

// GET: Single blog by ID
export const getBlogById = (id) => {
    return axios.get(`${API_BASE_URL}/${id}`);
};

// GET: Most recent blog
export const getRecentBlogs = () => {
    return axios.get(`${API_BASE_URL}/recent-blog`);
};

// GET: Recipe linked to a blog
export const getRecipeFromBlog = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${id}/recipes`);
        return response.data;
    } catch (error) {
        console.error('Error fetching recipe:', error);
        throw error;
    }
};

// POST: Create a new blog
export const createBlog = (blogData) => {
    return axios.post(`${API_BASE_URL}`, blogData);
};

// PUT: Update an existing blog
export const updateBlog = (id, blogData) => {
    return axios.put(`${API_BASE_URL}/${id}`, blogData);
};

// DELETE: Delete a blog by ID
export const deleteBlog = (id) => {
    return axios.delete(`${API_BASE_URL}/${id}`);
};

// Search blogs by name with pagination
export const searchBlogByName = async (name, page = 0, size = 5) => {
  return await axios.get(`${API_BASE_URL}/search`, {
    params: {
      name,
      page,
      size
    }
  });
};

export const getBlogSuggestions = (query) => {
  return axios.get(`${API_BASE_URL}/suggestions`, {
    params: { query }
  });
}; 
  
