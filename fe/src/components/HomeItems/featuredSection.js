import React from "react";
import ProductList from "../productList";
import "./featuredSection.sass";

const FeaturedSection = ({ data }) => {
  //Data is allShopifyProduct
  return (
    <div className="featured-section" style={{ margin: "0" }}>
      <div className="featured-content1">
        <div className="f-row-top">
          <span className="f-top-title">Featured</span>
          <button className="f-button">See More</button>
        </div>
        <div className="f-row-p">
          <div className="f-column-p col-1">
            <div className="f-ad-box"></div>
          </div>
          <div className="f-column-p col-2">
            <div className="horizontal-box-container">
              <div className="horizontal-box"></div>
            </div>
            <div className="horizontal-product-container">
              <ProductList data={data} total={2} give={true}/>
            </div>
          </div>
          <div className="f-column-p col-3">
            <div className="horizontal-box-container">
              <div className="horizontal-box"></div>
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
              <ProductList data={data} total={6} top={true} />
        </div>
        <div className="f-row-p">
          {/*offers 2 collection */}
              <ProductList data={data} total={6} top={true} />
        </div>
      </div>
      <div className="featured-content3">


      <div className="f-row-top">
          <span className="f-top-title">New Arrivals</span>
          <button className="f-button">See More</button>
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
