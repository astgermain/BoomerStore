import React, { useState, useContext } from "react";
import Product from "./Product.js";
import StoreContext from "../../context/store";
import sold from "../../images/sold-out-image.webp";
import "./cart.sass";

const Products = ({ checkout }) => {
  const context = useContext(StoreContext);
  const [discountCode, setDiscountCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const checkoutID = context.store.checkout.id;
  let priceCheck = false
  const removeItem = (value) => {
    context.removeLineItem(checkoutID, value);
  };
  const addDiscount = () => {
    // Add a discount code to the checkout
    let message = context.addDiscount(discountCode);
    setInputTitle(true)
    console.log(checkout?.discountApplications)
  };

  const removeDiscount = () => {
    setInputTitle(false)
    let removeMessage = context.removeDiscount();
  }
  let priceFormat = (price) => parseFloat(price).toFixed(2);

  return (
    <div>
      <h1 className="title has-text-centered">Your Shopping Cart</h1>
      <div className="cart-products-wrapper">
        {checkout.lineItems.map((line_item) => {
          if (line_item.variant == null) {
            priceCheck = true
            return (
              <div className="cart-product-wrapper">
                <div className="cart-product-half-1">
                  <div className="cart-product-image">
                    <figure
                      className="image is-96x96"
                      style={{ margin: "auto" }}
                    >
                      <img src={sold} alt="sold-out" />
                    </figure>
                  </div>
                  <div className="cart-product-title-section">
                    <p className="cart-page-product-title">{line_item.title}</p>
                    <button
                      className="has-text-weight-normal has-text-danger link-button reg-remove"
                      type="button"
                      onClick={() => removeItem(line_item.id)}
                    >
                      Remove Item
                    </button>
                  </div>
                </div>
                <div className="cart-product-half-1">
                  <div
                    style={{ verticalAlign: "inherit" }}
                    className="unit-price reg-remove"
                  >
                    <span className="cart-product-column-value">This item has sold out or is unavailable</span>
                    <span className="cart-product-column-title">
                      You can proceed to checkout still
                    </span>
                  </div>
                  <div className="unit-price reg-remove"></div>
                  <div
                    style={{ verticalAlign: "inherit" }}
                    className="unit-price reg-remove"
                  ></div>
                  <div className="mobile-remove mobile-cart-info">
                    <div
                      style={{ verticalAlign: "inherit" }}
                      className="unit-price"
                    >This Product Has Sold Out Or Is Unavailable</div>
                  </div>

                  <div className="mobile-cart-buttons mobile-cart-info">
                    <button
                      className="mobile-remove button account-button4 mobile-cart-info"
                      type="button"
                      onClick={() => removeItem(line_item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <Product key={line_item.id.toString()} line_item={line_item} />
            );
          }
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
          {checkout?.discountApplications[0]?.code && 
          <>
          <p>Current Discount Code: {checkout?.discountApplications[0]?.code}</p>
          <button className="button checkout-button" onClick={() => removeDiscount()}>Click here to remove discount</button>
          </>
          }
          <div className="redeem-section">
            <input
              type="text"
              placeholder="Enter Code"
              name="discount"
              autoComplete="off"
              onChange={(e) => {
                setDiscountCode(e.target.value)
              }}
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
          {priceCheck ? 
          <>
            <div className="order-spacing">
            <span>Subtotal</span>
            <span>
            Calculated at Checkout
            </span>
          </div>
          <div className="order-spacing">
            <span>Shipping</span>
            <span>
            Calculated at Checkout
            </span>
          </div>
          <div className="order-spacing">
            <span>Sales Tax</span>
            <span>Calculated at Checkout</span>
          </div>
          <div className="order-spacing">
            <span>Discount</span>
            <span>
              Calculated at Checkout
            </span>
          </div>
          <div className="order-spacing estimated-title">
            <span>Estimated Total</span>
            <span>Calculated at Checkout</span>
          </div>
          </>
          :
          <>
          <div className="order-spacing">
            <span>Subtotal</span>
            <span>
              ${priceFormat(checkout?.lineItemsSubtotalPrice?.amount)}
            </span>
          </div>
          <div className="order-spacing">
            <span>Shipping</span>
            <span>
              {checkout?.shippingLine != null ? (
                <> ${priceFormat(checkout?.shippingLine?.price)} </>
              ) : (
                <>Free</>
              )}
            </span>
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
                checkout?.discountApplications[0]?.allocationMethod != "EACH" &&
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
              {checkout?.discountApplications[0]?.value?.percentage &&
              checkout?.discountApplications[0]?.allocationMethod == "EACH" &&
                checkout?.discountApplications[0]?.targetType !=
                  "SHIPPING_LINE" && (
                  <>
                    Calculated at checkout
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
          </>
    }
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
