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
              src="https://www.youtube.com/embed/N9UvLnm1WK0"
              title="YouTube video player"
              frameborder="0"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen;s"
              allowfullscreen
            ></iframe>
          </div>
          <div className="sup-mid-right">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/oqUlAWY5kSs"
              title="YouTube video player"
              frameborder="0"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowfullscreen;"
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
