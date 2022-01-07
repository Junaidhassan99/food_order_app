import React, { useContext } from 'react';

import DataContext from '../../context/Data-Context';

import './MenuList.css';

function MenuList() {
    const ctx = useContext(DataContext);

    console.log(ctx.menu);

    return <div className='menu-list'>
        {ctx.menu.map((menuItem, index) => {
            return <div>
                <div className='menu-item' key={menuItem.id}>
                    <div className='menu-item-side left-side'>
                        <div className='title-and-price title-menu-item'>{menuItem.title}</div>
                        <div>{menuItem.description}</div>
                        <div className='title-and-price price'>{`$${menuItem.price}`}</div>
                    </div>
                    <div className='menu-item-side right-side'>
                        <div className='amount-and-input'>
                            <div className='amount'>Amount</div>
                            <div className='spacer'></div>
                            <div ><input className='input' type='number' min={1}></input></div>
                        </div>
                        <div className='add-button'>+ Add</div>
                    </div>
                </div>
                <hr />
            </div>;
        })}
    </div>

}

export default MenuList;
