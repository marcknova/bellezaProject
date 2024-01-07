import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { HamburgerProvider } from "./context/UseHamburger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CartProvider } from "./context/UseCart";
ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="815693817413-242tnhrknia8fav0ivq8l6eblumtnje0.apps.googleusercontent.com">
    <BrowserRouter>
      <HamburgerProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </HamburgerProvider>
    </BrowserRouter>
  </GoogleOAuthProvider>
);
