// Import necessary modules
import React from 'react';
import '../../assets/css/placed.css'
import { Link } from 'react-router-dom';
// Navbar component
// MainContent component
const MainContent = () => {
    return (
        <div >
            <div>
                <div>
                    <div>
                        <div className="message-box">
                            <div className="success-container">
                                <br />
                                <img src="https://scontent-lcy1-1.xx.fbcdn.net/v/t1.6435-9/31301640_2114242505489348_3921532491046846464_n.png?_nc_cat=104&ccb=1-3&_nc_sid=973b4a&_nc_ohc=pfOalMq8BzUAX-k-rhY&_nc_ht=scontent-lcy1-1.xx&oh=3af014dd12fa6e3d1816a3425a80e516&oe=609BE04A" alt="" style={{ height: '100px' }} />
                                <br />
                                <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                                    <hr />
                                </div>
                                <br />
                                <h1 className="monserrat-font" style={{ color: 'Grey' }}>Thank you for your order</h1>
                                <br />
                                <div className="confirm-green-box">
                                    <br />
                                    <h5>ORDER CONFIRMATION</h5>
                                    <p>Your order has been sucessful!</p>
                                </div>
                                <br />
                                <button id="create-btn" className="btn btn-ouioui-secondary margin-left-5px"><Link to='/app-project/user/shop'>Back to Shop</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Export the components
export default MainContent ;
