import React, {
  useContext,
  useState,
  useEffect,
} from "react"; /* eslint-disable */
import SEO from "../components/seo";
import { graphql } from "gatsby";
import StoreContext from "../context/store";
import Sort from "../components/Filter/sort"
import CollectionProductBox from "../components/ProductList/collectionProductBox";
import "./collectionPage.sass";

const collectionPage = ({ data }) => {
  const context = useContext(StoreContext);
  const collection = data.shopifyCollection;
  const products = collection.products;
  useEffect(() => {}, []);

  return (
    <>
      <SEO title={collection.title} />
      <section className="hero">
        <div
          className="collection-box"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="collection-title">
            <p style={{ fontSize: "1.5rem", color: "black", textAlign: "center" }}>
              {collection.title}
            </p>
            <Sort context={context}/>
          </div>
          <div
            className={`column is-3 mobile-collection`}
            style={{ display: "flex", flexFlow: "wrap" }}
          >
            {products.sort(
                  context.store.filteredSort === "featured" ? (a) => (a)
                    : context.store.filteredSort === "low" ? ((a, b) => a.variants[0].price - b.variants[0].price)
                      : context.store.filteredSort === "high" ? ((a, b) => b.variants[0].price - a.variants[0].price)
                        : context.store.filteredSort === "Z-A" ? ((a, b) => b.title.localeCompare(a.title))
                          : context.store.filteredSort === "A-Z" ? ((a, b) => a.title.localeCompare(b.title)) : null
                ).map((p, i) => {
              let product = p;

              return (
                <div className="reg-collection">
                  <CollectionProductBox product={product} />
                </div>
              );
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
