import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function CategoryListItem({ url, title }) {
  return (
    <div className="categories-option">
      
      <a className="categories-link" href={url}>{title}</a>
    </div>
  );
}

export default CategoryListItem;
