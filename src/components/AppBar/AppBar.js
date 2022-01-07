import React from 'react';

import './AppBar.css'

function AppBar(props) {
    return (
        <div class='app-bar'>
            <div class='title'>ReactMeals</div>
            <div class='spacer'></div>
            <div class='cart-button'>
                <span class="material-icons">
                    shopping_cart
                </span>
                <div>Your Cart</div>
                <div class='cart-button-counter'>0</div>
            </div>
        </div>
    );
}

export default AppBar;