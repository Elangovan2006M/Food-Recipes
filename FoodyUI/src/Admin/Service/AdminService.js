import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const getAllAdmins = () => {
    return axios.get(`${API_BASE_URL}/admin/all`);
}

export const loginAdmin = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/admin/login`, {
      email,
      password,
    });

    const data = response.data;

    return {
      success: data.success,
      message: data.message || "Login failed",
      data,
    };
  } catch (error) {
    console.error("Login API error:", error.response || error.message); 
    return {
      success: false,
      message: "Something went wrong during login!",
    };
  }
};


export const registerAdmin = async (userName, email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/admin/register`, {
      userName,
      email,
      password,
    });

    return {
      success: true,
      data: response.data,
      message: "Registration successful",
    };
  } catch (error) {
    console.error("Registration error:", error);
    return {
      success: false,
      message: error.response?.data?.message || "Registration failed",
    };
  }
};
