import React from "react";
import Img from "gatsby-image";
import silverLogo from "../../images/boomersilver.webp";
import naturalsLogo from "../../images/boomernaturals.webp";
import supLogo from "../../images/boomersupplements.webp";
import elecLogo from "../../images/boomerelectronics.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HorizontalBox = (props) => {
  const product = props?.product;
  let value = "";
  if (props?.give) {
    value = "give-border";
  }
  let logo;
  let alt = "";
  let priceFormat = (price) => parseFloat(price).toFixed(2);
  if (product?.vendor == "Boomer Silver") {
    logo = silverLogo;
    alt = "Boomer Silver logo";
  } else if (product?.vendor == "Boomer Naturals") {
    logo = naturalsLogo;
    alt = "Boomer Naturals Logo";
  } else if (product?.vendor == "Boomer Supplements") {
    logo = supLogo;
    alt = "Boomer Supplements Logo";
  } else if (product?.vendor == "Boomer Electronics") {
    logo = elecLogo;
    alt = "Boomer Electronics Logo";
  }
  return (
    <a href={`/product/${product?.handle}`}>
      <div className="boxHor" key={props?.title}>
        <div className={`productBoxHor  ${value}`}>
          <div className="hor-row">
            <div className="hor-half2">
              <div className="image-box">
                <Img
                  fluid={
                    product?.images[0]?.localFile?.childImageSharp?.fluid
                  }
                  key={product?.images[0]?.localFile?.id}
                  fadeIn={false}
                  loading="eager"
                  alt={product?.title}
                  style={{
                    width: "100%",
                    alignSelf: "center",
                    maxHeight: "100px",
                  }}
                />
              </div>
            </div>
            <div className="hor-half">
              <div className="plogo-boxHor">
                <img src={logo} alt={alt} style={{ alignSelf: "center" }}></img>
              </div>
              <p className="has-text-weight-semibold p-titleHor">
                {product?.title}
              </p>
            </div>
          </div>

          <div className="product-bar">
            <div className="product-overlay2">
              <p className="has-text-weight-light p-priceHor">
                ${priceFormat(product?.variants[0]?.price)}
              </p>
              <div className="p-view-moreHor">View</div>
              <FontAwesomeIcon
                  icon={faArrowRight}
                  className="p-icon"
                  style={{
                    marginTop: "1px",
                    color: "black",
                    width: "0.875em",
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

export default HorizontalBox;
