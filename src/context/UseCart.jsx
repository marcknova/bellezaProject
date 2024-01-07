import React, { createContext, useEffect, useReducer } from "react";
import cartReducer from "./../reducers/cartReducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, { items: [] });

  /*  useEffect(() => {
    let total = 0;
    cartState.forEach((item) => {
      total += item.quantity * item.price;
    });
    setCartTotal(total);
  }, [cartState]);

  */

  const cartSize = cartState.length;

  return (
    <CartContext.Provider
      value={{
        cartState,
        cartDispatch,
        cartSize,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
