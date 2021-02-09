import { Link } from "gatsby"; /* eslint-disable */
import PropTypes from "prop-types";
import React, { useContext, useState, useEffect } from "react";
import StoreContext from "../context/store";
import logo from "../images/boomerstorelogo.png";
import ToggleButton from "./UI/toogleButton";
import CartSection from "./HomeItems/cartSection"
import AccountSection from "./HomeItems/accountSection"
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
    setMenu(true);
  };

  useEffect(() => {
    setQuantity(countQuantity(checkout ? checkout.lineItems : []));
  }, [checkout]);

  const cartHover = () => {
    if(cartState == ""){
      setAccountState("")
      setCartState('cart-hovered')
    }
    else {
      setCartState("")
    }
  }
  const accountHover = () => {
    if(accountState == ""){
      setCartState("")
      setAccountState('account-hovered')
    }
    else {
      setAccountState("")
    }
    
  }

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
                    backgroundColor: "var(--c1)",
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
            width: "30vw",
            background: "var(--bg)",
            color: "white",
          }}
        >
          <div
            className={`navbar-item ${accountState}`}
            style={{ color: "var(--textTitle)", width: "calc(30vw/3)" }}
            onClick={() => accountHover()}
          >
            <h2 style={{marginRight: "10px"}}>Sign In</h2>
            <FontAwesomeIcon icon={faUser} style={{color: "var(--c1)", display: "flex", alginSelf: "center"}}/>
          </div>
          <div
              className={`cart ${cartState}`}
              aria-label={`cart ${cartState}`}
              style={{ display: "flex", color: "var(--textTitle)", display: "flex" }}
              onClick={() => cartHover()}
            >
          <div
            className="navbar-item"
            style={{ color: "var(--textTitle)", width: "calc(30vw/3)" }}
          >
            
              {quantity > 0 ? (
                <>
                {cartState != "" ? <h2 style={{marginRight: "10px", display: "flex", alignItems: "center", color: "white"}}>Cart</h2> 
                :
                <h2 style={{marginRight: "10px", display: "flex", alignItems: "center"}}>Cart</h2>
                }
                  
                  <FontAwesomeIcon
                    icon={faShoppingBag}
                    className="is-size-5"
                    style={{color: "var(--c1)", display: "flex", alignSelf: "center"}}
                  />
                  <div className="shopping-bag-quantity">{quantity}</div>
                </>
              ) : (
                <>
                  <h2 style={{marginRight: "10px"}}>Cart</h2>
                  <FontAwesomeIcon
                    icon={faShoppingBag}
                    className="is-size-5"
                    style={{color: "var(--c1)", display: "flex", alignSelf: "center"}}
                  />
                </>
              )}
          </div>
          </div>
          {cartState != '' && <CartSection />}
          {accountState != '' && <AccountSection />}
          <div
            className="navbar-item"
            style={{ color: "var(--textTitle)", width: "calc(30vw/3)" }}
          >
            <h2 style={{marginRight: "10px"}}>Theme</h2>
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
              color: "#FFBA00",
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
