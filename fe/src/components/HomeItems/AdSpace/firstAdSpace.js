import React from "react";
import "./adSpace.sass";

const FirstAdSpace = ({ data }) => {
  //Data is allShopifyProduct
  return (
    <a href="/" className="second-ad">
      <div
        className="first-ad-space"
        style={{
          margin: "0",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "15px",
        }}
      >
        <button className="button account-button-ad">Shop</button>
      </div>
    </a>
  );
};

export default FirstAdSpace;
