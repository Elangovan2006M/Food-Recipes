import axios from "axios";

const API_BASE_URL = 'http://localhost:8080/api/blogs';

export const getAllBlogs = (page = 0, size = 10) => {
    return axios.get(`${API_BASE_URL}`, {
      params: { page, size }
    });
  };

export const getBlogById = (id) => {
    return axios.get(`${API_BASE_URL}/${id}`);
};

export const getRecentBlogs = () =>  {
    return axios.get(`${API_BASE_URL}/recent-blog`)
}

export const getRecipeFromBlog = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${id}/recipes`);
        return response.data;
    } catch (error) {
        console.error('Error fetching recipe:', error);
        throw error;
    }
};