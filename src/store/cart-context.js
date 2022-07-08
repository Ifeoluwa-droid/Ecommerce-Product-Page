import React from 'react';
import { useState, useCallback } from 'react';

const CartContext = React.createContext({
    totalItems: 0,
    numberOfCartItems: 0,
    cartItems: {},
    totalCost: 0,
    cartIsShown: false,
    checkout: () => {},
    showCart: () => {},
    addItemToCart: () => {},
    removeItemFromCart: () => {}
});


// Cart Context Provider

const CartProvider = props => {
    const [numberOfCartItems] = useState(0);
    const [cartItems, setCartItems] = useState({});
    const [totalCost] = useState(0);
    const [cartIsShown, setCartIsShown] = useState(false);

    const calculateTotalItems = useCallback((itemObject) => {
        let totalItems = 0;

        for (let key in itemObject) {
            totalItems += itemObject[key].count
        }

        return totalItems;
    }, []);

    const totalItems = calculateTotalItems(cartItems);

    const showCartHandler = () => {
        setCartIsShown(prevValue => !prevValue);   // it can be changed to true
    }

    const checkoutHandler = () => {
        setCartIsShown(false);
    }

    const addItemToCartHandler = (itemData) => {
        setCartItems(
            prevValue => {
                return {
                    ...prevValue,
                    [itemData.id] : {
                        count: prevValue[itemData.id] ? prevValue[itemData.id].count + itemData.itemCount : itemData.itemCount,
                        title: prevValue[itemData.title] ? prevValue[itemData.title] : itemData.title,
                        cost: prevValue[itemData.cost] ? prevValue[itemData.cost] : itemData.cost,
                        image: prevValue[itemData.image] ? prevValue[itemData.image] : itemData.image,
                        totalCost: prevValue[itemData.id] ? (prevValue[itemData.id].count + itemData.itemCount) * Number(itemData.cost) : itemData.itemCount * Number(itemData.cost)
                    }
                }
            }
        )
    }

    const removeItemFromCartHandler = (id) => { 
        /// The idea here is to delete the cart item completely
        setCartItems(
            prevValue => {
                delete(prevValue[id]);
                const newValue = {...prevValue};
                return newValue;
            }
        )
    }

    const cartState = {
        totalItems: totalItems,
        numberOfCartItems: numberOfCartItems,
        cartItems: cartItems,
        totalCost: totalCost,
        cartIsShown: cartIsShown,
        checkout: checkoutHandler,
        showCart: showCartHandler,
        addItemToCart: addItemToCartHandler,
        removeItemFromCart: removeItemFromCartHandler
    };

    return ( 
        <CartContext.Provider value={cartState}>
            {props.children}
        </CartContext.Provider>
     );
}
 
export {CartContext, CartProvider};


