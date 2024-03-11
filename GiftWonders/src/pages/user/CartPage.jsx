import React, { useState, useEffect } from 'react';
import '../../assets/css/cart.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const CartPage = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const handleBuyNow = (giftid) => {
        // Perform actions to buy the item with the given itemId
        console.log(`Buying item with ID: ${giftid}`);
        
        // Add your logic for purchasing the item
    
        // Navigate to the checkout page
        navigate('/app-project/user/checkout'); // Change '/checkout' to the appropriate path for your checkout page
    };
    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/gift');
                console.log('Response data:', response.data); 
                setCart(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching cart items:', error);
                setLoading(false);
            }
        };

        fetchCartItems();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2 className="cart-header">Cart Items</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th> 
                        <th>Details</th>
                        <th>Price</th>
                        <th>BUY</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <tr key={item.giftid}>
                            <td>{item.name}</td>
                            <td>{item.details}</td>
                            <td>{item.price}</td>
                            <td><button onClick={() => handleBuyNow(item.giftid)}>Buy Now</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CartPage;
