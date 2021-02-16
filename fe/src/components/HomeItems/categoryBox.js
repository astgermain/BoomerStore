import React from "react";
import Img from "gatsby-image";
import silverLogo from "../../images/boomersilver.png";
import supLogo from "../../images/boomersup.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faUser,
  faSearch,
  faAngleDown,
  faStream,
  faChevronLeft,
  faChevronRight,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

const CategoryBox = (props) => {
  return (
    <a href={`/`}>
      <div className="box" key={props.title}>
        <div className="box-backgroundH">
          <div className="productBoxH">
            <div className="plogo-boxH">{props.title} <FontAwesomeIcon
                    icon={faArrowRight}
                    className="p-icon"
                    style={{
                      marginLeft: "10px",
                      marginTop: "1px",
                      color: "black",
                    }}
                /></div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CategoryBox;
