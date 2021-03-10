import React from "react";
import "./adSpace.sass";

const FirstAdSpace = ({ data }) => {
  //Data is allShopifyProduct
  return (
    <a href="/" className="second-ad">
      <div
        className="first-ad-space"
        style={{
          display: "flex",
          margin: "0",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "flex-end",
          padding: "15px",
        }}
      >
        <button className="button account-button-ad">Shop</button>
      </div>
    </a>
  );
};

export default FirstAdSpace;
