import React from "react";
import CategoryBox from "./categoryBox"

import "./categorySection.sass";
import { Flex } from "rebass";

const CategorySection = ({ data }) => {
  //Data is allShopifyProduct
  return (
    <section className="categorySection" style={{ margin: "0" }}>
      <div style={{ display: "flex", flexDirection: "row", flexFlow: "wrap", justifyContent: "space-evenly", padding: "10px" }}>
      <CategoryBox title="Naturals"/>
      <CategoryBox title="Vietnamese Coffee" />
      <CategoryBox title="Pets" />
      <CategoryBox  title="Supplements" />
      </div>
      <div style={{ display: "flex", flexDirection: "row", flexFlow: "wrap", justifyContent: "space-evenly", padding: "10px"}}>
      <CategoryBox title="Bedding" />
      <CategoryBox title="Electronics" />
      <CategoryBox title="Apparel" />
      <CategoryBox title="Botanics" />
      </div>
      
    </section>
  );
};

export default CategorySection;
