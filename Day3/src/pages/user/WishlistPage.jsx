import React from 'react';

const WishlistPage = ({ wishlist, removeFromWishlist }) => {
  if (!wishlist || wishlist.length === 0) {
    return (
      <div>
        <h1>Wishlist</h1>
        <p>Your wishlist is empty.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Wishlist</h1>
      <ul>
        {wishlist.map((product) => (
          <li key={product.id}>
            <div>{product.name}</div>
            <button onClick={() => removeFromWishlist(product)}>Remove from Wishlist</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WishlistPage;
