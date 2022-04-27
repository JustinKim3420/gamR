import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import BurgerProvider from "./context/BurgerProvider";
import Overlay from "./components/Overlay";
import Discover from './components/Discover'
import Footer from "./components/Footer";

const App = () => {
  return (
    <BurgerProvider>
      <div className="App">
        <Navbar />
        <Overlay />
        <Homepage />
        {/* <Discover/> */}
        <Footer />
      </div>
    </BurgerProvider>
  );
};

export default App;
