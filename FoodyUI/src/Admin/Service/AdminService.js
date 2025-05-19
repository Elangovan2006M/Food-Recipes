import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/admin-user';

export const getAllAdmins = () => {
    return axios.get(`${API_BASE_URL}/all`);
}

// export const getAdminById = (id) => {
//     return axios.get(`${API_BASE_URL}/${id}`);
// }

// export const getLoggedInAdmin = () => {
//     return axios.get(`${API_BASE_URL}/me`);
// }

