import React from "react";
import "./adSpace.sass";

const FirstAdSpace = ({ data }) => {
  //Data is allShopifyProduct
  return (
    <>
    <a href="/boomersupplements" className="second-ad">
      <div
        className="second-ad-space"
        style={{
          display: "flex",
          margin: "0",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "flex-end",
          padding: "15px",
          paddingBottom: "25px"
        }}
      >
        <button className="button account-button-ad" style={{marginRight: "auto",marginBottom: "25px"}}>Shop Now</button>
      </div>
    </a>
    </>
  );
};

export default FirstAdSpace;
