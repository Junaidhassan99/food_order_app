import React, { useContext, useState } from 'react';

import DataContext from '../../context/Data-Context';

import './MenuList.css';

function MenuItem(props) {
    //const amountRef = useRef();
    let [amount,setAmount] = useState('1');
    //console.log(amountRef.current.value);

    function updateAmount(event) {
        setAmount(event.target.value);
    }

    return <div>
        <div className='menu-item' key={props.menuItem.id}>
            <div className='menu-item-side left-side'>
                <div className='title-and-price title-menu-item'>{props.menuItem.title}</div>
                <div>{props.menuItem.description}</div>
                <div className='title-and-price price'>{`$${props.menuItem.price}`}</div>
            </div>
            <div className='menu-item-side right-side'>
                <div className='amount-and-input'>
                    <div className='amount'>Amount</div>
                    <div className='spacer-amount'></div>
                    <div ><input className='input' type='number' min={1} value={amount} onChange={updateAmount}></input></div>
                </div>
                <div className='add-button' onClick={() => props.onAddToCart(props.menuItem, amount)}>+ Add</div>
            </div>
        </div>
        <hr />
    </div>;
}

function MenuList() {
    const ctx = useContext(DataContext);

    function onAddToCart(menuItem, amount) {
        let cartItem = {
            id: menuItem.id,
            title: menuItem.title,
            price: menuItem.price,
            amount: parseInt(amount),
            timeStamp: Date.now().toString()
        };

        //console.log(cartItem);
        ctx.addToCart(cartItem);
    }

    return <div className='menu-list'>
        {ctx.menu.map((menuItem, index) => {
            return <MenuItem menuItem={menuItem} onAddToCart={onAddToCart} />
        })}
    </div>

}

export default MenuList;
