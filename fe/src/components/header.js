import { Link } from "gatsby"; /* eslint-disable */
import PropTypes from "prop-types";
import React, { useContext, useState, useEffect } from "react";
import StoreContext from "../context/store";
import logo from "../images/boomerstorelogo.png";
import ToggleButton from "./UI/toogleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faUser,
  faSearch,
  faAngleDown,
  faStream,
} from "@fortawesome/free-solid-svg-icons";
import "./header.sass";

const countQuantity = (lineItems) => {
  let quantity = 0;

  lineItems.forEach((item) => {
    quantity = quantity + item.quantity;
  });
  return quantity;
};

const Header = ({ setTheme }) => {
  const [selected, setSelected] = useState(false);
  const context = useContext(StoreContext);
  const { checkout } = context.store;
  const [quantity, setQuantity] = useState(
    countQuantity(checkout ? checkout.lineItems : [])
  );
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState(false);

  const handleMenuClick = () => {
    setMenu(true);
  };

  useEffect(() => {
    setQuantity(countQuantity(checkout ? checkout.lineItems : []));
  }, [checkout]);

  const openSearchBar = () => {
    setModal(true);
  };
  const closeSearchBar = () => {
    setModal(false);
  };

  return (
    <>
      <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
        style={{
          display: "flex",
          width: "100vw",
          height: "65px",
          backgroundColor: "transparent",
        }}
      >
        <div
          className="navbar-start"
          style={{
            width: "70vw",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h1 className="" style={{ marginLeft: "30px", marginRight: "30px" }}>
            <Link
              aria-label="search"
              className="has-text-black has-text-weight-bold"
              to="/"
            >
              <img
                src={logo}
                alt="Boomer Store logo"
                style={{ maxWidth: "150px" }}
              ></img>
            </Link>
          </h1>
          <div className="field" style={{ margin: "auto", display: "flex" }}>
            <div className="control has-icons-right">
              <form
                action="../search"
                method="GET"
                style={{ display: "flex", alignItems: "center" }}
              >
                <input
                  className="input-search"
                  name="value"
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search"
                  style={{
                    boxShadow: "0 0 0.125em 0.075em rgb(10 10 10 / 12%)",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    border: "none",
                    borderRadius: "0 5px 5px 0",
                    borderLeft: "none",
                    height: "25px",
                    backgroundColor: "#FFBA00",
                    boxShadow: "0 0 0.125em 0.075em rgb(10 10 10 / 12%)",
                    outline: "none",
                  }}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div
          className="navbar-end"
          style={{
            display: "flex",
            alignItems: "center",
            width: "30vw",
            background: "#002244",
            color: "white",
          }}
        >
          <div
            className="navbar-item"
            style={{ color: "white", width: "calc(30vw/3)" }}
          >
            <h2>Sign In</h2>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div
            className="navbar-item"
            style={{ color: "white", width: "calc(30vw/3)" }}
          >
            <Link
              aria-label="cart"
              to="/cart"
              style={{ display: "flex", color: "white" }}
            >
              {quantity > 0 ? (
                <>
                  <div className="shopping-bag-quantity">{quantity}</div>
                  <h2>Cart</h2>
                  <FontAwesomeIcon
                    icon={faShoppingBag}
                    className="is-size-5"
                    style={{ color: "white" }}
                  />
                </>
              ) : (
                <>
                  <h2>Cart</h2>
                  <FontAwesomeIcon
                    icon={faShoppingBag}
                    className="is-size-5"
                    style={{ color: "white" }}
                  />
                </>
              )}
            </Link>
          </div>
          <div
            className="navbar-item"
            style={{ color: "white", width: "calc(30vw/3)" }}
          >
            <h2>Theme</h2>
            <ToggleButton
              selected={selected}
              toggleSelected={() => {
                setSelected(!selected);
              }}
              setTheme={setTheme}
            />
          </div>
        </div>
      </nav>
      <div className="category-bar" onClick={() => handleClick()}>
        <a className="cat-btn-top btn-border" onClick={() => handleMenuClick}>
          <h1 style={{display: 'flex', alignItems: 'center'}}>Categories
          <FontAwesomeIcon
            icon={faStream}
            style={{
              marginLeft: "10px",
              marginTop: "1px",
              transform: "rotate(90deg)",
              color: "rgb(255, 186, 0)",
            }}
          />
          </h1>
        </a>
        
      </div>
      {/*
      <div className={` ${modal === true ? "modal is-active" : "modal"}`}>
        <div className="modal-background" onClick={closeSearchBar}></div>
        <div className="modal-content">
          <div className="field">
            <div className="control has-icons-right">
              <form action="../search" method="GET">
                <input className="input is-large" name="value" type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search" />
                <span className="icon is-right">
                  <FontAwesomeIcon icon={faSearch} />
                </span>
                <label className="has-text-white">ENTER ↵</label>
              </form>
            </div>
          </div>
        </div>

        <button className="modal-close is-large" onClick={closeSearchBar} aria-label="close"></button>
      </div>
      */}
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
