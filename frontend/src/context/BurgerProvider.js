import React, { useState, createContext } from "react";

const BurgerContext = createContext();

const BurgerProvider = ({ children }) => {
  const [isBurgerClick, setBurgerClick] = useState(false);

  return (
    <BurgerContext.Provider value={[isBurgerClick, setBurgerClick]}>
      {children}
    </BurgerContext.Provider>
  );
};

export default BurgerProvider;
export { BurgerContext };
