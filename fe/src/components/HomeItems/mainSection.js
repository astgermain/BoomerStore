import React, {useState} from "react";
import ProductList from "../productList";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faUser,
  faSearch,
  faAngleDown,
  faStream,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import PetImg from "../../images/categories/catPet.webp"
import ApImg from "../../images/categories/catAp.webp"
import CofImg from "../../images/categories/catCof.webp"
import ElecImg from "../../images/categories/catElec.webp"
import MaskImg from "../../images/categories/catMask.webp"
import SkinImg from "../../images/categories/catSkin.webp"
import SupImg from "../../images/categories/catSup.webp"
import BedImg from "../../images/categories/catBed.webp"
import "./mainSection.sass";

const MainSection = ({ data }) => {
  const [search, setSearch] = useState("");
  //Data is allShopifyProduct
  return (
    <div className="mainSection" style={{ margin: "0" }}>
      <div className="header-adjustment">
        <div className="main-text-section">
          <div className="cat-top-half">
            <div className="cat-row">
              <div className="cat-text">
                <p>browse.</p> <p>buy.</p> <p className="gold-text">boom.</p>
              </div>
              <a className="cat-half" href="collection/face-covers" style={{ backgroundImage: `url(${MaskImg})`, backgroundSize: `cover` }}>
                <div className="cat-info-top">Face Covers</div>
                <div className="cat-icon-bottom">
                  <div className="boxH">
                    <div className="box-backgroundH">
                      <div className="productBoxH">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="p-icon"
                          style={{
                            marginTop: "1px",
                            color: "black",
                            width: "0.875em;",
                            height: "1em",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="cat-row">
              <a className="cat-half" href="collection/pet" style={{ backgroundImage: `url(${PetImg})`, backgroundSize: `cover` }}>
                <div className="cat-info-top">Pet</div>
                <div className="cat-icon-bottom">
                  <div className="boxH">
                    <div className="box-backgroundH">
                      <div className="productBoxH">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="p-icon"
                          style={{
                            marginTop: "1px",
                            color: "black",
                            width: "0.875em;",
                            height: "1em",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a className="cat-half" href="collection/skin-care" style={{ backgroundImage: `url(${SkinImg})`, backgroundSize: `cover` }}>
                <div className="cat-info-top">Skin Care</div>
                <div className="cat-icon-bottom">
                  <div className="boxH">
                    <div className="box-backgroundH">
                      <div className="productBoxH">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="p-icon"
                          style={{
                            marginTop: "1px",
                            color: "black",
                            width: "0.875em;",
                            height: "1em",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="cat-row">
              <a className="cat-full" href="collection/electronics" style={{ backgroundImage: `url(${ElecImg})`, backgroundSize: `cover` }}>
                <div className="cat-info-top">Electronics</div>
                <div className="cat-icon-bottom">
                  <div className="boxHF">
                    <div className="box-backgroundHF">
                      <div className="productBoxHF">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="p-icon"
                          style={{
                            marginTop: "1px",
                            color: "black",
                            width: "0.875em;",
                            height: "1em",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="cat-top-half">
            <div className="cat-row">
              <a className="cat-full" href="collection/bed-and-bath" style={{ backgroundImage: `url(${BedImg})`, backgroundSize: `cover` }}>
                <div className="cat-info-top">Silver-Infused Bed & Bath</div>
                <div className="cat-icon-bottom">
                  <div className="boxHF">
                    <div className="box-backgroundHF">
                      <div className="productBoxHF">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="p-icon"
                          style={{
                            marginTop: "1px",
                            color: "black",
                            width: "0.875em;",
                            height: "1em",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="cat-row">
              <a className="cat-half" href="collection/supplements" style={{ backgroundImage: `url(${SupImg})`, backgroundSize: `cover` }}>
                <div className="cat-info-top">Supplements</div>
                <div className="cat-icon-bottom">
                <div className="boxH">
                    <div className="box-backgroundH">
                      <div className="productBoxH">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="p-icon"
                          style={{
                            marginTop: "1px",
                            color: "black",
                            width: "0.875em;",
                            height: "1em",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a className="cat-half" href="collection/coffee" style={{ backgroundImage: `url(${CofImg})`, backgroundSize: `cover` }}>
                <div className="cat-info-top">Coffee</div>
                <div className="cat-icon-bottom">
                <div className="boxH">
                    <div className="box-backgroundH">
                      <div className="productBoxH">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="p-icon"
                          style={{
                            marginTop: "1px",
                            color: "black",
                            width: "0.875em;",
                            height: "1em",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="cat-row">
              <a className="cat-full" href="collection/apparel" style={{ backgroundImage: `url(${ApImg})`, backgroundSize: `cover` }}>
                <div className="cat-info-top">Silver-Infused Apparel</div>
                <div className="cat-icon-bottom">
                  <div className="boxHF">
                    <div className="box-backgroundHF">
                      <div className="productBoxHF">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="p-icon"
                          style={{
                            marginTop: "1px",
                            color: "black",
                            width: "0.875em;",
                            height: "1em",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="main-text-mobile">
          <div className="mobile-top">
        <div className="field" style={{ margin: "auto", display: "flex" }}>
            <div className="control has-icons-right">
              <form
                action="/search"
                method="GET"
                style={{ display: "flex", alignItems: "center" }}
              >
                <input
                  className="EBold input-search"
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
                    height: "35px",
                    backgroundColor: "var(--c1)",
                    boxShadow: "0 0 0.125em 0.075em rgb(10 10 10 / 12%)",
                    outline: "none",
                    width: "40px",
                  }}
                  className="button"
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </form>
            </div>
          </div>
          </div>
          <div className="cat-text">
            <p>browse.</p> <p>buy.</p> <p className="gold-text">boom.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
