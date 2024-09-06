// components/ProtectedLayout.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const ProtectedLayout = () => {
  const token = localStorage.getItem('token'); // Check for token in local storage

  if (!token) {
    // Redirect to login if the user is not authenticated
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-6 bg-gray-100 flex-1">
        <Outlet /> {/* This will render the child routes */}
      </main>
    </div>
  );
};

export default ProtectedLayout;
