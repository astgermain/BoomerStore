import React from "react";
import Img from "gatsby-image";
import silverLogo from "../../images/boomersilver.webp";
import naturalsLogo from "../../images/boomernaturals.webp";
import supLogo from "../../images/boomersupplements.webp";
import elecLogo from "../../images/boomerelectronics.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faUser,
  faSearch,
  faArrowRight,
  faStream,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./productboxes.sass";
const CollectionProductBox = (props) => {
  const product = props.product;
  let value = "";
  if (props.give) {
    value = "give-border";
  }
  let logo;
  let alt = "";
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

  
  let priceFormat = (price) => parseFloat(price).toFixed(2);
  return (
    <a href={`/product/${product?.handle}`} className="pad5-10">
      <div className="box" key={product?.title}>
        <div className="box-background">
          <div className={`productBox ${value}`}>
            <div className="plogo-box">
              <img src={logo} alt={alt} style={{ alignSelf: "center" }}></img>
            </div>
            <div className="image-box">
              <Img
                fluid={product?.images[0]?.localFile?.childImageSharp?.fluid}
                key={product?.images[0]?.localFile?.id}
                fadeIn={false}
                loading="eager"
                alt={product?.title}
                style={{ width: "100%", alignSelf: "center", height: "100%" }}
              />
            </div>
            <p className="has-text-weight-semibold p-title">{product?.title}</p>
            <div className="product-bar">
              <div className="product-overlay">
                <p className="has-text-weight-light p-price">
                  {product?.variants == undefined ? (
                    `
                      $${priceFormat(
                        product?.priceRange?.minVariantPrice?.amount
                      )}
                    `
                  ) : (
                    <>${priceFormat(product?.variants[0]?.price)}</>
                  )}
                </p>
                <div className="p-view-container">
                  <div className="p-view-more">View</div>
                </div>
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

export default CollectionProductBox;
