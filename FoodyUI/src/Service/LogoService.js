// src/api/logoApi.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/logos';

// Get all logos
export const getAllLogos = () => {
  return axios.get(API_BASE_URL);
};

// Get logo by ID
export const getLogoById = (id) => {
  return axios.get(`${API_BASE_URL}/${id}`);
};

// Create a new logo
export const createLogo = (logo) => {
  return axios.post(API_BASE_URL, logo);
};

// Update logo by ID
export const updateLogo = (id, updatedLogo) => {
  return axios.put(`${API_BASE_URL}/${id}`, updatedLogo);
};

// Delete logo by ID
export const deleteLogo = (id) => {
  return axios.delete(`${API_BASE_URL}/${id}`);
};
