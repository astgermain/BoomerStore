import React from "react";
import "./categorySection.sass";
import { Flex } from "rebass";

const CategorySection = ({ data }) => {
  //Data is allShopifyProduct
  return (
    <section className="categorySection" style={{ margin: "0" }}>
      <div style={{ display: "flex", flexDirection: "row", flexFlow: "wrap", justifyContent: "space-evenly" }}>
        <a className="cat-btn btn-border">Cat 1</a>
        <a className="cat-btn btn-border">Cat 1</a>
        <a className="cat-btn btn-border">Cat 1</a>
        <a className="cat-btn btn-border">Cat 1</a>
      </div>
      <div style={{ display: "flex", flexDirection: "row", flexFlow: "wrap", justifyContent: "space-evenly"}}>
        <a className="cat-btn btn-border">Cat 1</a>
        <a className="cat-btn btn-border">Cat 1</a>
        <a className="cat-btn btn-border">Cat 1</a>
        <a className="cat-btn btn-border">Cat 1</a>
      </div>
      <div style={{ display: "flex", flexDirection: "row", flexFlow: "wrap", justifyContent: "space-evenly" }}>
        <a className="cat-btn btn-border">Cat 1</a>
        <a className="cat-btn btn-border">Cat 1</a>
        <a className="cat-btn btn-border">Cat 1</a>
        <a className="cat-btn btn-border">Cat 1</a>
      </div>
    </section>
  );
};

export default CategorySection;
