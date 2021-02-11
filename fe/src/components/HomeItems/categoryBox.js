import React from "react";
import Img from "gatsby-image";
import silverLogo from "../../images/boomersilver.png";
import supLogo from "../../images/boomersup.png";

const CategoryBox = (props) => {
  return (
    <a href={`/`}>
      <div className="box" key={props.title}>
        <div className="box-backgroundH">
          <div className="productBoxH">
            <div className="plogo-boxH">{props.title}</div>
            <div className="p-view-moreH">Shop Now</div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CategoryBox;
