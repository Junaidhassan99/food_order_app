import React from 'react';

import './AppBar.css'

function AppBar(props) {
    return (
        <div className='app-bar'>
            <div className='title'>ReactMeals</div>
            <div className='spacer'></div>
            <div className='cart-button'>
                <span className="material-icons">
                    shopping_cart
                </span>
                <div>Your Cart</div>
                <div className='cart-button-counter'>0</div>
            </div>
        </div>
    );
}

export default AppBar;