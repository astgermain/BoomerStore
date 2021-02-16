import React, { useState, useContext } from "react";
import Product from "./Product.js";
import StoreContext from "../../context/store";
import "./cart.sass";

const Products = ({ checkout }) => {
  const context = useContext(StoreContext);
  const [discountCode, setDiscountCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const addDiscount = () => {
    // Add a discount code to the checkout
    let message = context.addDiscount(discountCode);
  };
  let priceFormat = (price) => parseFloat(price).toFixed(2);

  return (
    <div>
      <h1 className="title has-text-centered">Your Shopping Cart</h1>
      <div className="cart-products-wrapper">
        {checkout.lineItems.map((line_item) => {
          return (
            <Product key={line_item.id.toString()} line_item={line_item} />
          );
        })}
      </div>
      {errorMessage != "" && (
        <div>
          <span>{errorMessage}</span>
        </div>
      )}
      <div className="bottom-cart">
        <div className="discount-section">
          <h1 className="redeem-title">Discount Code</h1>
          <div className="redeem-section">
            <input
              type="text"
              placeholder="Enter Code"
              name="discount"
              autoComplete="off"
              onChange={(e) => setDiscountCode(e.target.value)}
              className="product-input"
            ></input>
            <button
              onClick={() => addDiscount()}
              className="button product-input-button"
            >
              Redeem
            </button>
          </div>
        </div>
        <div className="order-summary-section">
          <h1 className="order-spacing-title">Order Section</h1>
          <div className="order-spacing">
            <span>Subtotal</span>
            <span>
              ${priceFormat(checkout?.lineItemsSubtotalPrice?.amount)}
            </span>
          </div>
          <div className="order-spacing">
            <span>Shipping</span>
            <span>{checkout?.shippingLine != null ? <> ${priceFormat(checkout?.shippingLine?.price)} </> : <>Free</>}</span>
          </div>
          <div className="order-spacing">
            <span>Sales Tax</span>
            <span>${priceFormat(checkout?.totalTax)}</span>
          </div>
          <div className="order-spacing">
            <span>Discount</span>
            <span>
              {checkout?.discountApplications[0]?.value?.percentage &&
                checkout?.discountApplications[0]?.targetType ==
                  "SHIPPING_LINE" && (
                  <>
                    $
                    {priceFormat(
                      (checkout?.shippingLine?.price *
                        checkout?.discountApplications[0]?.value?.percentage) /
                        100
                    )}
                  </>
                )}
              {checkout?.discountApplications[0]?.value?.percentage &&
                checkout?.discountApplications[0]?.targetType !=
                  "SHIPPING_LINE" && (
                  <>
                    $
                    {priceFormat(
                      (checkout?.lineItemsSubtotalPrice?.amount *
                        checkout?.discountApplications[0]?.value?.percentage) /
                        100
                    )}
                  </>
                )}
              {checkout?.discountApplications[0]?.value?.amount && (
                <>
                  $
                  {priceFormat(
                    checkout?.discountApplications[0]?.value?.amount
                  )}
                </>
              )}
              {checkout?.discountApplications.length == 0 && <>$0.00</>}
            </span>
          </div>
          <div className="order-spacing estimated-title">
            <span>Estimated Total</span>
            <span>${priceFormat(checkout.totalPrice)}</span>
          </div>
          {console.log({ checkout })}
        </div>
      </div>
      <div className="has-text-right checkout-button-check">
        <br />
        <a className="button checkout-button" href={checkout.webUrl}>
          Checkout
        </a>
      </div>
    </div>
  );
};

export default Products;
