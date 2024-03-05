import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import img1 from '../../assets/images/gift1.avif';
import img2 from '../../assets/images/gift2.avif';
import img3 from '../../assets/images/gift3.avif';
import img4 from '../../assets/images/gift4.avif';
import img5 from '../../assets/images/gift5.jpg';
import img6 from '../../assets/images/gift6.jpg';
import CartPage from './CartPage';
const Shop = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: 'Customized Cups', price: 250, image: img1, description: 'Description for Customized Cups.' },
    { id: 2, name: 'PhotoFrames', price: 500, image: img2, description: 'Description for PhotoFrames.' },
    { id: 3, name: 'Pillow Personalized', price: 600, image: img3, description: 'Description for Pillow Personalized.' },
    { id: 4, name: 'Personalized Letters', price: 200, image: img4, description: 'Description for Personalized Letters.' },
    { id: 5, name: 'Resin Art', price: 900, image: img5, description: 'Description for Resin Art.' },
    { id: 6, name: 'KeyChains', price: 150, image: img6, description: 'Description for KeyChains.' },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log(cart);
  };

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
    console.log(wishlist);
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
              <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden" onClick={() => showDescription(product)}>
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.image} />
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
      {/* <CartPage cart={cart} /> */}
      {selectedProduct && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 max-w-md rounded shadow-lg">
            <h2 className="text-gray-900 title-font text-lg font-medium">{selectedProduct.name}</h2>
            <p className="mt-2 text-gray-600">Rs {selectedProduct.price}.00</p>
            <p className="mt-4">{selectedProduct.description}</p>
            <div className="flex justify-between mt-4">
              <button className="text-white bg-gray-600 border-0 py-1 px-4 focus:outline-none rounded"  onClick={() => addToCart(selectedProduct)}>
                <FontAwesomeIcon icon={faCartPlus} />
              </button>
              <button className="text-white bg-gray-600 border-0 py-1 px-4 focus:outline-none rounded" onClick={() => addToWishlist(selectedProduct)}>
                <FontAwesomeIcon icon={faHeart} />
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
