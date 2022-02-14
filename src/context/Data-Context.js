import React, { useState } from "react";

const DataContext = React.createContext({
    menu: [],
    cart: [],
    addToCart: (cartItem) => { },
    removeFromCart: (timeStamp) => { },
    setMenuData: () => { },
    getMenuData: () => { },
    placeOrder: (userAddress) => { },
});



function DataContextProvider(props) {
    //let menu = [];
    // const menu = [
    //     {
    //         id: '1',
    //         title: 'Sushi',
    //         description: 'Finest dish and veggies',
    //         price: 22.99,
    //     },
    //     {
    //         id: '2',
    //         title: 'Schnitzel',
    //         description: 'A german speciality',
    //         price: 16.50,
    //     },
    //     {
    //         id: '3',
    //         title: 'Barbecue Burger',
    //         description: 'American, raw, meaty',
    //         price: 12.99,
    //     },
    //     {
    //         id: '4',
    //         title: 'Green Bowl',
    //         description: 'Healthy and green',
    //         price: 18.99,
    //     },
    //     {
    //         id: '5',
    //         title: 'Sushi',
    //         description: 'Finest dish and veggies',
    //         price: 22.99,
    //     },
    //     {
    //         id: '6',
    //         title: 'Schnitzel',
    //         description: 'A german speciality',
    //         price: 16.50,
    //     },
    //     {
    //         id: '7',
    //         title: 'Barbecue Burger',
    //         description: 'American, raw, meaty',
    //         price: 12.99,
    //     },
    //     {
    //         id: '8',
    //         title: 'Green Bowl',
    //         description: 'Healthy and green',
    //         price: 18.99,
    //     },
    // ];

    const [cart, setCartState] = useState([]);
    const [menu, setmenuState] = useState([]);

    async function setMenuData() {

        await fetch('https://web-2022-c2111-default-rtdb.firebaseio.com/menu.json', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'data': menu }),
        });

    }

    async function getMenuData() {
        await fetch('https://web-2022-c2111-default-rtdb.firebaseio.com/menu.json')
            .then(response => response.json())
            .then(data => {


                setmenuState(data['-MvsLWku0D0wKANwip34']['data']);

                console.log(menu);

            });
    }

    async function placeOrder(userAddress) {
        await fetch('https://web-2022-c2111-default-rtdb.firebaseio.com/order.json', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'address': userAddress, 'items': cart }),
        });
    }

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
            setMenuData: setMenuData,
            getMenuData: getMenuData,
            placeOrder: placeOrder,
        }}
    >
        {props.children}
    </DataContext.Provider>);
}

export default DataContext;
export { DataContextProvider };