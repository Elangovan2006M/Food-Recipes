import axios from "axios";

const API_BASE_URL = 'http://localhost:8080/api/blogs/view';

export const getAllBlogs = () => {
    return axios.get(`${API_BASE_URL}`);
}

export const getBlogsById = (id) => {
    return axios.get(`${API_BASE_URL}/${id}`);
};

export const getRecentBlogs = () =>  {
    return axios.get(`${API_BASE_URL}/recent-blog`)
}