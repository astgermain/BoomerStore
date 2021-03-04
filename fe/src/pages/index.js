import React, { useState, useEffect } from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import ProductList from "../components/productList";
import MainSection from "../components/HomeItems/mainSection";
import SideSection from "../components/HomeItems/sideSection";
import CategorySection from "../components/HomeItems/categorySection";
import FeaturedSection from "../components/HomeItems/featuredSection";
import "./indexPage.sass";

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <section className="home-top">
        <MainSection data={data} />
        <SideSection data={data} />
      </section>
      {/*
      <CategorySection />
      */}
      <FeaturedSection data={data} />
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allShopifyProduct {
      edges {
        node {
          id
          title
          handle
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
