import React, {
  useContext,
  useState,
  useEffect,
} from "react"; /* eslint-disable */
import SEO from "../components/seo";
import { graphql } from "gatsby";
import ProductInfo from "../components/ProductPage/ProductInfo";
import StoreContext from "../context/store";
import VariantSelectors from "../components/ProductPage/VariantSelectors";
import QuantityButton from "../components/ProductPage/QuantityButton";
import Buttons from "../components/ProductPage/Buttons";
import Gallery from "../components/ProductPage/Gallery";
import { Flex, Box } from "rebass";
import BoomerSilver from "../images/boomersilver.webp";
import BoomerNaturals from "../images/boomernaturals.webp";
import ProductList from "../components/productList";
import Bnad1 from "../images/bnad1.webp"
import Bnad2 from "../images/bnad2.webp"
import "../components/HomeItems/featuredSection.sass";
import "./productPage.sass";

const productPage = ({ data }) => {
  const context = useContext(StoreContext);
  const product = data.shopifyProduct;
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState(product.variants[0]);
  const [chosen, setChosen] = useState(product.variants[0]);
  const productVariant =
    context.store.client.product.helpers.variantForOptions(product, variant) ||
    variant;
  const [available, setAvailable] = useState(productVariant.availableForSale);
  useEffect(() => {
    let defaultOptionValues = {};
    product.options.forEach((selector) => {
      defaultOptionValues[selector.name] = selector.values[0];
    });
    setVariant(defaultOptionValues);
  }, []);

  useEffect(() => {
    checkAvailability(product.shopifyId);
  }, [productVariant]);

  const checkAvailability = (productId) => {
    context.store.client.product.fetch(productId).then((product) => {
      // this checks the currently selected variant for availability
      const result = product?.variants?.filter(
        (variant) => variant.id === productVariant.shopifyId
      );
      setAvailable(result[0].available);
    });
  };

  const handleOptionChange = (event) => {
    const { target } = event;
    setVariant((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
    let x = 0;
    product.variants.map((variant1) => {
      x = 0;
      variant1.selectedOptions.map((option) => {
        if (option.name == target.name) {
          if (option.value == target.value) {
            x++;
          }
        }
        if (option.name != target.name) {
          if (option.value == variant[`${option.name}`]) {
            x++;
          }
        }
        if (x == 2) {
          setChosen(variant1);
        }
      });
    });
  };
  return (
    <>
      <SEO title={product.title} />
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body" style={{ display: "block" }}>
          <div className="container">
            <div className="top-product">
              <Flex
                flexDirection={["column", null, "row"]}
                pt={3}
                px={4}
                className="product-box-area"
              >
                <Gallery product={product} chosen={chosen} />

                <Box
                  flexDirection="column"
                  width={[1, null, 2.5 / 5]}
                  px={2}
                  data-product-info
                  order={3}
                  className="product-info-area"
                >
                  <div className="product-brand-logo">
                    {product?.vendor == "Boomer Silver" && (
                      <>
                        <img
                          src={BoomerSilver}
                          className="brand-logo-max fade-in"
                        ></img>
                      </>
                    )}
                    {product?.vendor == "Boomer Naturals" && (
                      <>
                        <img
                          src={BoomerNaturals}
                          className="brand-logo-max fade-in"
                        ></img>
                      </>
                    )}
                    <ProductInfo product={product} />
                    <div
                      key={`body`}
                      id="content"
                      className="content EReg lAlign fade-in3"
                      dangerouslySetInnerHTML={{
                        __html: product.descriptionHtml,
                      }}
                    />

                    <hr className="no-mobile" />
                  </div>
                </Box>
              </Flex>
            </div>
            <div className="product-selector">
              {variant[`Title`] != "Default Title" &&
                product.options.map((options) => (
                  <div className="column">
                    <VariantSelectors
                      key={options.id.toString()}
                      onChange={handleOptionChange}
                      options={options}
                    />
                  </div>
                ))}

              <div className="column q-row">
                <QuantityButton product={chosen} quantity={quantity} setQuantity={setQuantity} />
                <div className="price-div">
                  <label className="label">Price</label>
                  <p
                    className="is-size-4 has-text-grey-dark"
                    style={{ textAlign: "left" }}
                  >
                    ${chosen.price}
                  </p>
                </div>
              </div>
              <Buttons
                context={context}
                available={available}
                quantity={quantity}
                productVariant={productVariant}
              />
            </div>
          </div>
          <div className="product-page-section2">
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
              <div className="product-desc-img1" style={{backgroundImage: `url(${Bnad1})`,}}></div>
              <div className="product-desc-box1">
                <p style={{fontSize: "2rem", textAlign: "center"}}>About Boomer Naturals</p>
                <p className="EReg">Boomer Naturals™ is a full-service wellness company committed to providing holistic solutions to improve your life and promote overall health. We offer a wide spectrum of naturally-derived wellness products to improve sleep, energy, and emotional well-being. Among our team are mindful wellness practitioners on a mission to help you live the healthiest life possible. </p>
                </div>
            </div>
            <div style={{display: "flex", flexDirection: "row", padding: "25px 50px 0 50px", justifyContent: "space-evenly", alignItems: "center"}}>
              <div className="product-desc-img2" style={{backgroundImage: `url(${Bnad2})`, width: "435px", height: "560px"}}></div>
              <div style={{width: "550px", color: "white", display: "flex", flexDirection: "column"}}>
                <p style={{fontSize: "2rem", textAlign: "flex-start", padding: "15px 0"}}>We're Here For You</p>
                <p className="EReg">We aim to become an integral part of our local community and build long-lasting relationships with our customers. At Boomer Naturals, we look forward to being a part of and supporting your wellness journey. </p>
                <p className="EReg" style={{padding: "15px 0"}}>Our vision providing a one-stop-shop for all of your wellness needs. We have sought out the best practitioners, ingredients, and sources to provide you with trustworthy products that will support your lifestyle. We back that up with a 60-Day money-back guarantee on all our products no questions asked. This offer excludes all face coverings and PPE for sanitary purposes. </p>
              </div>
            </div>
          </div>
          <div className="product-page-section3">
            <div className="featured-content2">
              <div className="f-row-top2">
                <span className="f-top-title2">Offers Of The Day</span>
                <button className="f-button2">See More</button>
              </div>
              <div className="f-row-p">
                {/*offers 1 collection */}
                <ProductList data={data} total={6} top={true} give={true} />
              </div>
              <div className="f-row-p">
                {/*offers 2 collection */}
                <ProductList data={data} total={6} top={true} give={true} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default productPage; 

export const query = graphql`
  query($id: String!) {
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
            availableForSale
            quantityAvailable
          }
        }
      }
    }
    shopifyProduct(handle: { eq: $id }) {
      handle
      id
      title
      handle
      productType
      descriptionHtml
      shopifyId
      vendor
      options {
        id
        name
        values
      }
      variants {
        id
        title
        availableForSale
        quantityAvailable
        image {
          originalSrc
        }
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
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
    }
  }
`;
