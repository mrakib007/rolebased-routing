import React from 'react';
import { Navigate } from 'react-router-dom';

const RoleBasedRoute = ({ element, allowedRoles }) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role'); // Assuming the role is stored in localStorage

  // Check if the user is logged in and has one of the allowed roles
  const isAllowed = token && allowedRoles?.includes(role);

  // Render the element if allowed, otherwise redirect to login
  return isAllowed ? element : <Navigate to="/login" />;
};

export default RoleBasedRoute;
