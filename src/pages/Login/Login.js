// src/pages/Login/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Importez le fichier CSS
import {authService} from '../../service/authService'
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate =  useNavigate();
  const submitForm = async(event) => {
    event.preventDefault();
    const userData = { username, password}
    try{

      const response =  await authService.login(userData);
      const jwt=response?.data.jwt;
      console.log(jwt);
      if(jwt){
        authService.setToken(jwt);
        const role=authService.getRole(jwt)
        if (role.includes('ADMIN') && role.includes('USER')) {
          navigate('/admindashbord');
      } else if (role.includes('USER')) {
          navigate('/studentdashbord');
      } else if (role.includes('ADMIN')) {
          navigate('/admindashbord');
      } else {
          navigate('/login');
      }
      
      
      }
      
    }catch(error){
      setError('Invalid username or password');
      authService.setToken();
    }
  
    
  }
  return (
    <div className="login-container">
      <form onSubmit={submitForm}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        {/* token && <p className="success-message">JWT Token: {token}</p> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
