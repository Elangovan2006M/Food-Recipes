import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/socialmedia';

// Get all social media records
export const getAllSocialMedia = () => {
  return axios.get(API_BASE_URL);
};

// Get social media by ID
export const getSocialMediaById = (id) => {
  return axios.get(`${API_BASE_URL}/${id}`);
};

// Create a new social media record
export const createSocialMedia = (socialMedia) => {
  return axios.post(API_BASE_URL, socialMedia);
};

// Update social media by ID
export const updateSocialMedia = (id, updatedSocialMedia) => {
  return axios.put(`${API_BASE_URL}/${id}`, updatedSocialMedia);
};

// Delete social media by ID
export const deleteSocialMedia = (id) => {
  return axios.delete(`${API_BASE_URL}/${id}`);
};
