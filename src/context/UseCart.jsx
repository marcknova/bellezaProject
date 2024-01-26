import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import cartReducer from "./../reducers/cartReducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, { items: [] });
  const [total, setTotal] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    cartState.items.forEach((item) => {
      total += item.quantity * item.prize;
    });
    setCartTotal(total);
  }, [cartState]);

  const addProduct = async (form, token) => {
    console.log(form);
    try {
      const response = await fetch("http://localhost:3001/api/uploadimg", {
        method: "POST",
        headers: {
          authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        dispatch({
          type: "CREATE_PRODUCT",
          payload: { isCorrect: true },
        });
      }
    } catch (e) {
      dispatch({
        type: "CREATE_PRODUCT",
        payload: { isCorrect: false },
      });
    }
  };

  const cartSize = cartState.items.length;

  return (
    <CartContext.Provider
      value={{
        cartState,
        cartDispatch,
        cartSize,
        setTotal,
        total,
        cartTotal,
        addProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
