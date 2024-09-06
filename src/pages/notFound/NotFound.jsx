import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-xl font-medium text-gray-600 mt-4">Page Not Found</p>
      <p className="text-gray-500 mt-2">Sorry, the page you are looking for does not exist.</p>
      <Link
        to="/dashboard"
        className="mt-6 text-blue-600 hover:text-blue-800 underline"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
