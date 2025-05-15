import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/recipes';

// Get all recipes with pagination
export const getAllRecipes = (page = 0, size = 10) => {
  return axios.get(`${API_BASE_URL}`, {
    params: { page, size }
  });
};

// Search by cuisines
export const searchByCuisines = (cuisines, page = 0, size = 10) => {
  return axios.get(`${API_BASE_URL}/search/cuisines`, {
    params: { cuisines, page, size }
  });
};

// Search by total time
export const searchByTotalTime = (time, page = 0, size = 10) => {
  return axios.get(`${API_BASE_URL}/search/totalTime`, {
    params: { time, page, size }
  });
};

// Search by food type
export const searchByFoodType = (type, page = 0, size = 10) => {
  return axios.get(`${API_BASE_URL}/search/foodType`, {
    params: { type, page, size }
  });
};

// Search by difficulty level
export const searchByDifficulty = (level, page = 0, size = 10) => {
  return axios.get(`${API_BASE_URL}/search/difficulty`, {
    params: { level, page, size }
  });
};


// Get recipe by ID
export const getRecipeById = (id) => {
  return axios.get(`${API_BASE_URL}/${id}`);
};

// Create a new recipe
export const createRecipe = (recipe) => {
  return axios.post(`${API_BASE_URL}`, recipe);
};

// Search by food name (GET /search/foodName?name=pasta)
export const searchByFoodName = (name) => {
  return axios.get(`${API_BASE_URL}/search/foodName`, {
    params: { name }
  });
};

// Update a recipe by ID
export const updateRecipe = (id, updatedRecipe) => {
  return axios.put(`${API_BASE_URL}/${id}`, updatedRecipe);
};

// Delete a recipe by ID
export const deleteRecipe = (id) => {
  return axios.delete(`${API_BASE_URL}/${id}`);
};


// Increment total views for a recipe
export const incrementRecipeViews = async (id) => {
  const response = await axios.put(`http://localhost:8080/api/recipes/${id}/view`);
  return response.data;
};

export const getTrendingRecipes = () => axios.get(`${API_BASE_URL}/trending`);
export const getPopularRecipes  = () => axios.get(`${API_BASE_URL}/popular`);


// Get instructions for a recipe (GET /recipes/{id}/instructions)
export const getInstructionsByRecipeId = (id) => {
  return axios.get(`${API_BASE_URL}/${id}/instructions`);
};


// Get nutrition for a recipe (GET /recipes/{id}/nutrition)
export const getNutritionByRecipeId = (id) => {
  return axios.get(`${API_BASE_URL}/${id}/nutrition`);
};
