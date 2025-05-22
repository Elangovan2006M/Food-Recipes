import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/subscribe';

// Subscribe using email
export const subscribeWithEmail = (email) => {
  return axios.post(API_BASE_URL, null, { params: { email } });
};

// Get all subscribers with pagination
// Example: getAllSubscribers(0, 10)
export const getAllSubscribers = (page = 0, size = 10) => {
  return axios.get(`${API_BASE_URL}/all`, {
    params: { page, size }
  });
};

// Search subscribers by email keyword with pagination
// Example: searchSubscribers("john", 0, 10)
export const searchSubscribers = (keyword, page = 0, size = 10) => {
  return axios.get(`${API_BASE_URL}/search`, {
    params: { keyword, page, size }
  });
};

// Delete subscriber by ID
export const deleteSubscriber = (id) => {
  return axios.delete(`${API_BASE_URL}/${id}`);
};

export const getSubscriberCount = () => {
    return axios.get(`${API_BASE_URL}/count`);
}
