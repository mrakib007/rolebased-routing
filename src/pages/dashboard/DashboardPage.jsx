import React from 'react';
import Sidebar from './Sidebar'; // Import the Sidebar component

const DashboardPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-6 bg-gray-100 flex-1">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <p>Welcome to the dashboard! This is where your main content goes.</p>
      </main>
    </div>
  );
};

export default DashboardPage;
