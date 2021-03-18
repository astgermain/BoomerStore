import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
function CategoryListItem({ url, title }) {
  return (
    <div className="categories-option">
      <a className="categories-link" href={url}>
        {title}
      </a>
      <FontAwesomeIcon
        icon={faChevronLeft}
        style={{ transform: "rotate(180deg)" }}
      />
    </div>
  );
}

export default CategoryListItem;
