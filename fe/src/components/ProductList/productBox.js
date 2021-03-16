import React from "react";
import Img from "gatsby-image";
import silverLogo from "../../images/boomersilver.webp";
import naturalsLogo from "../../images/boomernaturals.webp";
import supLogo from "../../images/boomersupplements.webp";
import elecLogo from "../../images/boomerelectronics.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProductBox = (props) => {
  const product = props?.product;
  let value = "";
  if (props?.give) {
    value = "give-border";
  }
  let logo;
  let alt = "";
  let priceFormat = (price) => parseFloat(price).toFixed(2);
  if (product?.node?.vendor == "Boomer Silver") {
    logo = silverLogo;
    alt = "Boomer Silver logo";
  } else if (product?.node?.vendor == "Boomer Naturals") {
    logo = naturalsLogo;
    alt = "Boomer Naturals Logo";
  } else if (product?.node?.vendor == "Boomer Supplements") {
    logo = supLogo;
    alt = "Boomer Supplements Logo";
  } else if (product?.node?.vendor == "Boomer Electronics") {
    logo = elecLogo;
    alt = "Boomer Electronics Logo";
  }
  return (
    <a href={`/product/${product?.node?.handle}`}>
      <div className="box" key={product?.node?.title}>
        <div className="box-background">
          <div className={`productBox ${value}`}>
            <div className="plogo-box">
              <img src={logo} alt={alt} style={{ alignSelf: "center" }}></img>
            </div>
            <div className="image-box">
              <Img
                fluid={
                  product?.node?.images[0]?.localFile?.childImageSharp?.fluid
                }
                key={product?.node?.images[0]?.localFile?.id}
                fadeIn={false}
                loading="eager"
                alt={product?.node?.title}
                style={{ width: "100%", alignSelf: "center", height: "100%" }}
              />
            </div>
            <p className="has-text-weight-semibold p-title">
              {product?.node?.title}
            </p>
            <div className="product-bar">
              <div className="product-overlay">
                <p className="has-text-weight-light p-price">
                  ${priceFormat(product?.node?.variants[0]?.price)}
                </p>
                <div className="p-view-more">View</div>
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
      </div>
    </a>
  );
};

export default ProductBox;
