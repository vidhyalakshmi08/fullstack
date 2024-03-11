import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/theme'); // Replace the URL with your actual API endpoint
      setProducts(response.data); // Update the state with fetched products data
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addToCart = (product) => {
    // Make a POST request to add the product to the backend
    axios.post('http://localhost:8080/api/gift/addgift', product)
      .then(response => {
        console.log('Product added to the cart:', response.data);
        setCart([...cart, product]);
      })
      .catch(error => {
        console.error('Error adding product to cart:', error);
      });
  };

  const showDescription = (product) => {
    setSelectedProduct(product);
  };

  const closeDescription = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <section className="text-yellow-500 bg-yellow-100 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product) => (
              <div key={product.themeId} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden" onClick={() => showDescription(product)}>
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.imageUrl} />
                </a>
                <div className="mt-4">
                  <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                  <p className="mt-1">Rs {product.price}.00</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedProduct && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 max-w-md rounded shadow-lg">
            <h2 className="text-gray-900 title-font text-lg font-medium">{selectedProduct.name}</h2>
            <p className="mt-2 text-gray-600">Rs {selectedProduct.price}.00</p>
            <p className="mt-4">{selectedProduct.description}</p>
            <div className="flex justify-between mt-4">
              <button className="text-white bg-gray-600 border-0 py-1 px-4 focus:outline-none rounded" onClick={() => addToCart(selectedProduct)}>
                <FontAwesomeIcon icon={faCartPlus} />
              </button>
            </div>
            <button onClick={closeDescription} className="mt-6 bg-yellow-500 text-white px-4 py-2 rounded">Close Description</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
