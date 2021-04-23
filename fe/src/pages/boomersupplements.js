import React, { useState } from "react";
import CollectionProductBox from "../components/ProductList/collectionProductBox";
import HorizontalBox from "../components/ProductList/horizontalBox";
import { Link } from "gatsby"; /* eslint-disable */
import SEO from "../components/seo";
import Banban from "../images/supsamplebanner.jpg";
import BanbanMobile from "../images/mobilesample.jpg";
import Ad1 from "../images/supad2.jpg";
import Ad2 from "../images/supad1.jpg";
import Ad3 from "../images/ad3.webp";
import NOX from "../images/noxlogo.webp";
import VE from "../images/velogo.webp";
import NOXAD from "../images/noxad.webp";
import VEAD from "../images/vead.webp";
import "./boomersupplements.sass";
import BoomerSupplements from "../images/boomersupplements.webp";

const Supplements = ({ data }) => {
  <SEO title="Boomer Supplements | Boomer Store" />;
  let offers, arrivals, featured;
  let collections = data.allShopifyCollection.nodes.map((node) => {
    if (node?.title == "Supplements") {
      arrivals = node.products;
    }
    if (node?.title == "Supplements") {
      offers = node.products;
    }
    if (node?.title == "Supplements") {
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
        <div
          className="cart-product-wrapper"
          style={{
            width: "80%",
            margin: "auto",
            marginTop: "15px",
            marginBottom: "15px",
            padding: "15px 25px",
          }}
        >
          <div>
            <div style={{ display: "flex" }}>
              <figure className="image is-96x96" style={{ margin: "auto" }}>
                <img src={NOX} alt="sold-out" style={{ width: "96px" }} />
              </figure>
              <p
                style={{
                  textAlign: "center",
                  alignSelf: "center",
                  padding: "15px",
                }}
              >
                +
              </p>
              <figure className="image is-96x96" style={{ margin: "auto" }}>
                <img src={VE} alt="sold-out" style={{ width: "96px" }} />
              </figure>
            </div>
          </div>
          <div
            className="cart-product-title-section"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "90%",
              textAlign: "left",
            }}
          >
            <p style={{ padding: "15px", color: "black" }}>
              Try All 7 Flavors of Vitamin Energy and NOXCG3 Today!{" "}
              <p style={{ fontSize: "16px", color: "black" }}>
                Get 1 Sample Pack Free Using Code{" "}
                <b style={{ fontSize: "24px" }}>BOOMFREE</b> At Checkout
              </p>
            </p>
          </div>
          <Link to="/product/boomer-supplements-sample-pack/">
            <button class="button checkout-button" type="button">
              Get Your Sample Pack
            </button>
          </Link>
        </div>
        <div
          className="flippy"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div>
            <a href="https://boomernaturals.com/collections/featured-covers/products/copy-of-noxcg3?variant=39708348940481">
              <img
                className="supplements-top-banner-container hide-sup-mobile"
                src={`${NOXAD}`}
                style={{
                  backgroundColor: `black`,
                  maxHeight: `100%`,
                  maxWidth: `100%`,
                  objectFit: `contain`,
                }}
              ></img>
            </a>
            <div
              className="cart-product-wrapper"
              style={{
                width: "100%",
                margin: "auto",
                marginTop: "0px",
                marginBottom: "0px",
                padding: "15px 25px",
                maxWidth: "none",
              }}
            >
              <div>
                <div style={{ display: "flex" }}>
                  <figure className="image is-96x96" style={{ margin: "auto" }}>
                    <img src={NOX} alt="sold-out" style={{ width: "96px" }} />
                  </figure>
                </div>
              </div>
              <div
                className="cart-product-title-section"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                <p style={{ padding: "15px", color: "black" }}>
                  Visit BoomerNaturals.com to subscribe to NOXCG3™
                </p>
              </div>
              <a href="https://boomernaturals.com/collections/featured-covers/products/copy-of-noxcg3?variant=39708348940481">
                <button class="button checkout-button" type="button">
                  Buy NOXCG3™
                </button>
              </a>
            </div>
          </div>
          <div>
            <a href="https://boomernaturals.com/collections/featured-covers/products/vitamin-energy-32-pack">
              <img
                className="supplements-top-banner-container hide-sup-mobile"
                src={`${VEAD}`}
                style={{
                  backgroundColor: `black`,
                  maxHeight: `100%`,
                  maxWidth: `100%`,
                  objectFit: `contain`,
                }}
              ></img>
            </a>
            <div
              className="cart-product-wrapper"
              style={{
                width: "100%",
                margin: "auto",
                marginTop: "0px",
                marginBottom: "0px",
                padding: "15px 25px",
                maxWidth: "none",
              }}
            >
              <div>
                <div style={{ display: "flex" }}>
                  <figure className="image is-96x96" style={{ margin: "auto" }}>
                    <img src={VE} alt="sold-out" style={{ width: "96px" }} />
                  </figure>
                </div>
              </div>
              <div
                className="cart-product-title-section"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                <p style={{ padding: "15px", color: "black" }}>
                  Buy Vitamin Energy Today On BoomerStore.com
                </p>
              </div>
              <a href="https://boomernaturals.com/collections/featured-covers/products/vitamin-energy-32-pack">
                <button class="button checkout-button" type="button">
                  Buy Vitamin Energy
                </button>
              </a>
            </div>
          </div>
        </div>
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
                Supplement your healthy lifestyle with help from the Boomer line
                of daily supplements. We’ve sourced the finest ingredients to
                give your health a boost, so you can feel your best. Whether you
                have a specific ailment you’re seeking relief from, or you're
                looking to increase your general wellness, we’re here to support
                you along the way.
              </p>
              <p className="sup-desc-text">
                Our collection boasts a multi-vitamin, energy supplement,
                vitamin C, antioxidants, and amino acids. Vitamin C helps you
                feel your best by maintaining healthy blood vessels, bones, and
                skin. An antioxidant-rich diet can help reduce your risk of
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
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/TXMtHkEz9_U"
              title="YouTube video player"
              frameborder="0"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen;"
              allowfullscreen
            ></iframe>
          </div>
          <div className="sup-mid-right">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-SHgw2T1l18"
              title="YouTube video player"
              frameborder="0"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen;"
              allowfullscreen
            ></iframe>
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
            <div
              className="f-row-p"
              style={{ justifyContent: "center", flexFlow: "wrap" }}
            >
              {/*offers 1 collection */}
              {arrivals.map((product) => {
                return (
                  <CollectionProductBox product={product} key={product?.id} />
                );
              })}
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
