import axios from 'axios';

const API_BASE = 'http://localhost:8080/api/subscribe';

export const getSubscriberCount = () => {
    return axios.get(`${API_BASE}/count`);
}

