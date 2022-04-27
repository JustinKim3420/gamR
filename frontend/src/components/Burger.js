import React, { useContext } from "react";
import { BurgerContext } from "../context/BurgerProvider";

const Burger = () => {
  const [isBurgerClick, setBurgerClick] = useContext(BurgerContext);

  const handleClick = () => {
      document.documentElement.scrollTop=0;
      document.body.scrollTop=0;
      setBurgerClick(!isBurgerClick)
  };

  return (
    <ul className={"burger " + (isBurgerClick? 'clicked':'')} onClick={handleClick}>
      <li className={"burger-line " + (isBurgerClick? 'clicked':'')}></li>
      <li className={"burger-line " + (isBurgerClick? 'clicked':'')}></li>
      <li className={"burger-line " + (isBurgerClick? 'clicked':'')}></li>
    </ul>
  );
};

export default Burger;
