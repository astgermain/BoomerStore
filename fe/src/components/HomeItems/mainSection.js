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
              <div className="cat-half">
                <div className="cat-info-top">Half</div>
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
              </div>
            </div>
            <div className="cat-row">
              <div className="cat-half">
                <div className="cat-info-top">Half</div>
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
              </div>
              <div className="cat-half">
                <div className="cat-info-top">Half</div>
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
              </div>
            </div>
            <div className="cat-row">
              <div className="cat-full">
                <div className="cat-info-top">Full</div>
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
              </div>
            </div>
          </div>
          <div className="cat-top-half">
            <div className="cat-row">
              <div className="cat-full">
                <div className="cat-info-top">Full</div>
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
              </div>
            </div>
            <div className="cat-row">
              <div className="cat-half">
                <div className="cat-info-top">Half</div>
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
              </div>
              <div className="cat-half">
                <div className="cat-info-top">Half</div>
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
              </div>
            </div>
            <div className="cat-row">
              <div className="cat-full">
                <div className="cat-info-top">Full</div>
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
              </div>
            </div>
          </div>
        </div>
        <div className="main-text-mobile">
          <div className="mobile-top">
        <div className="field" style={{ margin: "auto", display: "flex" }}>
            <div className="control has-icons-right">
              <form
                action="../search"
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
          <div className="cat-text">
            <p>browse.</p> <p>buy.</p> <p className="gold-text">boom.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
