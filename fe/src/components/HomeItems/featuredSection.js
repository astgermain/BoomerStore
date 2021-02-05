import React from "react";
import './featuredSection.sass'

const FeaturedSection = ({ data }) => {
  //Data is allShopifyProduct
  return (
    <div className="featuredSection" style={{ margin: "0", }}>
      <div className="featuredContent1">
          FSection 1
      </div>
      <div className="featuredContent2">
          FSection 2
      </div>
    </div>
  );
};

export default FeaturedSection;
