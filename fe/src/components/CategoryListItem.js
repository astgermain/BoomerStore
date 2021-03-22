import React from "react";
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
function CategoryListItem({ url, title }) {
  return (
    <Link className="categories-link" to={url}>
    <div className="categories-option">
        {title}
      <FontAwesomeIcon
        icon={faChevronLeft}
        style={{ transform: "rotate(180deg)" }}
      />
    </div>
    </Link>
  );
}

export default CategoryListItem;
