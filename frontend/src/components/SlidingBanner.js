import React, { useEffect, useState } from "react";

const SlidingBanner = () => {
  const [currentPage, setPage] = useState(0);
  const [slides, setSlides] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);

  const handleEventClick = (eventLink) => {
    console.log(`go to ${eventLink}`)
  };

  const handleThumbnailClick = (elementIndex)=>{
    setPage(elementIndex)
  }

  const initializeEvents = () => {
    //NEED TO HAVE A AXIOS REQUEST TO GET EVENTS FROM BACKEND

    //Request from back end returns a list of images and links
    let testEvents = [
      {
        id: 0,
        title: "testEvent1",
        imageURL: "https://source.unsplash.com/random/?productivity",
        eventLink:''
      },
      {
        id: 1,
        title: "testEvent2",
        imageURL: "https://source.unsplash.com/random/?city",
        eventLink:''
      },
      {
        id: 2,
        title: "testEvent3",
        imageURL: "https://source.unsplash.com/random/?food",
        eventLink:''
      },
      {
        id: 3,
        title: "testEvent4",
        imageURL: "https://source.unsplash.com/random/?transportation",
        eventLink:''
      },
      {
        id: 4,
        title: "testEvent5",
        imageURL: "https://source.unsplash.com/random/?love",
        eventLink:''
      },
    ];

    const tempSlides = [];
    const tempThumbnails = [];

    for (const element of testEvents) {
      tempSlides.push(
        <div className="event" key={element.id} onClick={()=>handleEventClick(element.eventLink)}>
          <img src={element.imageURL} alt={`event ${element.id}`} />
        </div>
      );
      tempThumbnails.push(
        <div className={"event " + (currentPage===element.id? 'current':'')} key={element.id} onClick={()=>handleThumbnailClick(element.id)}>
          <img src={element.imageURL} alt={`event ${element.id}`} />
        </div>
      );
    }
    setSlides(tempSlides);
    setThumbnails(tempThumbnails);
  };

  useEffect(() => {
    initializeEvents();
  }, [currentPage]);

  const handleClick = (direction) => {
    console.log(direction, currentPage);
    if (direction === "LEFT") {
      if (currentPage === 0) {
        setPage(slides.length - 1);
      } else {
        setPage(currentPage - 1);
      }
    }
    if (direction === "RIGHT") {
      if (currentPage === slides.length - 1) {
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
        <div className="slides" style={{ left: `${-100 * currentPage}%` }}>
          {slides}
        </div>
        <div
          className="right-arrow"
          onClick={() => {
            handleClick("RIGHT");
          }}
        ></div>
      </div>
      <div className="event-thumbnail">{thumbnails}</div>
    </div>
  );
};

export default SlidingBanner;
