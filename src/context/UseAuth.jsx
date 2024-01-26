// AuthContext.js

import { createContext, useReducer } from "react";
import { authReducer, initialState } from "./../reducers/authReducer";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);
  console.log(authState);
  const login = async (name, pass) => {
    dispatch({ type: "LOGIN" });
    try {
      setTimeout(async () => {
        const res = await fetch("http://localhost:3001/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: name, password: pass }),
        });

        const { token } = await res.json();

        if (res.ok) {
          const decodeToken = jwtDecode(token);
          dispatch({
            type: "SUCCESS",
            payload: {
              user: decodeToken.username,
              role: decodeToken.role,
              token: token,
            },
          });
        } else {
          dispatch({
            type: "ERROR",
            payload: { error: "Invalid Username or password", message: true },
          });
        }
      }, 3000);
    } catch (e) {
      dispatch({
        type: "ERROR",
        payload: { error: "Internal Server Error", message: true },
      });
      console.log("mensaje del lado del servidor", e);
    }
  };

  const loginGoogle = async () => {
    try {
      // Make a request to the /perfil endpoint
      const response = await fetch(
        "http://localhost:3001/api/auth-routes/perfil",
        {
          method: "GET",
          credentials: "include", // Include credentials for cross-origin requests
        }
      );

      if (response.ok) {
        const userData = await response.json();
        dispatch({
          type: "SUCCESS",
          payload: {
            user: userData.name.givenName,
            picture: userData.photos[0].value,
            role: "user",
          },
        });
        // Handle the user data as needed in your React app
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const logout = () => {
    dispatch({ type: "LOGOUT", payload: { role: "" } });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout, loginGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};
