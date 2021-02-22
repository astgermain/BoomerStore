import React from "react";
import Img from "gatsby-image";
import silverLogo from "../../images/boomersilver.webp"
import naturalsLogo from "../../images/boomernaturals.webp"
import supLogo from "../../images/boomersupplements.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HorizontalBox = (props) => {
  const product = props.product;
  let value = "";
  if (props.give) {
    value = "give-border";
  }
  let logo;
  let alt = ""
  let priceFormat = price => parseFloat(price).toFixed(2)
  if(product?.node?.vendor == "Boomer Silver"){
    logo = silverLogo
    alt = "Boomer Silver logo"
  }
  else if(product?.node?.vendor == "Boomer Naturals"){
    logo = naturalsLogo
    alt = "Boomer Naturals Logo"
  }
  return (
    <a href={`/product/${product.node.handle}`}>
      <div className="boxHor" key={props.title}>
        <div className="box-backgroundHor">
          <div className={`productBoxHor  ${value}`}>
            <div className="hor-row">
              <div className="hor-half">
                <div className="plogo-boxHor">
                  <img
                    src={logo}
                    alt={alt}
                    style={{ alignSelf: "center" }}
                  ></img>
                </div>
                <p className="has-text-weight-semibold p-titleHor">
                  {product.node.title}
                </p>
              </div>
              <div className="hor-half2">
                <div className="image-box">
                  <Img
                    fluid={
                      product?.node?.images[0]?.localFile?.childImageSharp?.fluid
                    }
                    key={product?.node?.images[0]?.localFile?.id}
                    fadeIn={false}
                    loading="eager"
                    alt={product.node.title}
                    style={{
                      width: "100%",
                      alignSelf: "center",
                      maxHeight: "100px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="hor-row">
              <p className="has-text-weight-light p-priceHor">
                ${priceFormat(product.node.variants[0].price)}
              </p>
              <div className="p-view-moreHor">View Product</div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default HorizontalBox;
