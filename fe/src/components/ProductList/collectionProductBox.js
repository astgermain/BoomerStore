import React from "react";
import Img from "gatsby-image";
import silverLogo from "../../images/boomersilver.webp"
import naturalsLogo from "../../images/boomernaturals.webp"

const CollectionProductBox = (props) => {
  const product = props.product;
  let value = ""
  if(props.give){
    value = "give-border"
  }
  let logo;
  let alt = ""
  if(product?.vendor == "Boomer Silver"){
    logo = silverLogo
    alt = "Boomer Silver logo"
  }
  else if(product?.vendor == "Boomer Naturals"){
    logo = naturalsLogo
    alt = "Boomer Naturals Logo"
  }
  let priceFormat = price => parseFloat(price).toFixed(2)
  return (
    <a href={`/product/${product.handle}`} style={{padding: "5px"}}>
      <div className="box" key={product.title}>
        <div className="box-background">
          <div className={`productBox ${value}`}>
                <div className="plogo-box"><img
                src={logo}
                alt={alt}
                style={{ alignSelf: "center" }}
              ></img></div>
              <div className="image-box">
            <Img
              fluid={product?.images[0]?.localFile?.childImageSharp?.fluid}
              key={product?.images[0]?.localFile?.id}
              fadeIn={false}
              loading="eager"
              alt={product.title}
              style={{width: "100%", alignSelf: "center", height: "100%"}}
            />
            </div>
            <p className="has-text-weight-semibold p-title">
              {product.title}
            </p>
            <p className="has-text-weight-light p-price">
              {product?.variants == undefined ?
              <p>From ${priceFormat(product?.priceRange?.minVariantPrice?.amount)}</p>
            :
              <>${priceFormat(product?.variants[0]?.price)}</>
            }
            </p>
            <div className="p-view-more">
              View Product
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CollectionProductBox;
