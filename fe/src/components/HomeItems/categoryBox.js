import React from "react";
import Img from "gatsby-image";
import silverLogo from "../../images/boomersilver.webp";
import supLogo from "../../images/boomersupplements.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CategoryBox = (props) => {
  return (
    <a href={`/`}>
      <div className="box" key={props.title}>
        <div className="box-backgroundH">
          <div className="productBoxH">
            <div className="EBold plogo-boxH">
              {props.title}{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="p-icon"
                style={{
                  marginLeft: "10px",
                  marginTop: "1px",
                  color: "black",
                  width: "0.875em;",
                  height: "1em",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CategoryBox;
