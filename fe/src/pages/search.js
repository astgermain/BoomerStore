import React, { useState, useEffect } from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import ProductBox from "../components/ProductList/productBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import './searchPage.sass'

const SearchPage = ({ data, location }) => {
  const [search, setSearch] = useState("");
  const [number, setNumber] = useState(0);
  let h = ""
  useEffect(() => {
    setSearch(
        location.state.search
    );
  }, []);

  const { edges: products } = data.allShopifyProduct;
  return (
    <>
      <SEO title="Home" />
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="searchbar-area">
              <div className="field" style={{maxWidth: "500px", borderRadius: "5px"}}>
                <p className="control has-icons-right">
                  <input
                    className="EBold search-over input"
                    name="value"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search"
                    style={{fontSize: "1rem", boxShadow: "#6b69691c 0px 0px 5px 3px;"}}
                  />
                  
                  <span className="icon is-right search-icon">
                  <FontAwesomeIcon icon={faSearch} />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero search-section-1">
        <div className="hero-body">
          <div className="hero-body with-margin-bottom">
            <h1 className="EBold result-text">
              Results For "{search.toUpperCase()}" :
            </h1>
            <h1 className="EReg result-text2">
              <>Browse<b>&nbsp;{number}&nbsp;</b> {search}&nbsp;Products:</>
            </h1>
          </div>
          <div className="container search-container">
            <div className="columns is-multiline ">
              {products
                .filter(
                  (p) =>
                    p.node.title.toUpperCase().includes(search.toUpperCase()) ||
                    p.node.productType
                      .toUpperCase()
                      .includes(search.toUpperCase()) ||
                    (p.node.title
                      .toUpperCase()
                      .includes(search.toUpperCase()) &&
                      p.node.productType
                        .toUpperCase()
                        .includes(search.toUpperCase()))
                )
                .map((p, i) =>
                  !p ? (
                    <p>Nothings with : {search} </p>
                  ) : (
                    <div
                      className="column is-3"
                      style={{ marginBottom: "40px" }}
                      key={i}
                    >
                      <ProductBox product={p} />
                    </div>
                  )
                )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchPage;

export const query = graphql`
  query {
    allShopifyProduct {
      edges {
        node {
          id
          title
          handle
          createdAt(fromNow: true)
          publishedAt
          productType
          vendor
          priceRange {
            maxVariantPrice {
              amount
            }
          }
          images {
            originalSrc
            id
            localFile {
              childImageSharp {
                fluid(maxWidth: 910) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
          variants {
            id
            title
            price
          }
        }
      }
    }
  }
`;
