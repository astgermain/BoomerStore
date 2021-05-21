import React from "react";
import SEO from "../components/seo";
import Perform from "../components/LandingComponents/Outlaws/Perform";
import CoBrand from "../components/LandingComponents/Outlaws/CoBrand";
import HeroImg from "../images/outlaws/outlawsHeroImg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStream, faChevronDown } from "@fortawesome/free-solid-svg-icons";
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
    </>
  );
};
export default Outlaws;
