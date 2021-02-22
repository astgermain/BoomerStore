import React from "react";
import './adSpace.sass'

const FirstAdSpace = ({ data }) => {
  //Data is allShopifyProduct
  return (
    <div className="first-ad-space" style={{ margin: "0", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", }}>
        <p style={{fontSize: "2.5rem", color: "white", padding: "25px", lineHeight: "1.25em"}}>Site is currently in beta, we are preparing to go live in March. Feel free to browse!</p>
    </div>
  );
};

export default FirstAdSpace;