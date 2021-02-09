import React, { useContext } from "react";
import { Link } from "gatsby"; /* eslint-disable */
import StoreContext from "../../context/store";
import "./cartSection.sass";

const CartSection = ({ data, quantity, cartState }) => {
  const context = useContext(StoreContext);
  //Data is allShopifyProduct
  console.log("Cart Context", context.store.checkout);
  let line = context.store.checkout.lineItems;
  let check = context.store.checkout;

  const firstTwoCart = () => {
    if (line.length == 0) {
      return <div>No Products In Cart</div>;
    } else if (line.length == 1) {
      return (
        <>
          <div className="cart-product-box">
            <img
              src={`${line[0]?.variant.image.src}`}
              className="cart-img"
            ></img>
            <div>Title: {line[0]?.title}</div>
            <div className="small-text margin-left">
              Qty: {line[0]?.quantity}
            </div>
            <div className="small-text float-right">
              Price Per: ${line[0]?.variant.price}
            </div>
            <div>Subtotal: ${line[0]?.variant.price * line[0]?.quantity}</div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="cart-product-box">
            <img
              src={`${line[line.length - 1]?.variant.image.src}`}
              className="cart-img"
            ></img>
            <div className="inner-cart-box">
              <div className="small-text margin-left">
                Qty: {line[line.length - 1]?.quantity}
              </div>
              <div className="cart-product-title">
                {line[line.length - 1]?.title}
              </div>
            </div>
            <div>
              <div className="small-text float-right">
                ${line[line.length - 1]?.variant.price}
              </div>
              <div>
                $
                {line[line.length - 1]?.variant.price *
                  line[line.length - 1]?.quantity}
              </div>
            </div>
          </div>
          <div className="cart-product-box">
            <img
              src={`${line[line.length - 2]?.variant.image.src}`}
              className="cart-img"
            ></img>
            <div className="inner-cart-box">
              <div className="small-text margin-left">
                Qty: {line[line.length - 2]?.quantity}
              </div>
              <div className="cart-product-title">
                {line[line.length - 2]?.title}
              </div>
            </div>
            <div>
              <div className="small-text float-right">
                ${line[line.length - 2]?.variant.price}
              </div>
              <div>
                $
                {line[line.length - 2]?.variant.price *
                  line[line.length - 2]?.quantity}
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className="cart-section" style={{ margin: "0" }}>
      <div className="small-text margin-left">Recently Added</div>
      <div>{firstTwoCart()}</div>
      <div className="cart-bottom">
        <div>
          <span className="small-text">Total Items </span>
          <span>{quantity}</span>
        </div>
        <div>
          <span className="small-text">Subtotal </span>
          <span>${check?.subtotalPrice}</span>
        </div>
        <Link to="/cart" onClick={() => cartState("")} className="cart-button">
          View Cart
        </Link>{" "}
        <Link to={check.webUrl} className="cart-button">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartSection;
