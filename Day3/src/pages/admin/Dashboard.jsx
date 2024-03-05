// components/Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex-1 p-9 pr-9 flex items-center justify-center">
      <h1 className="text-3xl font-bold mb-4 text-center ml-0">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Users</h2>
          <p className="text-4xl font-bold">256</p>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Orders</h2>
          <p className="text-4xl font-bold">120</p>
        </div>
        {/* Add more dashboard cards based on your requirements */}
      </div>
    </div>
  );
};

export default Dashboard;
