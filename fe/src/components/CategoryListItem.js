import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function CategoryListItem({ url, title }) {
  return (
    <div className="categories-option">
      <FontAwesomeIcon
        icon={faArrowRight}
        className="m-icon"
        style={{
          marginTop: "4px",
          color: "#ffba00",
          width: "0.875em;",
          height: "1em",
        }}
      />
      <a href={url}>{title}</a>
    </div>
  );
}

export default CategoryListItem;
