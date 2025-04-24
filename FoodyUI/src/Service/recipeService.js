import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/recipes';

// Get all recipes
export const getAllRecipes = () => {
  return axios.get(`${API_BASE_URL}`);
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

// Search by cuisines (GET /search/cuisines?cuisines=Indian)
export const searchByCuisines = (cuisines) => {
  return axios.get(`${API_BASE_URL}/search/cuisines`, {
    params: { cuisines }
  });
};

// Search by total time (GET /search/totalTime?time=30)
export const searchByTotalTime = (time) => {
  return axios.get(`${API_BASE_URL}/search/totalTime`, {
    params: { time }
  });
};

// Search by food type (GET /search/foodType?type=Breakfast)
export const searchByFoodType = (type) => {
  return axios.get(`${API_BASE_URL}/search/foodType`, {
    params: { type }
  });
};

// Search by difficulty level (GET /search/difficulty?level=Easy)
export const searchByDifficulty = (level) => {
  return axios.get(`${API_BASE_URL}/search/difficulty`, {
    params: { level }
  });
};
