import React from "react";
import SEO from "../components/seo";
import Perform from "../components/LandingComponents/Outlaws/Perform";
import CoBrand from "../components/LandingComponents/Outlaws/CoBrand";
import HeroImg from "../images/outlaws/outlawsHeroImg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStream, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import CoolMatt from "../images/outlaws/CoolMatt.png";
import Crimzo from "../images/outlaws/Crimzo.png";
import Jake from "../images/outlaws/Jake.png";
import Joobi from "../images/outlaws/Joobi.png";
import "./outlaws.sass";

const Outlaws = () => {
  return (
    <>
      <SEO title="Outlaws - Boomer Store Contest Page" />
      <div
        className="outlawsHero"
        style={{
          backgroundImage: `url(${HeroImg})`,
          maxHeight: "600px",
          backgroundSize: "cover",
          display: "flex",
        }}
      >
        <div className="blackOverlay">
          <div className="outlawsHeroHeader">
            <FontAwesomeIcon
              icon={faStream}
              className="outlawsMenuButton"
              style={{
                marginLeft: "0px",
                marginTop: "1px",
                color: "#97d700",
                height: "2em",
                width: "2em",
              }}
            />
          </div>

          <Perform />
          <CoBrand />
          <div className="centerRow">
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{
                marginLeft: "0px",
                marginTop: "1px",
                color: "#fff",
                height: "3em",
                width: "3em",
              }}
            />
          </div>
        </div>
      </div>
      <div className="outlawsPlayerSection">
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "25px",
            paddingBottom: "0px",
          }}
        >
          Player Favorites
        </h1>
        <div
          className="outlawsPlayers"
          style={{ padding: "15px", display: "flex", flexDirection: "row" }}
        >
          <div
            className="outlawsPlayer"
            style={{
              width: "25%",
              height: "450px",
              display: "flex",
              flexDirection: "column",
              margin: "10px",
            }}
          >
            <img src={Joobi} style={{ maxHeight: "none" }}></img>
            <button
              className="buttonClick"
                style={{
                  marginTop: "25px",
                  background: "#97d700",
                  border: "none",
                  textTransform: "uppercase",
                  fontSize: "18px",
                  fontWeight: "800",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://www.boomerstore.com/product/vitamin-energy-packet-orange/';
                    }}
              >
                Buy Now
              </button>
          </div>
          <div
            className="outlawsPlayer"
            style={{
              width: "25%",
              height: "450px",
              display: "flex",
              flexDirection: "column",
              margin: "10px",
            }}
          >
            <img src={Crimzo} style={{ maxHeight: "none" }}></img>
            <button
              className="buttonClick"
                style={{
                  marginTop: "25px",
                  background: "#97d700",
                  border: "none",
                  textTransform: "uppercase",
                  fontSize: "18px",
                  fontWeight: "800",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://www.boomerstore.com/product/vitamin-energy-packet-mango-pomegranate/';
                    }}
              >
                Buy Now
              </button>
          </div>
          <div
            className="outlawsPlayer"
            style={{
              width: "25%",
              height: "450px",
              display: "flex",
              flexDirection: "column",
              margin: "10px",
            }}
          >
            <img src={Jake} style={{ maxHeight: "none" }}></img>
            <button
              className="buttonClick"
                style={{
                  marginTop: "25px",
                  background: "#97d700",
                  border: "none",
                  textTransform: "uppercase",
                  fontSize: "18px",
                  fontWeight: "800",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://www.boomerstore.com/product/vitamin-energy-packet-cherry-lime/';
                    }}
              >
                Buy Now
              </button>
          </div>
          <div
            className="outlawsPlayer"
            style={{
              width: "25%",
              height: "450px",
              display: "flex",
              flexDirection: "column",
              margin: "10px",
            }}
          >
            <img src={CoolMatt} style={{ maxHeight: "none" }}></img>
              <button
              className="buttonClick"
                style={{
                  marginTop: "25px",
                  background: "#97d700",
                  border: "none",
                  textTransform: "uppercase",
                  fontSize: "18px",
                  fontWeight: "800",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://www.boomerstore.com/product/vitamin-energy-packet-raspberry-lemon/';
                    }}
              >
                Buy Now
              </button>
          </div>
        </div>
      </div>
      <div
        className="outlawsSampleSection"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "25px 0 50px 0",
        }}
      >
        <h1>
          Buy Two Get One Free Use Offer{" "}
          <span style={{ color: "#97d700" }}>OUTLAWS2FOR1</span> At Checkout
        </h1>
        <a>Click For A Free Sample Pack</a>
      </div>
      <div
        className="outlawsContestSection"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <div
          className="outlawsContestPrize"
          style={{
            background: "purple",
            height: "500px",
            width: "50%",
            padding: "25px",
          }}
        ></div>
        <div
          className="outlawsContestFormContainer"
          style={{
            background: "blue",
            height: "500px",
            width: "50%",
            padding: "25px",
          }}
        ></div>
      </div>
      <div
        className="outlawsFooterSection"
        style={{
          background: "#000000",
          height: "250px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "25px",
        }}
      >
        <div className="outlawsLogoSVG"></div>
        <div className="outlawsContestLinks"></div>
        <div className="boomerStoreLogoSVG"></div>
      </div>
    </>
  );
};
export default Outlaws;
