import React, {useEffect} from "react";
import FirstAd from '../HomeItems/AdSpace/firstAdSpace'
import SecondAd from '../HomeItems/AdSpace/secondAdSpace'
import Helmet from "react-helmet"
import Ad1 from '../../images/ad1.webp'
import Ad2 from '../../images/noxadhome.webp'
import './sideSection.sass'

const SideSection = ({ data }) => {
  useEffect(() => {
   
  },[])
    
  //Data is allShopifyProduct
  return (
    <>
    <div className="sideSection" style={{ margin: "0", }}>
      <div className="sideContent1" style={{ backgroundImage: `url(${Ad2})`, backgroundSize: `cover` }}>
        <FirstAd />
      </div>
      <div className="sideContent2" style={{ backgroundImage: `url(${Ad1})`, backgroundSize: `cover`, backgroundPosition: "center" }}>
        <SecondAd />
      </div>
    </div>
    </>
  );
};

export default SideSection;
