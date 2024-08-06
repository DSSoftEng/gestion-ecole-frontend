// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { authService } from '../service/authService';

const PrivateRoute = ({ element: Component, requiredRole, ...rest }) => {
  const isAuthenticated = authService.isLogInt();
  const userRole = authService.getRole();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && !userRole.includes(requiredRole)) {
    return <Navigate to="/" />;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
