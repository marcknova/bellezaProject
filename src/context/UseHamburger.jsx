import React, { createContext, useEffect, useState } from "react";

export const HamburgerContext = createContext();

export const HamburgerProvider = ({children}) => {
  
  const [hamburger, setHamburger] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.quantity * item.price
    });
    setCartTotal(total);
  },[cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((i) => i.id === item.id)
      if(itemIndex >= 0) {
        const updateItems = [...prevItems]
        updateItems[itemIndex].quantity += parseInt(item.quantity);
        return updateItems
      } else {
        return [...prevItems, item]
      }
    });
  }

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId))
  }

  const cartSize = cartItems.length;

  return (
    <HamburgerContext.Provider value={{ hamburger, setHamburger, removeFromCart, addToCart, cartItems, cartSize, cartTotal }}>
      {children}
    </HamburgerContext.Provider>
  );
};