import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import BurgerProvider from "./context/BurgerProvider";
import Overlay from "./components/Overlay";

const App = () => {
  return (
    <BurgerProvider>
      <div className="App">
        <Navbar />
        <Overlay />
        <Homepage />
      </div>
    </BurgerProvider>
  );
};

export default App;
