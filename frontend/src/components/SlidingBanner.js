import React, { useState } from "react";

const SlidingBanner = () => {
  const [currentPage, setPage] = useState(0);

  let testEvents = [
    <div style={{ "backgroundColor": "green" }} key='1' className="event">
      event1
    </div>,
    <div style={{ "backgroundColor": "yellow" }} key='2' className="event">
      event2
    </div>,
    <div style={{ "backgroundColor": "white" }} key='3' className="event">
      event3
    </div>,
    <div style={{ "backgroundColor": "blue" }} key='4' className="event">
      event4
    </div>,
  ];

  const handleClick = (direction) => {
    console.log(direction,currentPage)
    if (direction === "LEFT") {
      if (currentPage === 0) {
        setPage(testEvents.length - 1);
      } else {
        setPage(currentPage - 1);
      }
    }
    if (direction === "RIGHT") {
      if (currentPage === testEvents.length - 1) {
        setPage(0);
      } else {
        setPage(currentPage + 1);
      }
    }
  };

  return (
    <div className="sliding-banner">
      <div className="slideshow">
        <div
          className="left-arrow"
          onClick={() => {
            handleClick("LEFT");
          }}
        ></div>
        <div className="slides" style={{'left':(`${-100*currentPage}%`)}}>{testEvents}</div>
        <div
          className="right-arrow"
          onClick={() => {
            handleClick("RIGHT");
          }}
        ></div>
      </div>
    </div>
  );
};

export default SlidingBanner;
