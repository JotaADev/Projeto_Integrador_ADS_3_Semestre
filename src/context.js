import React from "react";

export const AppContext = React.createContext();


export const AppProvider = ({children}) => {
    const [loginToggle, setLoginToggle] = React.useState(false);

    const [cartItems, setCartItems] = React.useState(() => {
        return JSON.parse(localStorage.getItem('cartItems')) || [];
    });

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const updatedItems = [...prevItems, product];
            localStorage.setItem('cartItems', JSON.stringify(updatedItems));
            return updatedItems;
        });
    };

    const removeFromCart = (productName) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.filter(item => item.productName !== productName);
            localStorage.setItem('cartItems', JSON.stringify(updatedItems));
            return updatedItems;
        });
    };

    return (
        <AppContext.Provider value={{loginToggle, setLoginToggle, cartItems, addToCart, removeFromCart}}>
            {children}
        </AppContext.Provider>
    )
}