import React from "react";
import FirstAd from '../HomeItems/AdSpace/firstAdSpace'
import SecondAd from '../HomeItems/AdSpace/secondAdSpace'
import './sideSection.sass'

const SideSection = ({ data }) => {
  //Data is allShopifyProduct
  return (
    <div className="sideSection" style={{ margin: "0", }}>
      <div className="sideContent1">
        <FirstAd />
      </div>
      <div className="sideContent2">
        <SecondAd />
      </div>
    </div>
  );
};

export default SideSection;
