import React from "react";
import "./adSpace.sass";

const FirstAdSpace = ({ data }) => {
  //Data is allShopifyProduct
  return (
    <>
    <div style={{maxWidth: "425px", margin: "auto"}}>
    <p style={{color: "var(--c1)", textTransform: "uppercase", fontSize: "42px", textAlign: "center", padding: "15px"}}>Get 10% Off</p>
    <p style={{padding: "5px 15px", color: "white", fontSize: "20px", textAlign: "center"}}>Enter your email below and be one step closer to saving!</p>
    </div>
    <div style={{padding: "15px", maxWidth: "425px", margin: "auto"}}>
    <div className="klaviyo-form-USSPVp"></div>
    </div>
    </>
  );
};

export default FirstAdSpace;
