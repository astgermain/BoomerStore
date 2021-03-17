import React, { useContext } from "react";
import { Link } from "gatsby"; /* eslint-disable */
import StoreContext from "../../context/store";
import sold from "../../images/sold-out-image.webp";
import "./cartSection.sass";

const CartSection = ({ data, quantity, cartState }) => {
  const context = useContext(StoreContext);
  //Data is allShopifyProduct
  let line = context.store.checkout.lineItems;
  let check = context.store.checkout;
  const checkoutID = context.store.checkout.id;
  let priceFormat = (price) => parseFloat(price).toFixed(2);
  let priceCheck = false;
  const removeItem = (value) => {
    context.removeLineItem(checkoutID, value);
  };
  line.map((l) => {
    if (l.variant == null) {
      priceCheck = true;
    }
  });
  //
  //
  //
  //NEEDS IMAGE FOR SOLD OUT
  //
  //
  //
  let soldOut = (num) => {
    return (
      <>
        <div className="cart-product-box">
          <img src={sold} className="cart-img"></img>
          <div className="inner-cart-box">
            <div className="small-text margin-left">
              This item is sold out/not available
            </div>
            <div className="cart-product-title">{line[num]?.title}</div>
          </div>
          <div></div>
        </div>
      </>
    );
  };
  const firstTwoCart = () => {
    if (line.length == 0) {
      return <div style={{ padding: "25px 0" }}>No Products In Cart</div>;
    } else if (line.length == 1) {
      return (
        <>
          {line[0].variant == null ? (
            soldOut(0)
          ) : (
            <div className="cart-product-box">
              <img
                src={`${line[0]?.variant?.image?.src}`}
                className="cart-img"
              ></img>
              <div className="inner-cart-box">
                <div className="small-text margin-left">
                  Qty: {line[0]?.quantity}
                </div>
                <div className="cart-product-title">{line[0]?.title}</div>
                <span
                  style={{
                    fontSize: "12px",
                    marginLeft: "10px",
                    color: "#3c3c3c",
                    fontFamily: "'EinaReg', sans-serif, Arial",
                  }}
                >
                  {line[0]?.variant?.title}
                </span>
                <button
                  className="has-text-weight-normal has-text-danger link-button reg-remove"
                  type="button"
                  onClick={() => removeItem(line[0].id)}
                  style={{ marginLeft: "10px" }}
                >
                  Remove Item
                </button>
              </div>
              <div>
                <div className="small-text float-right">
                  ${line[0]?.variant?.price}
                </div>
                <div>
                  ${priceFormat(line[0]?.variant?.price * line[0]?.quantity)}
                </div>
              </div>
            </div>
          )}
        </>
      );
    } else {
      return (
        <>
          {line[line.length - 2].variant == null ? (
            soldOut(line.length - 2)
          ) : (
            <div className="cart-product-box">
              <img
                src={`${line[line.length - 2]?.variant?.image?.src}`}
                className="cart-img"
              ></img>
              <div className="inner-cart-box">
                <div className="small-text margin-left">
                  Qty: {line[line.length - 2]?.quantity}
                </div>
                <div className="cart-product-title">
                  {line[line.length - 2]?.title}
                </div>
                <span
                  style={{
                    fontSize: "12px",
                    marginLeft: "10px",
                    color: "#3c3c3c",
                    fontFamily: "'EinaReg', sans-serif, Arial",
                  }}
                >
                  {line[line.length - 2]?.variant?.title}
                </span>
                <button
                  className="has-text-weight-normal has-text-danger link-button reg-remove"
                  type="button"
                  onClick={() => removeItem(line[line.length - 2].id)}
                  style={{ marginLeft: "10px" }}
                >
                  Remove Item
                </button>
              </div>
              <div>
                <div className="small-text float-right">
                  ${line[line.length - 2]?.variant?.price}
                </div>
                <div>
                  $
                  {priceFormat(
                    line[line.length - 2]?.variant?.price *
                      line[line.length - 2]?.quantity
                  )}
                </div>
              </div>
            </div>
          )}
          {line[line.length - 1].variant == null ? (
            soldOut(line.length - 1)
          ) : (
            <div className="cart-product-box">
              <img
                src={`${line[line.length - 1]?.variant?.image?.src}`}
                className="cart-img"
              ></img>
              <div className="inner-cart-box">
                <div className="small-text margin-left">
                  Qty: {line[line.length - 1]?.quantity}
                </div>
                <div className="cart-product-title">
                  {line[line.length - 1]?.title}
                </div>
                <span
                  style={{
                    fontSize: "12px",
                    marginLeft: "10px",
                    color: "#3c3c3c",
                    fontFamily: "'EinaReg', sans-serif, Arial",
                  }}
                >
                  {line[line.length - 1]?.variant?.title}
                </span>
                <button
                  className="has-text-weight-normal has-text-danger link-button reg-remove"
                  type="button"
                  onClick={() => removeItem(line[line.length - 1].id)}
                  style={{ marginLeft: "10px" }}
                >
                  Remove Item
                </button>
              </div>
              <div>
                <div className="small-text float-right">
                  ${line[line.length - 1]?.variant?.price}
                </div>
                <div>
                  $
                  {priceFormat(
                    line[line.length - 1]?.variant?.price *
                      line[line.length - 1]?.quantity
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      );
    }
  };

  return (
    <div className="cart-section" style={{ margin: "0" }}>
      <div
        style={{
          width: "100%",
          paddingRight: "25px",
          paddingLeft: "25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontSize: "24px" }}>Shopping Cart</span>
        <div>
          <span className="EBold small-text">{quantity} Items</span>
        </div>
      </div>
      <div>{firstTwoCart()}</div>
      <div className="cart-bottom">
        <div
          style={{
            display: "flex",
            width: "100%",
            marginBottom: "5px",
            alignItems: "center",
          }}
        >
          <div style={{ width: "100%" }}>
            <span className="EBold small-text">Subtotal: </span>
            {priceCheck ? (
              <span>Recalculated At Checkout</span>
            ) : (
              <span>${check?.subtotalPrice}</span>
            )}
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Link
              to="/cart"
              onClick={() => cartState("")}
              className="cart-button"
              style={{ marginRight: "15px" }}
            >
              View Cart
            </Link>{" "}
            {line.length == 0 ? (
              <button disabled className="cart-button2">
                Checkout
                </button>
            ) : (
              <Link to={check.webUrl} className="cart-button">
                Checkout
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSection;
