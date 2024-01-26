import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { HamburgerProvider } from "./context/UseHamburger";
import { CartProvider } from "./context/UseCart";
import { AuthProvider } from "./context/UseAuth";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <HamburgerProvider>
      <CartProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </CartProvider>
    </HamburgerProvider>
  </BrowserRouter>
);
