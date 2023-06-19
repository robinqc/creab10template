import { useNavigate } from 'react-router-dom';
import api from './api';

export const login = async (email, password) => {
  const response = await api.post('/auth/login', {
    email,
    password,
  });
  localStorage.setItem('token', response.data.accessToken);
};

export const getAuthToken = () => {
  const token = localStorage.getItem('token');

  return token;
};

export const useLogout = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  return logout;
};
