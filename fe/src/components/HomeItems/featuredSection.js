import React from "react";
import ProductList from "../productList";
import HorizontalBox from "../ProductList/horizontalBox"
import "./featuredSection.sass";

const FeaturedSection = ({ data }) => {
  const { edges: products } = data.allShopifyProduct
  let r = products.map(product => {
    return product
  })
  return (
    <div className="featured-section" style={{ margin: "0" }}>
      <div className="featured-content1">
        <div className="f-row-top">
          <span className="f-top-title">Featured</span>
          <button className="f-button">See More</button>
        </div>
        <div className="f-row-p">
          <div className="f-column-p col-1">
            <div className="f-ad-box give-border"></div>
          </div>
          <div className="f-column-p col-2">
            <div className="horizontal-box-container">
              <HorizontalBox product={r[0]} give={true}/>
            </div>
            <div className="horizontal-product-container">
              <ProductList data={data} total={2} give={true}/>
            </div>
          </div>
          <div className="f-column-p col-3">
            <div className="horizontal-box-container">
              <HorizontalBox product={r[0]} give={true}/>
            </div>
            <div className="horizontal-product-container">
              <ProductList data={data} total={2} give={true}/>
            </div>
          </div>
        </div>
      </div>
      <div className="featured-content2">
        <div className="f-row-top2">
          <span className="f-top-title2">Offers Of The Day</span>
          <button className="f-button2">See More</button>
        </div>
        <div className="f-row-p">
          {/*offers 1 collection */}
              <ProductList data={data} total={6} top={true} give={true}/>
        </div>
        <div className="f-row-p">
          {/*offers 2 collection */}
              <ProductList data={data} total={6} top={true} give={true}/>
        </div>
      </div>
      <div className="featured-content3">


      <div className="f-row-top">
          <span className="f-top-title3">New Arrivals</span>
          <button className="f-button3">See More</button>
        </div>
        <div className="f-row-p">
          <div className="f-column-p b-col-1">
            <div className="f-ad-box2"></div>
          </div>
          <div className="f-column-p b-col-1">
            <div className="f-ad-box2"></div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default FeaturedSection;
