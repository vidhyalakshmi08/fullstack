import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserInfo = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch order details from the backend server
    axios.get('http://localhost:8080/api/order')
      .then(response => {
        setOrders(response.data); // Set the retrieved orders in the state
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl bg-white">
      <h1 className="mt-20 mb-10 ml-5 text-2xl text-center font-bold text-gray-900">Order Management</h1>
      {/* Navigation */}
      <div className="bg-white py-2 px-3">
        {/* Navigation links */}
      </div>
      {/* Table */}
      <div className="w-screen bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-2 py-10">
          <div className="mt-4 w-full">
            <div className="flex w-full flex-col items-center justify-between space-y-2 sm:flex-row sm:space-y-0">
              {/* Search bar */}
              {/* Filter button */}
            </div>
          </div>
          <div className="mt-6 overflow-hidden rounded-xl bg-white px-6 shadow lg:px-4">
            <table className="min-w-full border-collapse border-spacing-y-2 border-spacing-x-2">
              {/* Table header */}
              <thead className="border-b">
                <tr>
                  <th className="whitespace-normal hidden py-4 text-sm font-semibold text-gray-800 sm:px-3 lg:table-cell">Order ID</th>
                  <th className="whitespace-normal hidden py-4 text-sm font-semibold text-gray-800 sm:px-3 lg:table-cell">Price</th>
                  <th className="whitespace-normal hidden py-4 text-sm font-semibold text-gray-800 sm:px-3 lg:table-cell">Quantity</th>
                  {/* Add more headers as needed */}
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="bg-white lg:border-gray-300">
                {/* Dynamically generated table rows */}
                {orders.map(order => (
                  <tr key={order.id}>
                    {/* Table data for each column */}
                    <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">{order.id}</td>
                    <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">{order.orderprice}</td>
                    <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">{order.quantity}</td>
                    {/* Add more table data as needed */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
