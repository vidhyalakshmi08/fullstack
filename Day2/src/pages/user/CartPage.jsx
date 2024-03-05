import React from 'react';

const CartPage = ({ cart, removeFromCart, updateQuantity }) => {
  // Calculate total price
  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
console.log(cart);
  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id}>
                  <td><img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }} /></td>
                  <td>{product.name}</td>
                  <td>Rs {product.price}.00</td>
                  <td>
                    <input 
                      type="number" 
                      value={product.quantity} 
                      onChange={(e) => updateQuantity(product.id, parseInt(e.target.value, 10))} 
                      min="1" 
                    />
                  </td>
                  <td>Rs {product.price * product.quantity}.00</td>
                  <td>
                    <button onClick={() => removeFromCart(product.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <h3>Total Price: Rs {totalPrice}.00</h3>
            <button onClick={() => alert("Redirect to checkout page")}>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
