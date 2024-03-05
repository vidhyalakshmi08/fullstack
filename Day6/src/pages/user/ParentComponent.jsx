import React, { useState } from 'react';
import Shop from './Shop';
import WishlistPage from './WishlistPage';
import CartPage from './CartPage';

const ParentComponent = () => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromWishlist = (product) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== product.id);
    setWishlist(updatedWishlist);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  return (
    <div>
      <Shop addToWishlist={addToWishlist} addToCart={addToCart} />
      <WishlistPage wishlist={wishlist} removeFromWishlist={removeFromWishlist} />
      <CartPage cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default ParentComponent;
