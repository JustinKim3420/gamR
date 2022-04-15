import React, { useEffect, useContext } from "react";
import { BurgerContext } from "../context/BurgerProvider";

const Overlay = () => {
  const [isBurgerClick, setBurgerClick] = useContext(BurgerContext);
  
  useEffect(()=>{
    if(isBurgerClick){
      document.body.classList.add('hidden-scroll')
    }
    if(!isBurgerClick){
      document.body.classList.remove('hidden-scroll')
    }
  },[isBurgerClick])

  const handleClick = (event)=>{
    console.log(event.target.id)
    if(event.target.id==='overlay'){
      console.log('if statment')
      setBurgerClick(false)
    }
  }

  const handleScroll = ()=>{
    
  }

  return (
    <div id="overlay" className={(isBurgerClick? 'clicked':'')} onClick={handleClick}>
      <ul id='overlay-list' className={"overlay-list"  +(isBurgerClick? ' clicked':'')}>
        <li className="overlay-item">
          <a href="#" className="nav-link">
            Dashboard
          </a>
        </li>
        <li className="overlay-item">
          <a href="#" className="nav-link">
            Discover
          </a>
        </li>
        <li className="overlay-item">
          <a href="#" className="nav-link">
            Events
          </a>
        </li>
        <li className="overlay-item">
          <a href="#" className="nav-link">
            Create
          </a>
        </li>
        <li className="overlay-item">
          <a href="#" className="nav-link">
            Login
          </a>
        </li>
        <li className="overlay-item">
          <a href="#" className="nav-link">
            Sign up
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Overlay;
