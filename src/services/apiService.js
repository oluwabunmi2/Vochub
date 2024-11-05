import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const register = async (username, email, password, confirmPassword) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      name: username,
      email,
      password,
      password_confirmation: confirmPassword,
    });
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
  
export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
};

export const forgotPassword = async (email) => {
    try {
      const response = await axios.post(`${API_URL}/forgot-password`, {
        email,
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message || 'An error occurred');
      } else {
        throw new Error('An error occurred');
      }
    }
};

export const googleAuth = async () => {
    try {
      const response = await axios.get(`${API_URL}/auth`);
      window.location.href = response.data.url;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message || 'Some error occurred');
      } else {
        throw new Error('An error occurred');
      }
    }
};

export const updateProfilePicture = async (file) => {
  const token = localStorage.getItem('token');
  const formData = new FormData();
  formData.append('profile_picture', file);

  try {
      const response = await axios.post(`${API_URL}/update-profile-picture`, formData, {
          headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
          },
      });
      return response.data;
  } catch (error) {
      throw error.response ? error.response.data : error;
  }
};

export const getAllJobs = async () => {
  try{
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/jobs`,{
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
    },
    });
     // Ensure the response data is an array
     if (Array.isArray(response.data)) {
      return response.data;
    } else {
      throw new Error('Invalid response format');
    }
  }catch(error){
    throw error.response ? error.response.data : error;
  }
};

export const getJobById = async (id) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/jobs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};