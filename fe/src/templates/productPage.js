import React, {
  useContext,
  useState,
  useEffect,
} from "react"; /* eslint-disable */
import SEO from "../components/seo";
import Helmet from "react-helmet";
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
import BoomerSupplements from "../images/boomersupplements.webp";
import BoomerElectronics from "../images/boomerelectronics.webp";
import ProductList from "../components/productList";
import BNaturals from "../components/ProductPage/Section2/BNaturals";
import BSilver from "../components/ProductPage/Section2/BSilver";
import BElectronics from "../components/ProductPage/Section2/BElectronics";
import BSupplement from "../components/ProductPage/Section2/BSupplement";
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
  let defaultOptionValues = {};
  useEffect(() => {
    checkAvailability(product.shopifyId);
    product.options.forEach((selector) => {
      defaultOptionValues[selector.name] = selector.values[0];
    });
    setVariant(defaultOptionValues);
    let a = apiCall(query).then((response) => {
      response?.data?.products?.edges[0]?.node?.variants?.edges?.map(
        (variant) => {
          if (variant?.node?.id == productVariant?.shopifyId) {
            if (variant.node.quantityAvailable > 0) {
              setAvailable(true);
            }
          }
        }
      );
    });
  }, [productVariant]);

  const checkAvailability = (productId) => {
    context.store.client.product.fetch(productId).then((product) => {
      // this checks the currently selected variant for availability

      const result = product?.variants?.filter(
        (variant) => variant.id === chosen?.shopifyId
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
    product.variants.map((variant1, vindex) => {
      x = 0;
      variant1.selectedOptions.map((option) => {
        
        if (option.name == target.name) {
          if (option.value == target?.options[target?.options?.selectedIndex]?.value) {
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
  const query = `{
    products(first: 5, query:"title:${product.title}") {
      edges{
        node{
          id
          handle
          variants(first:100) {
            edges {
              node {
                title
                quantityAvailable
                id
              }
            }
          }
        }
      }
    }
  }`;

  function apiCall(query) {
    return fetch(
      "https://boomerstorebrand.myshopify.com/api/2020-10/graphql.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/graphql",
          "X-Shopify-Storefront-Access-Token":
            "16772eb20007c9362f7d0cfd46a79211",
        },
        body: query,
      }
    )
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log("Product Fetch Error: ", error);
      });
  }

  return (
    <>
      <SEO title={product.title} />
      <Helmet>
        {/*
      <!-- PRODUCT VIEW -->
<!-- Run this script when someone views a product on the website, AFTER the <head> GTM code has fired -->
        */}
        <script>
          {/*
// Measure a view of product details. This example assumes the detail view occurs on pageload,
// and also tracks a standard pageview of the details page.
  */}
          {`
          dataLayer.push({
            'ecommerce': {
              'detail': {
                'actionField': {'list': 'Apparel Gallery'},    // 'detail' actions have an optional list property.
                'products': [{
                  'name': '${product?.title}',         // Name or ID is required.
                  'id': '${product?.shopifyId}',
                  'price': 'Max: ${product?.priceRange?.maxVariantPrice?.amount} or Min: ${product?.priceRange?.minVariantPrice?.amount}',
                  'brand': '${product?.vendor}',
                  'category': '${product?.productType}',
                  'variant': 'Showing Entire Product'
                }]
              }
            }
          });
          `}
        </script>
      </Helmet>
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
                    {product?.vendor == "Boomer Supplements" && (
                      <>
                        <img
                          src={BoomerSupplements}
                          className="brand-logo-max fade-in"
                        ></img>
                      </>
                    )}
                    {product?.vendor == "Boomer Electronics" && (
                      <>
                        <img
                          src={BoomerElectronics}
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

              <div className="column q-row" style={{ display: "flex" }}>
                <QuantityButton
                  product={chosen}
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
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
                productVariant={chosen}
                product={product}
              />
            </div>
          </div>

          {product?.vendor == "Boomer Silver" && <BSilver />}
          {product?.vendor == "Boomer Naturals" && <BNaturals />}
          {product?.vendor == "Boomer Electronics" && <BElectronics />}
          {product?.vendor == "Boomer Supplements" && <BSupplement />}

          <div className="product-page-section3">
            <div className="featured-content2">
              <div className="f-row-top2">
                <span className="f-top-title2">Offers Of The Day</span>
              </div>
              <div className="f-row-p">
                {/*offers 1 collection */}
                <ProductList data={data} total={12} top={true} give={true} />
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
      priceRange {
        maxVariantPrice {
          amount
        }
      }
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
