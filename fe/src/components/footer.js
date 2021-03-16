import React from "react";
import { Link } from "gatsby"; /* eslint-disable */
import logo from "../images/boomerstorelogo.webp";
import "./footer.sass";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ background: "#001220" }}
    >
      <div className="footer-row">
        <Link
          className="has-text-black has-text-weight-bold mleft"
          to="/"
        >
          <img
            src={logo}
            alt="Boomer Store logo"
            style={{ maxWidth: "150px" }}
          ></img>
        </Link>
        <div className="footer-links-section">
          <div className="footer-link-column">
            <p style={{color: "var(--c1)", textDecoration: "underline"}}>About</p>
            <div className="footer-sublinks EReg">
            <Link
          className="categories-link"
          to="/about"
          style={{color: "white"}}
        >About Boomer Store</Link>
            </div>
          </div>
          <div className="footer-link-column">
            <p style={{color: "var(--c1)", textDecoration: "underline"}}>Wholesale</p>
            <div className="footer-sublinks EReg">
              <a className="categories-link" href="https://boomernaturalswholesale.com/" style={{color: "white"}}>Boomer Wholesale</a>
            </div>
          </div>
          <div className="footer-link-column">
            <p style={{color: "var(--c1)", textDecoration: "underline"}}>Contact Us</p>
            <div className="footer-sublinks EReg">
            <Link
          className="categories-link"
          to="/contact"
          style={{color: "white"}}
        >Contact Form</Link>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ marginLeft: "75px", marginRight: "75px" }}></hr>
      <div className="footer-row2">
        <div className="reserve EReg">Copyright</div>
        <div className="footer-links-section">
          <div className="footer-link-column">(702) 960-4843</div>
          <div className="footer-link-column">info@boomerstore.com</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
