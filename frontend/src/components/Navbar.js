import React, {useContext} from "react";
import Burger from "./Burger";
import { BurgerContext } from "../context/BurgerProvider";

const Navbar = () => {

  const [isBurgerClick, setBurgerClick] = useContext(BurgerContext);

  const handleClick = (event)=>{
    if(isBurgerClick===true && event.target.id==='navbar'){
      setBurgerClick(false)
    }
  }

  return (
    <div id='navbar' className={"navbar "} onClick = {(e)=>handleClick(e)}>
      <div className="left-nav">
        <h1 id="logo">GamR</h1>
        <ul className="nav-list">
          <li className={"nav-item" + (isBurgerClick? ' clicked':'')}>
            <a href="#" className="nav-link">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Discover
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Events
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Create
            </a>
          </li>
        </ul>
      </div>
      <div className="right-nav">
        <Burger />
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Sign up
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
