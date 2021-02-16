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
import BoomerSilver from "../images/boomersilver.png";
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
      const result = product.variants.filter(
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
              <div className="product-pagination">Paginations Here</div>
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
                    {product.productType == "Boomer Silver" && (
                      <>
                        <img
                          src={BoomerSilver}
                          style={{ maxWidth: "400px" }}
                        ></img>
                      </>
                    )}
                    <ProductInfo product={product} />
                    <br></br>
                    <div
                      key={`body`}
                      id="content"
                      className="content EReg lAlign"
                      dangerouslySetInnerHTML={{
                        __html: product.descriptionHtml,
                      }}
                    />

                    <hr />
                  </div>
                </Box>
              </Flex>
            </div>
            <div className="product-selector">
              {variant[`Title`] != "Default Title" && (product.options.map((options) => (
                <div className="column">
                  <VariantSelectors
                    key={options.id.toString()}
                    onChange={handleOptionChange}
                    options={options}
                  />
                </div>
              )))}
              <div className="column is-3">
                <QuantityButton quantity={quantity} setQuantity={setQuantity} />
              </div>
              <div className="column">
              <label className="label">Price</label>
                <p
                  className="is-size-4 has-text-grey-dark"
                  style={{ textAlign: "left" }}
                >
                  ${chosen.price}
                </p>
              </div>
              <Buttons
                context={context}
                available={available}
                quantity={quantity}
                productVariant={productVariant}
              />
            </div>
          </div>
          <div className="product-page-section2">2</div>
          <div className="product-page-section3">3</div>
          <div className="product-page-section4">4</div>
          <div className="product-page-section5">5</div>
         
        </div>
      </section>
    </>
  );
};

export default productPage;

export const query = graphql`
  query($id: String!) {
    shopifyProduct(handle: { eq: $id }) {
      handle
      id
      title
      handle
      productType
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
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
