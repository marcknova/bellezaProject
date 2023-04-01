import React, { createContext, useState } from "react";

export const HamburgerContext = createContext();

const HamburgerProvider = () => {
  const [hamburger, setHamburger] = useState(false);
  return (
    <HamburgerContext.Provider value={(hamburger, setHamburger)}>
      {children}
    </HamburgerContext.Provider>
  );
};

export default HamburgerProvider;
