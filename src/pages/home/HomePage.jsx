import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
          <h1 className="text-4xl font-bold text-gray-800 text-center">Welcome to my website</h1>
          <p className="text-gray-600 text-center mt-4">This is a simple website built with React and Tailwind CSS.</p>
        </div>
      </div>
    );
};

export default HomePage;
