import React, { createContext, useEffect, useState } from "react";

export const HamburgerContext = createContext();

export const HamburgerProvider = ({ children }) => {
  const [hamburger, setHamburger] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.quantity * item.price;
    });
    setCartTotal(total);
  }, [cartItems]);

  const cartSize = cartItems.length;

  return (
    <HamburgerContext.Provider
      value={{
        hamburger,
        setHamburger,
        cartItems,
        cartTotal,
      }}
    >
      {children}
    </HamburgerContext.Provider>
  );
};
