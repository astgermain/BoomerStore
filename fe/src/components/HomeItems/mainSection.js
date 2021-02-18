import React from "react";
import ProductList from "../productList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./mainSection.sass";

const MainSection = ({ data }) => {
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
          <div className="cat-text">
            <p>browse.</p> <p>buy.</p> <p className="gold-text">boom.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
