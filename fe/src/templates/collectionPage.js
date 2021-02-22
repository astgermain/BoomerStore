import React, {
  useContext,
  useState,
  useEffect,
} from "react"; /* eslint-disable */
import SEO from "../components/seo";
import { graphql } from "gatsby";
import StoreContext from "../context/store";
import CollectionProductBox from "../components/ProductList/collectionProductBox";
import './collectionPage.sass'

const collectionPage = ({ data }) => {
  const context = useContext(StoreContext);
  const collection = data.shopifyCollection;
  const products = collection.products;
  useEffect(() => {}, []);

  return (
    <>
      <SEO title={collection.title} />
      <section className="hero is-fullheight-with-navbar">
        <div
        className="collection-box"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="collection-title">
            <p style={{ fontSize: "2rem", color: "black" }}>
              {collection.title}
            </p>
          </div>
          <div className={`column is-3 mobile-collection`} style={{display: "flex", flexFlow: "wrap"}}>
            {products.map((p, i) => {
              let product = p;

              return <div className="reg-collection"><CollectionProductBox product={product} /></div>;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default collectionPage;

export const query = graphql`
  query($id: String!) {
    shopifyCollection(handle: { eq: $id }) {
      description
      descriptionHtml
      handle
      id
      shopifyId
      title
      products {
        createdAt
        id
        descriptionHtml
        description
        handle
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
        productType
        shopifyId
        title
        variants {
          id
          title
          price
          shopifyId
        }
        vendor
      }
    }
  }
`;
