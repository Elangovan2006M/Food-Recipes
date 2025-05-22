import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/users';

// Create a new user
export const createUser = (user) => {
  return axios.post(API_BASE_URL, user);
};

// Delete user by ID
export const deleteUser = (id) => {
  return axios.delete(`${API_BASE_URL}/${id}`);
};

// Get user by email
export const getUserByEmail = (email) => {
  return axios.get(`${API_BASE_URL}/email`, {
    params: { email }
  });
};
