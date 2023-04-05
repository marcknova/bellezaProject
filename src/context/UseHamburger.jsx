import React, { createContext, useState } from "react";

export const HamburgerContext = createContext();

export const HamburgerProvider = ({children}) => {
  const [hamburger, setHamburger] = useState(false);
  return (
    <HamburgerContext.Provider value={{ hamburger, setHamburger }}>
      {children}
    </HamburgerContext.Provider>
  );
};

