import React from "react";
import ProductList from "../productList";
import CollectionProductBox from "../ProductList/collectionProductBox";
import HorizontalBox from "../ProductList/horizontalBox";
import Ad2 from "../../images/ad2.jpg";
import "./featuredSection.sass";

const FeaturedSection = ({ data }) => {
  const { edges: products } = data.allShopifyProduct;
  let arrivals, offers, featured;
  let priceFormat = price => parseFloat(price).toFixed(2)
  let collections = data.allShopifyCollection.nodes.map((node) => {
    if (node?.title == "New Arrivals") {
      arrivals = node;
    }
    if (node?.title == "Offers") {
      offers = node.products;
    }
    if (node?.title == "Featured") {
      featured = node.products;
    }
    return node;
  });
  let r = products.map((product) => {
    return product;
  });
  let t = products.map((product) => {
    return product.node;
  });
  let t1 = [t[1], t[2]];
  let t2 = [t[4], t[5]];
  let arrival1 = "#";
  if (arrivals?.products[0]?.handle) {
    arrival1 = `/product/${arrivals?.products[0]?.handle}`;
  }
  let arrival2 = "#";
  if (arrivals?.products[1]?.handle) {
    arrival2 = `/product/${arrivals?.products[1]?.handle}`;
  }
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
            <a href="/" className="second-ad" style={{ height: "100%" }}>
              <div
                className="f-ad-box give-border"
                style={{
                  backgroundImage: `url(${Ad2})`,
                  backgroundSize: `cover`,
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
              <HorizontalBox product={r[0]} give={true} />
            </div>
            <div className="horizontal-product-container">
              {t1.map((product) => {
                return <CollectionProductBox product={product} />;
              })}
            </div>
          </div>
          <div className="f-column-p col-3">
            <div className="horizontal-box-container">
              <HorizontalBox product={r[3]} give={true} />
            </div>
            <div className="horizontal-product-container">
              {t2.map((product) => {
                return <CollectionProductBox product={product} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="featured-content2">
        <div className="f-row-top2">
          <span className="f-top-title2">Offers Of The Day</span>
          <a href="collection/offers">
            <button className="f-button2">See More</button>
          </a>
        </div>
        <div className="f-row-p" style={{justifyContent: "space-between", flexFlow: "wrap"}}>
          {/*offers 1 collection */}
          {offers.map((product) => {
            return <CollectionProductBox product={product} />;
          })}
        </div>
      </div>
      <div className="featured-content3">
        <div className="f-row-top">
          <span className="f-top-title3">New Arrivals</span>
          <a href="collection/new-arrivals">
            <button className="f-button3">See More</button>
          </a>
        </div>
        <div className="f-row-p">
          <div className="f-column-p b-col-1">
            <a href={`${arrival1}`}>
              <div className="f-ad-box2">
                {arrivals?.products[0] ? (
                  <>
                    <div className="f-ad-box2-img">
                      <img
                        src={arrivals?.products[0]?.images[0]?.originalSrc}
                        style={{ maxWidth: "200px" }}
                      ></img>
                    </div>
                    <div>
                      <p>{arrivals?.products[0]?.title}</p>
                      <p className="EReg" style={{ marginBottom: "10px" }}>
                        From{" "}
                        {
                          priceFormat(arrivals?.products[0]?.priceRange?.minVariantPrice
                            ?.amount)
                        }
                      </p>
                      <button
                        className="account-button3"
                        style={{ color: "white", borderColor: "white" }}
                      >
                        Shop Now
                      </button>
                    </div>
                  </>
                ) : (
                  <p
                    style={{
                      color: "white",
                      padding: "15px",
                      margin: "auto",
                      fontSize: "2em",
                    }}
                  >
                    Check Back Soon For New Products
                  </p>
                )}
              </div>
            </a>
          </div>
          <div className="f-column-p b-col-1">
            <a href={`${arrival2}`}>
              <div className="f-ad-box2">
                {arrivals?.products[1] ? (
                  <>
                    <div className="f-ad-box2-img">
                      <img
                        src={arrivals?.products[1]?.images[0]?.originalSrc}
                        style={{ maxWidth: "200px" }}
                      ></img>
                    </div>
                    <p>{arrivals?.products[1]?.title}</p>
                    <p className="EReg" style={{ marginBottom: "10px" }}>
                      From{" "}
                      {
                        priceFormat(arrivals?.products[1]?.priceRange?.minVariantPrice
                          ?.amount)
                      }
                    </p>
                    <button
                      className="account-button3 button"
                      style={{ color: "white", borderColor: "white" }}
                    >
                      Shop Now
                    </button>
                  </>
                ) : (
                  <p
                    style={{
                      color: "white",
                      padding: "15px",
                      margin: "auto",
                      fontSize: "2em",
                    }}
                  >
                    Check Back Soon For New Products
                  </p>
                )}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
