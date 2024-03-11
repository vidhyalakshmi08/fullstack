import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

const Dashboard = () => {
  const [orderData, setOrderData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [products, setProducts] = useState([]);
  const chartRef = useRef(null); // Reference to the chart instance

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const orderResponse = await axios.get('http://localhost:8080/api/order');
      setOrderData(orderResponse.data);

      const userResponse = await axios.get('http://localhost:8080/api/user');
      setUserData(userResponse.data);

      const productsResponse = await axios.get('http://localhost:8080/api/theme');
      setProducts(productsResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
 // Function to handle theme edit
 const handleEdit = async (themeId) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/theme/${themeId}`,
    { headers: { Authorization: `Bearer ${token}` }});
    const existingTheme = response.data; // Assuming your API returns the existing theme details
    setFormData({
      name: existingTheme.name,
      price: existingTheme.price,
      imageUrl: existingTheme.imageUrl,
    });
  } catch (error) {
    console.error('Error fetching theme details for editing:', error);
  }
};

// Function to handle theme deletion
const handleDelete = async (themeId) => {
  try {
    await axios.delete(`http://localhost:8080/api/theme/${themeId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setProducts(products.filter((theme) => theme.themeId !== themeId));
    console.log('Theme deleted successfully!');
  } catch (error) {
    console.error('Error deleting theme:', error);
  }
};

  useEffect(() => {
    if (orderData.length > 0 && userData.length > 0) {
      renderChart();
    }
  }, [orderData, userData]);

  const renderChart = () => {
    // Destroy existing chart if it exists
    if (chartRef.current !== null) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById('dashboardChart');
    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Total Orders', 'Total Users'],
        datasets: [
          {
            label: 'Count',
            data: [orderData.length, userData.length],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center ml-0">Dashboard</h1>
      <div className="bg-white p-6 rounded-md shadow-md" style={{ width: '50%', height: '50%' }}>
        <canvas id="dashboardChart"></canvas>
      </div>
      <div className="table-container" style={{ maxHeight: '50vh', overflowY: 'auto' }}>
        <br />
        <br />
        <table className="table">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((theme) => (
              <tr key={theme.themeId}>
                <td>
                  <img src={theme.imageUrl} alt={theme.name} />
                </td>
                <td>{theme.name}</td>
                <td>{theme.price}</td>
                <td>
                  <button
                    className="button edit-button"
                    onClick={() => handleEdit(theme.themeId)}
                  >
                    Edit
                  </button>
                  <button
                    className="button delete-button"
                    onClick={() => handleDelete(theme.themeId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
