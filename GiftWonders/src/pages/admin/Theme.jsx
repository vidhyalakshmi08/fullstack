import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux'; // Importing useSelector from react-redux
import '../../assets/css/theme.css'

const Theme = () => {
  const token = useSelector(state => state.auth.token);

  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    imageUrl: '',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Function to handle form submission (add new product)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newProduct = {
        name: formData.name,
        price: formData.price,
        imageUrl: formData.imageUrl || 'https://via.placeholder.com/150', // Default placeholder image
      };
      await axios.post(
        'http://localhost:8080/api/theme/addtheme',
        newProduct,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log('Product added successfully!');
      setFormData({ name: '', price: '', imageUrl: '' }); // Clear the form fields
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="container">
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter Theme Name"
            required
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Enter Price"
            required
          />
          <input
            type="url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
            placeholder="Enter Photo URL"
          />
          <br />
          <br />
          <button className="button" type="submit">
            Save Gift
          </button>
        </form>
      </div>
    </div>
  );
};

export default Theme;
