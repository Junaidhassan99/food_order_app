import React, { useContext } from 'react';

import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import DataContext from '../../context/Data-Context';

import './AppBar.css'
import '../MenuList/MenuList.css';

function AppBar(props) {

    const [open, setOpen] = React.useState(false);

    const ctx = useContext(DataContext);

    let itemsInCart = 0;
    let totalPrice = 0;

    ctx.cart.forEach((item, index) => {
        itemsInCart += item.amount;
    });

    ctx.cart.forEach((item, index) => {
        totalPrice += item.amount * item.price;
    });

    const handleClickToOpen = () => {
        setOpen(true);
    };

    const handleToClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <div className='app-bar'>
                <div className='title'>ReactMeals</div>
                <div className='spacer'></div>
                <button className='cart-button' onClick={handleClickToOpen}>
                    <span className="material-icons icon-style">
                        shopping_cart
                    </span>
                    <div>Your Cart</div>
                    <div className='cart-button-counter'>{itemsInCart}</div>
                </button>
            </div>
            <Dialog open={open} onClose={handleToClose}>
                <DialogTitle>{'Your Cart'}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {ctx.cart.map((item, index) => {
                            return <div key={item.timeStamp}>
                                <div className='dialog-item'>
                                    <div>
                                        <div className='title-and-price title-menu-item'>{item.title}</div>
                                        <div className='price-and-amount-dialog-row'>
                                            <div className='title-and-price price'>{`$${item.price}`}</div>
                                            <div className='spacer-price-and-amount-dialog-row'></div>
                                            <div >{`x${item.amount}`}</div>
                                        </div>
                                    </div>
                                    <div className='spacer-dialog-item'></div>
                                    <div className='remove-cart-item-button' onClick={() => ctx.removeFromCart(item.timeStamp)}>
                                        <center>
                                            <span class="material-icons icon-style">
                                                remove
                                            </span>
                                        </center>
                                    </div>
                                </div>
                                <hr />
                            </div>;
                        })}
                        <div className='title-and-price title-menu-item' >{`Total Amount = $${totalPrice.toFixed(2)}`}</div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button onClick={handleToClose}
                        className='add-button'
                        style={{ backgroundColor: 'white', color: 'black' }} >
                        Close
                    </button>
                    <div onClick={() => {
                        console.log('ordering: ...');
                        console.log(ctx.cart);
                    }}
                    >
                        <button className='add-button' > Order</button>

                    </div>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AppBar;