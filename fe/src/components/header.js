import { Link } from "gatsby"; /* eslint-disable */
import PropTypes from "prop-types";
import React, { useContext, useState, useEffect } from "react";
import StoreContext from "../context/store";
import logo from "../images/boomerstorelogo.png";
import ToggleButton from "./UI/toogleButton";
import CartSection from "./HomeItems/cartSection";
import AccountSection from "./HomeItems/accountSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faUser,
  faSearch,
  faAngleDown,
  faStream,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./header.sass";

const countQuantity = (lineItems) => {
  let quantity = 0;

  lineItems.forEach((item) => {
    quantity = quantity + item.quantity;
  });
  return quantity;
};

const Header = ({ path, setTheme }) => {
  console.log("Path: ", path)
  const [selected, setSelected] = useState(false);
  const [cartState, setCartState] = useState("");
  const [accountState, setAccountState] = useState("");
  const context = useContext(StoreContext);
  const { checkout } = context.store;
  const [quantity, setQuantity] = useState(
    countQuantity(checkout ? checkout.lineItems : [])
  );
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState(false);

  const handleMenuClick = () => {
    setMenu(!menu);
  };
  let bgcolor = "transparent";
  if (path != `/`) {
    bgcolor = "#002244";
  }
  useEffect(() => {
    
    setQuantity(countQuantity(checkout ? checkout.lineItems : []));
  }, [checkout]);

  const cartHover = () => {
    if (cartState == "") {
      setAccountState("");
      setCartState("cart-hovered");
    } else {
      setCartState("");
    }
  };
  const accountHover = () => {
    if (accountState == "") {
      setCartState("");
      setAccountState("account-hovered");
    } else {
      setAccountState("");
    }
  };
  
  
  return (
    <>
      <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
        style={{
          display: "flex",
          height: "65px",
          backgroundColor: bgcolor,
        }}
      >
        <div
          className="navbar-start"
          style={{
            width: "70vw",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            minWidth: "625px"
          }}
        >
          <h1 className="" style={{ marginLeft: "30px" }}>
            <Link className="has-text-black has-text-weight-bold" to="/">
              <img
                src={logo}
                alt="Boomer Store logo"
                style={{ maxWidth: "150px" }}
              ></img>
            </Link>
          </h1>
              <a
                className="cat-btn-top btn-border"
                onClick={() => handleMenuClick()}
              >
                <h1 style={{ display: "flex", alignItems: "center" }}>
                  Categories
                  <FontAwesomeIcon
                    icon={faStream}
                    style={{
                      marginLeft: "10px",
                      marginTop: "1px",
                      transform: "rotate(90deg)",
                      color: "#FFBA00",
                    }}
                  />
                </h1>
              </a>
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
                    backgroundColor: "var(--c1)",
                    boxShadow: "0 0 0.125em 0.075em rgb(10 10 10 / 12%)",
                    outline: "none",
                    width: "30px",
                  }}
                  className="button"
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
            width: "30vw",
            background: "var(--bg)",
            color: "white",
            minWidth: "425px"
          }}
        >
          <div
            className={`navbar-item ${accountState}`}
            style={{ color: "var(--textTitle)", width: "calc(100%/3)" }}
            onClick={() => accountHover()}
          >
            {context?.customerAccessToken?.accessToken ? (
              <h2 style={{ marginRight: "10px" }}>Account</h2>
            ) : (
              <h2 style={{ marginRight: "10px" }}>Sign In</h2>
            )}
            <FontAwesomeIcon
              icon={faUser}
              style={{
                color: "var(--c1)",
                display: "flex",
                alginSelf: "center",
                width: "0.875em;",
                height: "1em",
              }}
            />
          </div>
          <div
            className={`cart ${cartState}`}
            aria-label={`cart ${cartState}`}
            style={{
              display: "flex",
              color: "var(--textTitle)",
              display: "flex",
            }}
            onClick={() => cartHover()}
          >
            <div
              className="navbar-item"
              style={{ color: "var(--textTitle)", width: "calc(100%/3)" }}
            >
              {quantity > 0 ? (
                <>
                  {cartState != "" ? (
                    <h2
                      style={{
                        marginRight: "10px",
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                      }}
                    >
                      Cart
                    </h2>
                  ) : (
                    <h2
                      style={{
                        marginRight: "10px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Cart
                    </h2>
                  )}

                  <FontAwesomeIcon
                    icon={faShoppingBag}
                    className="is-size-5"
                    style={{
                      color: "var(--c1)",
                      display: "flex",
                      alignSelf: "center",
                      width: "0.875em;",
                      height: "1em",
                    }}
                  />
                  <div className="shopping-bag-quantity">{quantity}</div>
                </>
              ) : (
                <>
                  <h2 style={{ marginRight: "10px" }}>Cart</h2>
                  <FontAwesomeIcon
                    icon={faShoppingBag}
                    className="is-size-5"
                    style={{
                      color: "var(--c1)",
                      display: "flex",
                      alignSelf: "center",
                      width: "0.875em;",
                      height: "1em",
                    }}
                  />
                </>
              )}
            </div>
          </div>
          {cartState != "" && (
            <CartSection quantity={quantity} cartState={setCartState} />
          )}
          {accountState != "" && <AccountSection side={accountHover} />}
          <div
            className="navbar-item"
            style={{ color: "var(--textTitle)", width: "calc(100%/3)" }}
          >
            <h2 style={{ marginRight: "10px" }}>Theme</h2>
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
     
      {menu && (
        <div className="category-sidebar">
          <div className="category-container">
            <div className="category-bar-top">
              <button
                className="categories-circle-button"
                onClick={() => handleMenuClick()}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <div className="row">
                <Link
                  aria-label="search"
                  className="categories-logo has-text-black has-text-weight-bold"
                  to="/"
                >
                  <img
                    src={logo}
                    alt="Boomer Store logo"
                    style={{ maxWidth: "150px" }}
                  ></img>
                </Link>

                <button
                  className="EBold"
                  style={{
                    display: "flex",
                    alignSelf: "center",
                    alignItems: "center",
                    color: "white",
                    marginTop: "15px",
                    background: "none",
                    border: "none",
                    outline: "none",
                  }}
                  onClick={() => handleMenuClick()}
                >
                  Back
                  <FontAwesomeIcon
                    icon={faStream}
                    style={{
                      marginLeft: "10px",
                      marginTop: "3px",
                      transform: "rotate(0deg)",
                      color: "#FFBA00",
                    }}
                  />
                </button>
              </div>
            </div>

            <div className="categorie-type-container">
              <div className="department-categories">
                <span className="categorie-header">Department</span>
                <div className="categories-option">
                  <a href="">Boomer Silver</a>
                </div>
                <div className="categories-option">
                  <a href="">Boomer Supplements</a>
                </div>
                <div className="categories-option">
                  <a href="">Vietnamese Coffee</a>
                </div>
                <div className="categories-option">
                  <a href="">Boomer Naturals</a>
                </div>
                <div className="categories-option">
                  <a href="">Silver Aid</a>
                </div>
              </div>

              <div className="product-categories">
                <span className="categorie-header">Products</span>
                <div className="categories-option">
                  <a href="">Boomer Silver</a>
                </div>
                <div className="categories-option">
                  <a href="">Boomer Supplements</a>
                </div>
                <div className="categories-option">
                  <a href="">Vietnamese Coffee</a>
                </div>
                <div className="categories-option">
                  <a href="">Boomer Naturals</a>
                </div>
                <div className="categories-option">
                  <a href="">Silver Aid</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
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
