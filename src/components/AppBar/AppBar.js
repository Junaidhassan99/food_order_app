import React, { useContext } from 'react';

import DataContext from '../../context/Data-Context';

import './AppBar.css'

function AppBar(props) {

    const ctx = useContext(DataContext);

    let itemsInCart=0;

    ctx.cart.forEach((item,index)=>{
        itemsInCart+=item.amount;
    });


    return (
        <div className='app-bar'>
            <div className='title'>ReactMeals</div>
            <div className='spacer'></div>
            <div className='cart-button'>
                <span className="material-icons">
                    shopping_cart
                </span>
                <div>Your Cart</div>
                <div className='cart-button-counter'>{itemsInCart}</div>
            </div>
        </div>
    );
}

export default AppBar;