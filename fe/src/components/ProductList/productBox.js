import React from "react";
import Img from "gatsby-image";
import silverLogo from "../../images/boomersilver.png"

const ProductBox = (props) => {
  const product = props.product;
  return (
    <a href={`/product/${product.node.handle}`}>
      <div className="box" key={product.node.title}>
        <div className="box-background">
          <div className="productBox">
                <div className="plogo-box"><img
                src={silverLogo}
                alt="Boomer Silver logo"
                style={{ maxWidth: "150px", alignSelf: "center" }}
              ></img></div>
              <div className="image-box">
            <Img
              fluid={product.node.images[0].localFile.childImageSharp.fluid}
              key={product.node.images[0].localFile.id}
              fadeIn={false}
              loading="eager"
              alt={product.node.title}
              style={{width: "75%", alignSelf: "center"}}
            />
            </div>
            <p className="has-text-weight-semibold p-title">
              {product.node.title}
            </p>
            <p className="has-text-weight-light p-price">
              ${product.node.variants[0].price}
            </p>
            <a className="p-view-more">
              View More Details
            </a>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProductBox;
