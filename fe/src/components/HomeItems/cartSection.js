import React, { useContext } from "react";
import StoreContext from "../../context/store";
import "./cartSection.sass";

const CartSection = ({ data }) => {
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
              src={`${line[0].variant.image.src}`}
              className="cart-img"
            ></img>
            <div>Title: {line[0].title}</div>
            <div>Quantity: {line[0].quantity}</div>
            <div>Price Per: ${line[0].variant.price}</div>
            <div>Subtotal: ${check.subtotalPrice}</div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="cart-product-box">
          <img
              src={`${line[0]?.variant.image.src}`}
              className="cart-img"
            ></img>
            <div>
              <div>Qty: {line[0]?.quantity}</div>
              <div className="cart-product-title">{line[0]?.title}</div>
            </div>
            <div>
              <div>${line[0]?.variant.price}</div>
              <div>${check.subtotalPrice}</div>
            </div>
          </div>
          <div className="cart-product-box">
            <img
              src={`${line[1]?.variant.image.src}`}
              className="cart-img"
            ></img>
            <div>
              <div>Qty: {line[1]?.quantity}</div>
              <div className="cart-product-title">{line[1]?.title}</div>
            </div>
            <div>
              <div>${line[1]?.variant.price}</div>
              <div>${check.subtotalPrice}</div>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className="cart-section" style={{ margin: "0" }}>
      <div>{firstTwoCart()}</div>
      <div>Buttons and Totals</div>
    </div>
  );
};

export default CartSection;
