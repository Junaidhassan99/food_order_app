import React, { useState } from "react";

const DataContext = React.createContext({
    menu: [],
    cart: [],
    addToCart: (cartItem) => { },
    removeFromCart:(timeStamp) => { },
});



function DataContextProvider(props) {
    const menu = [
        {
            id: '1',
            title: 'Sushi',
            description: 'Finest dish and veggies',
            price: 22.99,
        },
        {
            id: '2',
            title: 'Schnitzel',
            description: 'A german speciality',
            price: 16.50,
        },
        {
            id: '3',
            title: 'Barbecue Burger',
            description: 'American, raw, meaty',
            price: 12.99,
        },
        {
            id: '4',
            title: 'Green Bowl',
            description: 'Healthy and green',
            price: 18.99,
        },
        {
            id: '5',
            title: 'Sushi',
            description: 'Finest dish and veggies',
            price: 22.99,
        },
        {
            id: '6',
            title: 'Schnitzel',
            description: 'A german speciality',
            price: 16.50,
        },
        {
            id: '7',
            title: 'Barbecue Burger',
            description: 'American, raw, meaty',
            price: 12.99,
        },
        {
            id: '8',
            title: 'Green Bowl',
            description: 'Healthy and green',
            price: 18.99,
        },
    ];

    const [cart, setCartState] = useState([]);

    function addToCart(cartItem) {
        //console.log(cartItem);

        setCartState([...cart, cartItem]);
    }

    function removeFromCart(timeStamp) {
        let afterRemovalCart = cart.filter(function (item) {
            return item.timeStamp !== timeStamp
        })
        setCartState(afterRemovalCart);

    }

    return (<DataContext.Provider
        value={{
            menu: menu,
            cart: cart,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
        }}
    >
        {props.children}
    </DataContext.Provider>);
}

export default DataContext;
export { DataContextProvider };