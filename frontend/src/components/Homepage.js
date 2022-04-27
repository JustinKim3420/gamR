/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Homepage = () => {
  return (
    <div className="page">
      <div className="block primary-background">
        <div className="block-content">
          <div className="text">
            <h1 className="page-title">Discover and ignite new passions</h1>
            <div className="header-description">
              Casuals and competitors are all welcomed. Create tournaments,
              socialize, and be a part of a huge community.
            </div>
            <button className="sign-up">Sign Up</button>
          </div>
          <div className="image-container">
            <img
              src={require("./assets/esports.png")}
              alt="ERROR GETTING IMAGE"
              className="image"
            />
          </div>
        </div>
      </div>
      <div className="block blue-background">
        <div className="block-content">
          <h1>Why gamR?</h1>
          <div className="center-text margin-bottom-3">
            It hits every aspect of gaming. We cover the social and the
            competitive portions and constantly strive to perfect all of our
            features.
          </div>
          <div className="columns">
            <div className="text center-text">
              <FontAwesomeIcon icon={solid("handshake")} className="icon" />
              <div>
                Create and bring attetion to communities focused on your
                passions.{" "}
              </div>
            </div>
            <div className="text center-text">
              <FontAwesomeIcon icon={solid("trophy")} className="icon" />
              <div>
                You can create and join tournaments and we'll help you every
                step.
              </div>
            </div>
            <div className="text center-text">
              <FontAwesomeIcon icon={solid("shop")} className="icon" />
              <div>
                Bring attention to your business by supporting local teams.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block grey-background">
        <div className="block-content">
          <div className="text margin-right-2 margin-bottom-3">
            <h1>Hockey Stick Trends</h1>
            <div className="header-description ">
              The market of E-sports is growing, and the opportunity for
              profits, both for players and organizations, have never been
              better.
            </div>
          </div>
          <div className="image-container">
            <img
              src={require("./assets/trending.jpg")}
              alt="ERROR GETTING IMAGE"
              className="image"
            />
          </div>
        </div>
      </div>
      <div className="block primary-background">
        <div className="block-content flex-reverse">
          <div className="text  margin-bottom-3">
            <h1>Incredible Marketing Opportunities</h1>
            <div className="header-description ">
              Like any other athlete, E-sports players can be wearing
              sponsorships and bring attention to your brand! Not only that but,
              a majority of players are celebrities outside of tournaments, and
              can further help in marketing.
            </div>
          </div>
          <div className="image-container margin-right-2">
            <img
              src={require("./assets/brands.jpg")}
              alt="ERROR GETTING IMAGE"
              className="image"
            />
          </div>
        </div>
      </div>
      <div className="block blue-background">
        <div className="block-content">
          <div className="text margin-right-2 margin-bottom-3">
            <h1>Rent Out Empty Space</h1>
            <div className="header-description ">
              Bring additional foot traffic into your store, or make use of any
              empty space to make profits! gamR helps with everything related to
              creating and setting up your location to be the ideal tournament
              venue. We also help individuals plan everything tournament related
              and bring it to reality.
            </div>
          </div>
          <div className="image-container">
            <img
              src={require("./assets/tournament.jpg")}
              alt="ERROR GETTING IMAGE"
              className="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
