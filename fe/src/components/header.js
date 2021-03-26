import { Link } from "gatsby"; /* eslint-disable */
import PropTypes from "prop-types";
import React, { useContext, useState, useEffect } from "react";
import StoreContext from "../context/store";
import logo from "../images/boomerstorelogo.webp";
import ToggleButton from "./UI/toogleButton";
import CartSection from "./HomeItems/cartSection";
import AccountSection from "./HomeItems/accountSection";
import CategoryListItem from "./CategoryListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faUser,
  faSearch,
  faAngleDown,
  faShoppingCart,
  faStream,
  faChevronLeft,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./header.sass";

const countQuantity = (lineItems) => {
  let quantity = 0;

  lineItems.forEach((item) => {
    quantity = quantity + item.quantity;
  });
  return quantity;
};

const Header = ({ path, setTheme, loc, setMenuMobile }) => {
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
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMenuClick = () => {
    setMobileMenu(false);
    setMenu(!menu);
  };
  const handleMobileMenuClick = () => {
    setMenu(false);
    setMobileMenu(!mobileMenu);
    !mobileMenu ? setMenuMobile("noscroll") : setMenuMobile("");
  };
  const onChange = (e) => {
    setSearch(e.target.value);
  };
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
      <nav className="mobile-navbar">
        <div className="mobile-nav-left">
          <a onClick={() => handleMobileMenuClick()}>
            <FontAwesomeIcon
              icon={faStream}
              style={{
                marginLeft: "0px",
                marginTop: "1px",
                color: "#FFBA00",
                transform: "rotate(90deg)",
              }}
            />
          </a>
        </div>
        <h1 className="" style={{ margin: "auto" }}>
          <Link className="has-text-black has-text-weight-bold" to="/">
            <img
              src={logo}
              alt="Boomer Store logo"
              style={{ maxWidth: "115px", maxHeight: "25px" }}
            ></img>
          </Link>
        </h1>
        <div className="mobile-nav-right">
          <a href="/account">
            <FontAwesomeIcon
              icon={faUser}
              style={{
                color: "var(--c1)",
                display: "flex",
                alginSelf: "center",
                width: "0.875em",
                height: "1em",
              }}
            />
          </a>
          <hr
            style={{
              backgroundColor: "var(--c1)",
              border: "none",
              display: "block",
              height: "15px",
              zIndex: "40",
              width: ".5px",
              margin: "0",
            }}
          ></hr>
          <Link className="" to="/cart">
            {quantity > 0 ? (
              <>
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="is-size-5"
                  style={{
                    color: "var(--c1)",
                    display: "flex",
                    alignSelf: "center",
                    width: "0.875em",
                    height: "1em",
                  }}
                />
                <div className="shopping-bag-quantity">{quantity}</div>
              </>
            ) : (
              <>
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="is-size-5"
                  style={{
                    color: "var(--c1)",
                    display: "flex",
                    alignSelf: "center",
                    width: "0.875em",
                    height: "1em",
                  }}
                />
              </>
            )}
          </Link>
        </div>
      </nav>
      <div className="mobile-fixed-space"></div>
      <div className="reg-top-header">
        <div className="top-header-links">
          <a>Featured</a>
          <a>New Arrivals</a>
          <a>Holiday</a>
          <a>Sale</a>
        </div>
      </div>
      <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
        style={{
          display: "flex",
          height: "75px",
          backgroundColor: `#002244`,
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
          <h1 className="reg-logo-1">
            <Link className="has-text-black has-text-weight-bold" to="/">
              <img
                src={logo}
                alt="Boomer Store logo"
                style={{ maxWidth: "150px", maxHeight: "25px" }}
              ></img>
            </Link>
          </h1>
          {path != "/search/" && (
            <div className="reg-search-center">
              <div className="searchForm">
                <form
                  className="formField"
                  action="/search"
                  method="GET"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <input
                    onChange={onChange}
                    value={search}
                    id="search"
                    type="text"
                    className="form-control"
                  />
                  <label className="labelIcon">
                    <Link
                      to="/search"
                      state={{ search: search }}
                      style={{ width: "100%", height: "100%", padding: "0" }}
                    >
                      <button
                        type="submit"
                        style={{
                          width: "100%",
                          height: "100%",
                          background: "transparent",
                          border: "none",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          outline: "none",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="p-icon"
                          style={{
                            marginTop: "1px",
                            color: "black",
                            width: "0.875em",
                            height: "1em",
                          }}
                        />
                      </button>
                    </Link>
                  </label>
                  {search === "" ? (
                    <div className="selectedInput">Search</div>
                  ) : (
                    <div className="hasInput">Search</div>
                  )}
                </form>
              </div>
            </div>
          )}
        </div>
        <div
          className="navbar-end"
          style={{
            display: "flex",
            width: "30vw",
            background: "var(--darker)",
            color: "white",
            minWidth: "425px",
          }}
        >
          <div
            className={`navbar-item ${accountState}`}
            style={{ color: "var(--textTitle)", width: "calc(100%/3)" }}
            onClick={() => accountHover()}
          >
            <div className="cat-btn-top2 btn-border2">
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
                  width: "0.875em",
                  height: "1em",
                }}
              />
            </div>
          </div>
          <div
            className={`navbar-item ${cartState}`}
            style={{ color: "var(--textTitle)", width: "calc(100%/3)" }}
            onClick={() => cartHover()}
          >
            <div className={`cat-btn-top2 btn-border2`}>
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
                    icon={faShoppingCart}
                    className="is-size-5"
                    style={{
                      color: "var(--c1)",
                      display: "flex",
                      alignSelf: "center",
                      width: "0.875em",
                      height: "1em",
                    }}
                  />
                  <div className="shopping-bag-quantity">{quantity}</div>
                </>
              ) : (
                <>
                  <h2 style={{ marginRight: "10px" }}>Cart</h2>
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="is-size-5"
                    style={{
                      color: "var(--c1)",
                      display: "flex",
                      alignSelf: "center",
                      width: "0.875em",
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
            onClick={() => handleMenuClick()}
          >
            <a className="cat-btn-top btn-border">
              <h2 style={{ display: "flex", alignItems: "center" }}>Menu</h2>
              <FontAwesomeIcon
                icon={faStream}
                style={{
                  marginLeft: "10px",
                  marginTop: "1px",
                  color: "#FFBA00",
                }}
              />
            </a>
            {/*
            <h2 style={{ marginRight: "10px" }}>Theme</h2>
            <ToggleButton
              selected={selected}
              toggleSelected={() => {
                setSelected(!selected);
              }}
              setTheme={setTheme}
            />
            */}
          </div>
        </div>
      </nav>

      {menu && (
        <div className="category-sidebar">
          <div className="category-container category-color">
            <div className="category-bar-top">
              <div className="row" style={{ width: "100%" }}>
                <Link
                  aria-label="search"
                  className="categories-logo has-text-black has-text-weight-bold"
                  to="/"
                  style={{ marginLeft: "70px" }}
                >
                  <img
                    src={logo}
                    alt="Boomer Store logo"
                    style={{ maxWidth: "150px", maxHeight: "25px" }}
                  ></img>
                </Link>
                {/*
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
                      transform: "rotate(90deg)",
                      color: "#FFBA00",
                    }}
                  />
                </button>
                */}
              </div>
              <button
                className="categories-circle-button"
                onClick={() => handleMenuClick()}
              >
                <FontAwesomeIcon
                  icon={faTimes}
                  style={{ transform: "rotate(180deg)", width: "100%" }}
                />
              </button>
            </div>

            <div
              className="category-type-container"
              style={{ marginTop: "0px" }}
            >
              {/*
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
              */}

              <div className="product-categories">
                <span className="category-header">Shop By Brand</span>
                <CategoryListItem
                  url={"/collection/boomer-naturals"}
                  title={"Boomer Naturals"}
                />
                <CategoryListItem
                  url={"/collection/boomer-silver"}
                  title={"Boomer Silver"}
                />
                <CategoryListItem
                  url={"/collection/boomer-supplements"}
                  title={"Boomer Supplements"}
                />
                <CategoryListItem
                  url={"/collection/boomer-electronics"}
                  title={"Boomer Electronics"}
                />
                <span className="category-header">Pages</span>
                <CategoryListItem url={"/about"} title={"About Us"} />
                <CategoryListItem url={"/contact"} title={"Contact Us"} />
                <CategoryListItem url={"/faq"} title={"FAQ"} />
                <CategoryListItem
                  url={"https://boomernaturalswholesale.com/"}
                  title={"Wholesale"}
                />
              </div>
            </div>
          </div>
          <div
            className="category-offclick"
            onClick={() => handleMenuClick()}
          ></div>
        </div>
      )}
      {mobileMenu && (
        <div className="category-sidebar">
          <div className="category-container category-color">
            <div className="category-bar-top">
              <button
                className="categories-circle-button"
                onClick={() => handleMobileMenuClick()}
              >
                <FontAwesomeIcon
                  icon={faTimes}
                  style={{ transform: "rotate(180deg)" }}
                />
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
                    style={{ maxWidth: "150px", maxHeight: "25px" }}
                  ></img>
                </Link>
                {/*
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
                      transform: "rotate(90deg)",
                      color: "#FFBA00",
                    }}
                  />
                </button>
                */}
              </div>
            </div>

            <div
              className="category-type-container"
              style={{ marginTop: "75px" }}
            >
              <div className="product-categories">
                <span className="category-header">Shop By Brand</span>
                <CategoryListItem
                  url={"/collection/boomer-naturals"}
                  title={"Boomer Naturals"}
                />
                <CategoryListItem
                  url={"/collection/boomer-silver"}
                  title={"Boomer Silver"}
                />
                <CategoryListItem
                  url={"/collection/boomer-supplements"}
                  title={"Boomer Supplements"}
                />
                <CategoryListItem
                  url={"/collection/boomer-electronics"}
                  title={"Boomer Electronics"}
                />
                <span className="category-header">Pages</span>
                <CategoryListItem url={"/about"} title={"About Us"} />
                <CategoryListItem url={"/contact"} title={"Contact Us"} />
                <CategoryListItem url={"/faq"} title={"FAQ"} />
                <CategoryListItem
                  url={"https://boomernaturalswholesale.com/"}
                  title={"Wholesale"}
                />
              </div>
            </div>
          </div>
          <div
            className="category-offclick"
            onClick={() => handleMobileMenuClick()}
          ></div>
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
