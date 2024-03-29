import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import { navigate } from "gatsby";

const Buttons = ({ context, available, productVariant, quantity, product }) => {
  const [added, setAdded] = useState(false);
  useEffect(() => {}, [added]);
  const handleAddToCart = () => {
    context.addVariantToCart(productVariant.shopifyId, quantity);
    setAdded(true);
  };

  const handleAddToCart_BuyNow = () => {
    context.addVariantToCart(productVariant.shopifyId, quantity);
    navigate("/cart");
    setAdded(true);
  };
  return (
    <>
      {added && (
        <Helmet>
          {/*
        <!-- ADD TO CART -->
        <!-- Run this script when someone has added a product to their cart -->
        */}
          <script>
            {`
        dataLayer.push({
        'event': 'addToCart',
        'ecommerce': {
            'currencyCode': 'USD',
            'add': {                                // 'add' actionFieldObject measures.
            'products': [{                        //  adding a product to a shopping cart.
                'name': '${product?.title}',
                'id': '${productVariant?.shopifyId}',
                'price': '${productVariant?.price}',
                'brand': '${product?.vendor}',
                'category': '${product?.productType}',
                'variant': '${productVariant?.title}',
                'quantity': ${quantity}
            }]
            }
        }
        });
        `}
          </script>
        </Helmet>
      ) 
      }
      <div className="columns" style={{ margin: "auto" }}>
        <div className="column mobile-min">
          <button
            className="EBold product-buttons button is-medium is-fullwidth"
            disabled={!available}
            onClick={() => handleAddToCart()}
          >
            {available ? <>Add To Cart</> : <>Sold Out</>}
          </button>
        </div>
        <div className="column mobile-min">
          <button
            className="EBold product-buttons gold button is-dark is-medium is-fullwidth"
            disabled={!available}
            onClick={() => handleAddToCart_BuyNow()}
          >
            {available ? <>Buy It Now</> : <>Sold Out</>}
          </button>
        </div>
      </div>
    </>
  );
};

export default Buttons;
