import React from "react";
import ProductList from "../productList"
import './mainSection.sass'

const MainSection = ({ data }) => {
  //Data is allShopifyProduct
  return (
    <div className="mainSection" style={{ margin: "0", }}>
      <div className="header-adjustment">
              <div className="main-text-section">
                <h1 className="top-text"><span className="text-reg">Girl You’re My Angel,</span> You’re My Darling <span className="text-gold">Angel</span></h1>
                <h2 className="bottom-text">Items We Know You'll Love</h2>
              </div>
            <ProductList data={data} total={4} top={true}/>
          </div>
    </div>
  );
};

export default MainSection;
