import React, { useState } from "react";
import CollectionProductBox from "../components/ProductList/collectionProductBox";
import HorizontalBox from "../components/ProductList/horizontalBox";
import { Link } from "gatsby"; /* eslint-disable */
import Banban from "../images/supsamplebanner.jpg";
import BanbanMobile from "../images/mobilesample.jpg";
import Ad1 from "../images/supad2.jpg";
import Ad2 from "../images/supad1.jpg";
import Ad3 from "../images/ad3.webp";
import "./boomersupplements.sass";
import BoomerSupplements from "../images/boomersupplements.webp";

const Supplements = ({ data }) => {
  let offers, arrivals, featured;
  let collections = data.allShopifyCollection.nodes.map((node) => {
    if (node?.title == "Featured") {
      arrivals = node.products;
    }
    if (node?.title == "Featured") {
      offers = node.products;
    }
    if (node?.title == "Featured") {
      featured = node.products;
    }
    return node;
  });
  let q = offers.map((product) => {
    return product;
  });
  let s1 = [offers[1], offers[2]];
  let s2 = [offers[4], offers[5]];
  return (
    <div className="supplements-wrapper">
      <div className="supplements-page">
        <Link to="/product/boomer-supplements-sample-pack">
          <img
            className="supplements-top-banner-container hide-sup-mobile"
            src={`${Banban}`}
            style={{
              backgroundColor: `black`,
              maxHeight: `100%`,
              maxWidth: `100%`,
              objectFit: `contain`,
            }}
          ></img>
          <img
            className="supplements-top-banner-container show-sup-mobile"
            src={`${BanbanMobile}`}
            style={{
              backgroundColor: `black`,
              maxHeight: `100%`,
              maxWidth: `100%`,
              width: `100%`,
              objectFit: `contain`,
            }}
          ></img>
        </Link>
        <div className="supplements-middle-banner-container">
          <div className="sup-full">
            <div className="sup-desc">
              {/*
              <h1 className="has-text-weight-semibold is-size-2 lAlign fade-in2s">
                Boomer Supplements
              </h1>
            */}
              <img
                src={BoomerSupplements}
                className="brand-logo-max fade-in"
              ></img>
              <p className="sup-desc-text">
                Supplement your healthy lifestyle with the help of the Boomer
                line of daily supplements. We’ve sourced the finest ingredients
                to give your health a boost, so you can and feel your best.
                Whether you have a specific ailment, you’re seeking relief from,
                or just looking to increase your general wellness, we’re here to
                support you along the way.
              </p>
              <p className="sup-desc-text">
                Our collection boasts a multi-vitamin, energy supplement,
                vitamin C, antioxidants, and amino acids. Vitamin C helps you
                feel your best by maintaining healthy blood vessels, bones, and
                skin. And an antioxidant-rich diet can help reduce your risk of
                heart disease and certain cancers, as well as enrich your
                overall health by reducing the number of free radicals in your
                body. Our NOXCG3™ supplement is sure to help you power through
                your next workout or recovery day. This energy-boosting drink
                supplement contains nitric oxide- arginine, creatine, glutamine,
                and beta-alanine for the ultimate amino acid drink that
                stimulates muscle strength and growth.
              </p>
            </div>
          </div>
        </div>
        <div className="supplements-middle-banner-container">
          <div className="sup-mid-left">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/N9UvLnm1WK0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen;s" allowfullscreen></iframe>
          </div>
          <div className="sup-mid-right">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/oqUlAWY5kSs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowfullscreen;" allowfullscreen></iframe>
          </div>
        </div>
        <div className="supplements-bottom-container">
          <div className="featured-content3">
            <div className="f-row-top">
              <span className="f-top-title2">Featured Products</span>
              <a href="collection/offers">
                <button className="f-button">See More</button>
              </a>
            </div>
            <div className="f-row-p">
              <div className="f-column-p col-2">
                <div className="horizontal-box-container">
                  <HorizontalBox product={q[0]} give={true} />
                </div>
                <div className="horizontal-product-container">
                  {s1.map((product) => {
                    return (
                      <CollectionProductBox
                        product={product}
                        give={true}
                        key={product?.id}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="f-column-p col-3">
                <div className="horizontal-box-container">
                  <HorizontalBox product={q[3]} give={true} />
                </div>
                <div className="horizontal-product-container">
                  {s2.map((product) => {
                    return (
                      <CollectionProductBox
                        product={product}
                        give={true}
                        key={product?.id}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="f-column-p col-1">
                <a
                  href="/collection/ad3"
                  className="second-ad"
                  style={{ height: "100%" }}
                >
                  <div
                    className="f-ad-box"
                    style={{
                      backgroundImage: `url(${Ad3})`,
                      backgroundSize: `contain`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      flexDirection: "column",
                      padding: "15px",
                    }}
                  >
                    <p
                      style={{
                        padding: "15px",
                        color: "white",
                        fontSize: "2rem",
                        textAlign: "center",
                      }}
                    >
                      Now Available
                    </p>
                    <button className="button account-button-ad">Shop</button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supplements;

export const query = graphql`
  query {
    allShopifyCollection {
      nodes {
        id
        descriptionHtml
        description
        shopifyId
        title
        products {
          id
          handle
          images {
            originalSrc
            localFile {
              childImageSharp {
                fluid(maxWidth: 910) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
          priceRange {
            maxVariantPrice {
              amount
            }
            minVariantPrice {
              amount
            }
          }
          productType
          shopifyId
          title
          variants {
            id
            title
            price
          }
          vendor
        }
      }
    }
  }
`;
