import React, { useState } from 'react';
import '../../assets/css/form.css'; 
const Theme = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'photo frame', price: 1500, photo: 'data:image/jpeg;base64,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' },
    { id: 2, name: 'mug', price: 690, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQo_6cfPismHCce1XAxIOXCYrFOYSTSt2G_g&usqp=CAU' },
    { id: 3, name: 'calender', price:200 , photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeiFcJzjw--cERDZoD1C9ZrF9PUTl-PzWkMnI4u9Adw_ylpejB4eEi5ETH07jdROvJfqg&usqp=CAU' },
  ]);

  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    photo: '',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Function to handle form submission (add or edit product)
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: products.length + 1,
      name: formData.name,
      price: formData.price,
      photo: formData.photo || 'https://via.placeholder.com/150', // Default placeholder image
    };
    const existingProductIndex = products.findIndex((product) => product.id === newProduct.id);
    if (existingProductIndex !== -1) {
      // Edit existing product
      const updatedProducts = [...products];
      updatedProducts[existingProductIndex] = newProduct;
      setProducts(updatedProducts);
    } else {
      // Add new product
      setProducts([...products, newProduct]);
    }
    setFormData({
      name: '',
      price: '',
      photo: '',
    });
  };

  // Function to handle product deletion
  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Function to handle product edit
  const handleEdit = (product) => {
    setFormData({
      name: product.name,
      price: product.price,
      photo: product.photo,
    });
  };

  return (
    <div className="container">
      <div className="add-product">
      <br/>
      <br/>
        <br/>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter Product Name"
            required
          />
          <br/>
          <br/>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Enter Price"
            required
          />
           <br/>
           <br/>
          <input
            type="url"
            name="photo"
            value={formData.photo}
            onChange={handleInputChange}
            placeholder="Enter Photo URL"
          />
           <br/>
           <br/>
          <button className="button" type="submit">Save Product</button>
        </form>
      </div>

      <div className="table-container">
      <br/>
      <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <table className="table">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td><img src={product.photo} alt={product.name} /></td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <button className="button edit-button" onClick={() => handleEdit(product)}>Edit</button>
                  <button className="button delete-button" onClick={() => handleDelete(product.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Theme;