import React from "react";
import Img from "gatsby-image";
import silverLogo from "../../images/boomersilver.webp";
import naturalsLogo from "../../images/boomernaturals.webp"

const ProductBox = (props) => {
  const product = props.product;
  let value = "";
  if (props.give) {
    value = "give-border";
  }
  let logo;
  let alt = ""
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
      <div className="box" key={product.node.title}>
        <div className="box-background">
          <div className={`productBox ${value}`}>
            <div className="plogo-box">
              <img
                src={logo}
                alt={alt}
                style={{ alignSelf: "center" }}
              ></img>
            </div>
            <div className="image-box">
              <Img
                fluid={
                  product?.node?.images[0]?.localFile?.childImageSharp?.fluid
                }
                key={product?.node?.images[0]?.localFile?.id}
                fadeIn={false}
                loading="eager"
                alt={product.node.title}
                style={{ width: "100%", alignSelf: "center", height: "100%" }}
              />
            </div>
            <p className="has-text-weight-semibold p-title">
              {product.node.title}
            </p>
            <p className="has-text-weight-light p-price">
              ${product.node.variants[0].price}
            </p>
            <div className="p-view-more">View Product</div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProductBox;
