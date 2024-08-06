import axiosInstance from "../axios/axiosInstance";
import { jwtDecode as jwt_decode } from 'jwt-decode'; // Correct import

const setToken = (token) => {
  localStorage.setItem('token', token);
};

const getToken = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return token;
  }
  return null;
};

const login = (userData) => {
  return axiosInstance.post('/loginUserJwt', userData);
};

const getUserName = () => {
  const token = getToken();
  if (token) {
    const payload = jwt_decode(token);
    const username = payload.sub;
    return username;
  }
  return null;
};

const getRole = () => {
  const token = getToken();
  if (token) {
    const payload = jwt_decode(token);
    const role = payload.role;
    return role;
  }
  return null;
};

const logout = () => {
  localStorage.clear();
};

const isLogInt = () => {
  const token = getToken();
  if (token) {
    const payload = jwt_decode(token);
    const isLogin = Date.now() < payload.exp * 1000;
    return isLogin;
  }
  return false; // Return false if there's no token
};

// Export all methods
export  const authService = { getToken, setToken, login, isLogInt,logout,getRole,getUserName};
