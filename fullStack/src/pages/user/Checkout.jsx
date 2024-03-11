import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/checkout.css';

const CheckoutPage = () => {
    const [card, setCard] = useState('');
    const [orderprice, setOrderPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const token = useSelector(state => state.auth.token);
    const navigate = useNavigate();

    const placeOrder = async () => {
        setLoading(true);
        try {
            const response = await axios.post(
                'http://localhost:8080/api/order/addorder',
                { card, orderprice, quantity },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            console.log('Order placed:', response.data);
            handleOrderPlaced(); // Call function to update state
        } catch (error) {
            console.error('Error placing order:', error);
        }
        setLoading(false);
    };

    const handleOrderPlaced = () => {
        setOrderPlaced(true);
    };

    useEffect(() => {
        if (orderPlaced) {
            navigate('/app-project/user/success');
        }
    }, [orderPlaced, navigate]);

    return (
        <div className='containerche'>
            <h2>Checkout</h2>
            <div>
                <label htmlFor="cardNumber">Card Number:</label>
                <input
                    type="text"
                    id="cardNumber"
                    value={card}
                    onChange={(e) => setCard(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="amount">Amount:</label>
                <input
                    type="number"
                    id="amount"
                    value={orderprice}
                    onChange={(e) => setOrderPrice(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="quantity">Quantity:</label>
                <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </div>
            <button onClick={placeOrder} disabled={loading}>
                {loading ? 'Placing Order...' : 'Place Order'}
            </button>
        </div>
    );
};

export default CheckoutPage;
