import React from "react";
import ProductList from "../productList";
import CollectionProductBox from "../ProductList/collectionProductBox";
import HorizontalBox from "../ProductList/horizontalBox";
import Ad2 from "../../images/ad2.webp";
import Ad3 from "../../images/ad3.webp";
import "./featuredSection.sass";

const FeaturedSection = ({ data }) => {
  const { edges: products } = data.allShopifyProduct;
  let arrivals, offers, featured;
  let priceFormat = (price) => parseFloat(price).toFixed(2);
  let collections = data.allShopifyCollection.nodes.map((node) => {
    if (node?.title == "New Arrivals") {
      arrivals = node.products;
    }
    if (node?.title == "Offers") {
      offers = node.products;
    }
    if (node?.title == "Featured") {
      featured = node.products;
    }
    return node;
  });

  let q = offers.map((product) => {
    return product;
  });

  let r = featured.map((product) => {
    return product;
  });
  let s1 = [offers[1], offers[2]];
  let s2 = [offers[4], offers[5]];

  let t1 = [featured[1], featured[2]];
  let t2 = [featured[4], featured[5]];

  return (
    <div className="featured-section" style={{ margin: "0" }}>
      <div className="featured-content1">
        <div className="f-row-top">
          <span className="f-top-title">Featured</span>
          <a href="collection/featured">
            <button className="f-button">See More</button>
          </a>
        </div>
        <div className="f-row-p">
          <div className="f-column-p col-1">
            <a href="/collection/ad2" className="second-ad" style={{ height: "100%" }}>
              <div
                className="f-ad-box give-border"
                style={{
                  backgroundImage: `url(${Ad2})`,
                  backgroundSize: `contain`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  flexDirection: "column",
                  padding: "15px",
                }}
              >
                <p
                  style={{
                    padding: "15px",
                    color: "white",
                    fontSize: "2rem",
                    textAlign: "center",
                  }}
                >
                  Peep Our New Easter Face Covers
                </p>
                <button className="button account-button-ad">Shop</button>
              </div>
            </a>
          </div>
          <div className="f-column-p col-2">
            <div className="horizontal-box-container">
              <HorizontalBox product={featured[0]} give={true} />
            </div>
            <div className="horizontal-product-container">
              {t1.map((product) => {
                return <CollectionProductBox product={product} key={product?.id} />;
              })}
            </div>
          </div>
          <div className="f-column-p col-3">
            <div className="horizontal-box-container">
              <HorizontalBox product={featured[3]} give={true} />
            </div>
            <div className="horizontal-product-container">
              {
              t2.map((product) => {
                return <CollectionProductBox product={product} key={product?.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="featured-content2">
        <div className="f-row-top2" style={{paddingBottom: "15px"}}>
          <span className="f-top-title2">New Arrivals</span>
          <a href="collection/new-arrivals">
            <button className="f-button2">See More</button>
          </a>
        </div>
        <div
          className="f-row-p"
          style={{ justifyContent: "center", flexFlow: "wrap" }}
        >
          {/*offers 1 collection */}
          {arrivals.map((product) => {
            return <CollectionProductBox product={product} key={product?.id} />;
          })}
        </div>
      </div>
      <div className="featured-content3">
        <div className="f-row-top">
          <span className="f-top-title3">Holiday Products</span>
          <a href="collection/offers">
            <button className="f-button3">See More</button>
          </a>
        </div>
        <div className="f-row-p">
          <div className="f-column-p col-2">
            <div className="horizontal-box-container">
              <HorizontalBox product={q[0]} give={true} />
            </div>
            <div className="horizontal-product-container">
              {s1.map((product) => {
                return <CollectionProductBox product={product} give={true} key={product?.id} />;
              })}
            </div>
          </div>
          <div className="f-column-p col-3">
            <div className="horizontal-box-container">
              <HorizontalBox product={q[3]} give={true} />
            </div>
            <div className="horizontal-product-container">
              {s2.map((product) => {
                return <CollectionProductBox product={product} give={true} key={product?.id} />;
              })}
            </div>
          </div>
          <div className="f-column-p col-1">
            <a href="/collection/ad3" className="second-ad" style={{ height: "100%" }}>
              <div
                className="f-ad-box"
                style={{
                  backgroundImage: `url(${Ad3})`,
                  backgroundSize: `contain`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  flexDirection: "column",
                  padding: "15px",
                }}
              >
                <p
                  style={{
                    padding: "15px",
                    color: "white",
                    fontSize: "2rem",
                    textAlign: "center",
                  }}
                >
                  Now Available
                </p>
                <button className="button account-button-ad">Shop</button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
