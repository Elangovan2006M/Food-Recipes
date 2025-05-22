import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/reviews';

// Create a new review
export const createReview = (review) => {
  return axios.post(`${API_BASE_URL}`, review);
};

// Get paginated reviews for a specific recipe
export const getReviewsByRecipe = (recipeId, page = 0, size = 10) => {
  return axios.get(`${API_BASE_URL}/${recipeId}`, {
    params: { page, size }
  });
};

export const getAllReviews = (page = 0, size = 10) => {
  return axios.get(`${API_BASE_URL}`, {
    params: { page, size }
  });
};


// Delete all reviews for a specific recipe
export const deleteReviewsByRecipe = (recipeId) => {
  return axios.delete(`${API_BASE_URL}/${recipeId}`);
};

// Delete a single review by ID
export const deleteReviewById = (reviewId) => {
  return axios.delete(`${API_BASE_URL}/review/${reviewId}`);
};
