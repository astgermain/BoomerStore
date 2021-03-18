import React from "react";
import FirstAd from '../HomeItems/AdSpace/firstAdSpace'
import SecondAd from '../HomeItems/AdSpace/secondAdSpace'

import Ad1 from '../../images/ad1.png'
import Ad2 from '../../images/topAd.webp'
import './sideSection.sass'

const SideSection = ({ data }) => {
  //Data is allShopifyProduct
  return (
    <div className="sideSection" style={{ margin: "0", }}>
      <div className="sideContent1" style={{ background: `var(--darker)` }}>
        <FirstAd />
      </div>
      <div className="sideContent2" style={{ backgroundImage: `url(${Ad1})`, backgroundSize: `cover` }}>
        <SecondAd />
      </div>
    </div>
  );
};

export default SideSection;
