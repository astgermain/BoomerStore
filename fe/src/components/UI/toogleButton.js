import PropTypes from "prop-types";
import React from "react";

import "./toggleButton.sass";

const ToggleButton = props => {
    const { selected, toggleSelected, setTheme } = props
    setTheme(selected)
    return (
      <div className="toggle-container" onClick={toggleSelected}>
        <div className={`dialog-button ${selected ? "" : "disabled"}`}>
          {selected ? "YES" : "NO"}
        </div>
      </div>
    );
}

ToggleButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  toggleSelected: PropTypes.func.isRequired
};

export default ToggleButton