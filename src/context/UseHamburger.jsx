import React, { createContext, useState } from "react";

export const HamburgerContext = createContext();

export const HamburgerProvider = ({children}) => {
  
  const [cartItems, setCartItems] = useState([]);
  const [hamburger, setHamburger] = useState(false);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  }

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId))
  }

  const cartSize = cartItems.length;

  return (
    <HamburgerContext.Provider value={{ hamburger, setHamburger, removeFromCart, addToCart, cartItems, cartSize }}>
      {children}
    </HamburgerContext.Provider>
  );
};

