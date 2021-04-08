import React, { useState } from "react";
import { Link } from "gatsby"; /* eslint-disable */
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
import PetImg from "../../images/categories/catPet.webp";
import ApImg from "../../images/categories/catAp.webp";
import CofImg from "../../images/categories/catCof.webp";
import ElecImg from "../../images/categories/catElec.webp";
import MaskImg from "../../images/categories/catMask.webp";
import SkinImg from "../../images/categories/catSkin.webp";
import SupImg from "../../images/categories/catSup.webp";
import BedImg from "../../images/categories/catBed.webp";
import "./mainSection.sass";

const MainSection = ({ data }) => {
  const [search, setSearch] = useState("");
  //Data is allShopifyProduct
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="mainSection" style={{ margin: "0" }}>
      <div className="home-ani">
        <div className="home-svg-1">
          <svg
            id="circle"
            data-name="circle"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 360 360"
          >
            <path
              className="cls-1"
              d="M180,293.9A113.9,113.9,0,1,1,293.91,180,114,114,0,0,1,180,293.9M180,18C90.74,18,18,90.68,18,180S90.74,342,180,342s162-72.68,162-162S269.33,18,180,18"
            />
          </svg>
        </div>
        <div className="home-svg-1-shadow">
          <svg
            id="circle"
            data-name="circle-shadow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 360 360"
          >
            <path
              className="cls-1"
              d="M180,293.9A113.9,113.9,0,1,1,293.91,180,114,114,0,0,1,180,293.9M180,18C90.74,18,18,90.68,18,180S90.74,342,180,342s162-72.68,162-162S269.33,18,180,18"
            />
          </svg>
        </div>
        <div className="home-svg-2">
          <svg
            id="plus"
            data-name="plus"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 360 360"
          >
            <path
              className="cls-1"
              d="M322.18,160.17H199.84V37.83a19.83,19.83,0,1,0-39.65,0V160.17H37.86a19.83,19.83,0,1,0,0,39.66H160.19V322.17a19.83,19.83,0,1,0,39.65,0V199.83H322.18a19.83,19.83,0,0,0,0-39.66"
            />
          </svg>
        </div>
        <div className="home-svg-2-shadow">
          <svg
            id="plus-shadow"
            data-name="plus-shadow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 360 360"
          >
            <path
              className="cls-1"
              d="M322.18,160.17H199.84V37.83a19.83,19.83,0,1,0-39.65,0V160.17H37.86a19.83,19.83,0,1,0,0,39.66H160.19V322.17a19.83,19.83,0,1,0,39.65,0V199.83H322.18a19.83,19.83,0,0,0,0-39.66"
            />
          </svg>
        </div>
        <div className="home-svg-3">
          <svg
            id="spark"
            data-name="spark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 360 360"
          >
            <path
              className="cls-1"
              d="M287.5,25.88,205,108.42a26.94,26.94,0,1,0,38.09,38.1L325.6,64a26.94,26.94,0,0,0-38.1-38.1"
            />
            <path
              className="cls-1"
              d="M117,213.45,34.44,296a26.92,26.92,0,1,0,38.08,38.05L155,251.5A26.92,26.92,0,1,0,117,213.45"
            />
            <path
              className="cls-1"
              d="M243.06,213.45A26.92,26.92,0,1,0,205,251.5l82.53,82.55A26.92,26.92,0,0,0,325.6,296l-82.54-82.55Z"
            />
            <path
              className="cls-1"
              d="M72.52,25.88A26.93,26.93,0,0,0,34.44,64L117,146.52A26.94,26.94,0,0,0,155,108.42L72.52,25.88Z"
            />
          </svg>
        </div>
        <div className="home-svg-3-shadow">
          <svg
            id="spark-shadow"
            data-name="spark-shadow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 360 360"
          >
            <path
              className="cls-1"
              d="M287.5,25.88,205,108.42a26.94,26.94,0,1,0,38.09,38.1L325.6,64a26.94,26.94,0,0,0-38.1-38.1"
            />
            <path
              className="cls-1"
              d="M117,213.45,34.44,296a26.92,26.92,0,1,0,38.08,38.05L155,251.5A26.92,26.92,0,1,0,117,213.45"
            />
            <path
              className="cls-1"
              d="M243.06,213.45A26.92,26.92,0,1,0,205,251.5l82.53,82.55A26.92,26.92,0,0,0,325.6,296l-82.54-82.55Z"
            />
            <path
              className="cls-1"
              d="M72.52,25.88A26.93,26.93,0,0,0,34.44,64L117,146.52A26.94,26.94,0,0,0,155,108.42L72.52,25.88Z"
            />
          </svg>
        </div>
        <div className="home-svg-4">
          <svg
            id="plus"
            data-name="plus"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 360 360"
          >
            <path
              className="cls-1"
              d="M322.18,160.17H199.84V37.83a19.83,19.83,0,1,0-39.65,0V160.17H37.86a19.83,19.83,0,1,0,0,39.66H160.19V322.17a19.83,19.83,0,1,0,39.65,0V199.83H322.18a19.83,19.83,0,0,0,0-39.66"
            />
          </svg>
        </div>
        <div className="home-svg-4-shadow">
          <svg
            id="plus-shadow"
            data-name="plus-shadow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 360 360"
          >
            <path
              className="cls-1"
              d="M322.18,160.17H199.84V37.83a19.83,19.83,0,1,0-39.65,0V160.17H37.86a19.83,19.83,0,1,0,0,39.66H160.19V322.17a19.83,19.83,0,1,0,39.65,0V199.83H322.18a19.83,19.83,0,0,0,0-39.66"
            />
          </svg>
        </div>
        <div className="home-svg-5">
          <svg
            id="circle"
            data-name="circle"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 360 360"
          >
            <path
              className="cls-1"
              d="M180,293.9A113.9,113.9,0,1,1,293.91,180,114,114,0,0,1,180,293.9M180,18C90.74,18,18,90.68,18,180S90.74,342,180,342s162-72.68,162-162S269.33,18,180,18"
            />
          </svg>
        </div>
        <div className="home-svg-5-shadow">
          <svg
            id="circle"
            data-name="circle-shadow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 360 360"
          >
            <path
              className="cls-1"
              d="M180,293.9A113.9,113.9,0,1,1,293.91,180,114,114,0,0,1,180,293.9M180,18C90.74,18,18,90.68,18,180S90.74,342,180,342s162-72.68,162-162S269.33,18,180,18"
            />
          </svg>
        </div>
        <div className="home-svg-6">
          <svg
            id="spark"
            data-name="spark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 360 360"
          >
            <path
              className="cls-1"
              d="M287.5,25.88,205,108.42a26.94,26.94,0,1,0,38.09,38.1L325.6,64a26.94,26.94,0,0,0-38.1-38.1"
            />
            <path
              className="cls-1"
              d="M117,213.45,34.44,296a26.92,26.92,0,1,0,38.08,38.05L155,251.5A26.92,26.92,0,1,0,117,213.45"
            />
            <path
              className="cls-1"
              d="M243.06,213.45A26.92,26.92,0,1,0,205,251.5l82.53,82.55A26.92,26.92,0,0,0,325.6,296l-82.54-82.55Z"
            />
            <path
              className="cls-1"
              d="M72.52,25.88A26.93,26.93,0,0,0,34.44,64L117,146.52A26.94,26.94,0,0,0,155,108.42L72.52,25.88Z"
            />
          </svg>
        </div>
        <div className="home-svg-6-shadow">
          <svg
            id="spark-shadow"
            data-name="spark-shadow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 360 360"
          >
            <path
              className="cls-1"
              d="M287.5,25.88,205,108.42a26.94,26.94,0,1,0,38.09,38.1L325.6,64a26.94,26.94,0,0,0-38.1-38.1"
            />
            <path
              className="cls-1"
              d="M117,213.45,34.44,296a26.92,26.92,0,1,0,38.08,38.05L155,251.5A26.92,26.92,0,1,0,117,213.45"
            />
            <path
              className="cls-1"
              d="M243.06,213.45A26.92,26.92,0,1,0,205,251.5l82.53,82.55A26.92,26.92,0,0,0,325.6,296l-82.54-82.55Z"
            />
            <path
              className="cls-1"
              d="M72.52,25.88A26.93,26.93,0,0,0,34.44,64L117,146.52A26.94,26.94,0,0,0,155,108.42L72.52,25.88Z"
            />
          </svg>
        </div>
        <div className="home-svg-7">
          <svg
            id="plus"
            data-name="plus"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 360 360"
          >
            <path
              className="cls-1"
              d="M322.18,160.17H199.84V37.83a19.83,19.83,0,1,0-39.65,0V160.17H37.86a19.83,19.83,0,1,0,0,39.66H160.19V322.17a19.83,19.83,0,1,0,39.65,0V199.83H322.18a19.83,19.83,0,0,0,0-39.66"
            />
          </svg>
        </div>
        <div className="home-svg-7-shadow">
          <svg
            id="plus-shadow"
            data-name="plus-shadow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 360 360"
          >
            <path
              className="cls-1"
              d="M322.18,160.17H199.84V37.83a19.83,19.83,0,1,0-39.65,0V160.17H37.86a19.83,19.83,0,1,0,0,39.66H160.19V322.17a19.83,19.83,0,1,0,39.65,0V199.83H322.18a19.83,19.83,0,0,0,0-39.66"
            />
          </svg>
        </div>
      </div>
      <div className="header-adjustment">
        <div className="main-text-section">
          <div className="cat-top-half">
            <div className="cat-row">
              <div className="cat-text">
                <p>browse.</p> <p>buy.</p> <p className="gold-text">boom.</p>
              </div>
              <a
                className="cat-half"
                href="collection/face-covers"
                style={{
                  backgroundImage: `url(${MaskImg})`,
                  backgroundSize: `cover`,
                }}
              >
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
                            width: "0.875em",
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
              <a
                className="cat-half"
                //href="collection/pet"
                style={{
                  backgroundImage: `url(${PetImg})`,
                  backgroundSize: `cover`,
                }}
              >
                <div className="cat-info-top">Pet<p style={{color: "var(--c1)", fontSize: "14px"}}> (Coming Soon)</p></div>
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
                            width: "0.875em",
                            height: "1em",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="cat-half"
                href="collection/skin-care"
                style={{
                  backgroundImage: `url(${SkinImg})`,
                  backgroundSize: `cover`,
                }}
              >
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
                            width: "0.875em",
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
              <a
                className="cat-full"
                //href="collection/electronics"
                style={{
                  backgroundImage: `url(${ElecImg})`,
                  backgroundSize: `cover`,
                }}
              >
                <div className="cat-info-top">Electronics<p style={{color: "var(--c1)", fontSize: "14px"}}> (Coming Soon)</p></div>
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
                            width: "0.875em",
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
              <a
                className="cat-full"
                //href="collection/bed-and-bath"
                style={{
                  backgroundImage: `url(${BedImg})`,
                  backgroundSize: `cover`,
                }}
              >
                <div className="cat-info-top">Bed & Bath<p style={{color: "var(--c1)", fontSize: "14px"}}> (Coming Soon)</p></div>
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
                            width: "0.875em",
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
              <a
                className="cat-half"
                href="/boomersupplements"
                style={{
                  backgroundImage: `url(${SupImg})`,
                  backgroundSize: `cover`,
                }}
              >
                <div className="cat-info-top">Supplements<p style={{color: "var(--c1)", fontSize: "14px"}}> (Coming Soon)</p></div>
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
                            width: "0.875em",
                            height: "1em",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="cat-half"
                //href="collection/coffee"
                style={{
                  backgroundImage: `url(${CofImg})`,
                  backgroundSize: `cover`,
                }}
              >
                <div className="cat-info-top">Coffee<p style={{color: "var(--c1)", fontSize: "14px"}}> (Coming Soon)</p></div>
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
                            width: "0.875em",
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
              <a
                className="cat-full"
                href="collection/apparel"
                style={{
                  backgroundImage: `url(${ApImg})`,
                  backgroundSize: `cover`,
                }}
              >
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
                            width: "0.875em",
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
          <div className="cat-text">
            <p>browse.</p> <p>buy.</p> <p className="gold-text">boom.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
