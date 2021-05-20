import React, { useContext, useState, useEffect } from "react";
import StoreContext from "../../context/store";

const Product = ({ line_item }) => {
  const [quantity, setQuantity] = useState(line_item?.quantity);
  const context = useContext(StoreContext);
  const checkoutID = context.store.checkout.id;
  const imageItem = line_item.variant.image && (
    <figure className="image is-96x96" style={{ margin: "auto" }}>
      <img
        src={line_item?.variant?.image?.src}
        alt={line_item?.variant?.image?.altText}
      />
    </figure>
  );

  useEffect((line_item) => {
    if(line_item){
      setQuantity(line_item.quantity);
    }
    
  }, [line_item]);
  const handleMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const handlePlus = () => {
    setQuantity(quantity + 1);
  };
  const removeItem = () => {
    context.removeLineItem(checkoutID, line_item?.id);
  };
  const updateItem = () => {
    if (quantity === 0) {
      removeItem();
    } else {
      context.updateLineItem(
        context?.store?.client,
        checkoutID,
        line_item?.id,
        quantity
      );
    }
  };

  return (
    <>
      <div className="cart-product-wrapper">
        <div className="cart-product-half-1">
          <div className="cart-product-image">{imageItem}</div>
          <div className="cart-product-title-section">
            <p className="cart-page-product-title">{line_item?.title}</p>
            <p className="cart-page-product-subtitle">
              {line_item?.variant?.title !== "Default Title" &&
                line_item?.variant?.title}
            </p>
            <button
              className="has-text-weight-normal has-text-danger link-button reg-remove"
              type="button"
              onClick={removeItem}
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
            <span className="cart-product-column-title">Unit Price</span>
            <span className="cart-product-column-value">
              ${line_item.variant.price}
            </span>
          </div>
          <div className="unit-price reg-remove">
            <span className="cart-product-column-title">Quantity</span>
            <div className="product-quantity">
              <button onClick={() => handleMinus()} className="quantity-button">
                -
              </button>
              <div className="quantity-value">{quantity}</div>
              <button onClick={() => handlePlus()} className="quantity-button">
                +
              </button>
            </div>
          </div>
          <div
            style={{ verticalAlign: "inherit" }}
            className="unit-price reg-remove"
          >
            <span className="cart-product-column-title">Total</span>
            <span className="cart-product-column-value">
              {`$${(line_item.quantity * line_item.variant.price).toFixed(2)}`}
            </span>
          </div>
          <div className="mobile-remove mobile-cart-info">
            <div className="unit-price">
              <span className="cart-product-column-title">Quantity</span>
              <div className="product-quantity">
                <button
                  onClick={() => handleMinus()}
                  className="quantity-button"
                >
                  -
                </button>
                <div className="quantity-value">{quantity}</div>
                <button
                  onClick={() => handlePlus()}
                  className="quantity-button"
                >
                  +
                </button>
              </div>
            </div>
            <div style={{ verticalAlign: "inherit" }} className="unit-price">
              <span className="cart-product-column-title">Total</span>
              <span className="cart-product-column-value">
                {`$${(line_item.quantity * line_item.variant.price).toFixed(
                  2
                )}`}
              </span>
            </div>
          </div>
          <button
            className="button checkout-button reg-remove"
            type="button"
            onClick={updateItem}
          >
            Update
          </button>
          <div className="mobile-cart-buttons mobile-cart-info">
            <button
              className="button checkout-button"
              type="button"
              onClick={updateItem}
            >
              Update
            </button>
            <button
              className="mobile-remove button account-button4 mobile-cart-info"
              type="button"
              onClick={removeItem}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      {/*
            <div className="is-hidden-desktop">
                <div className="columns is-mobile is-vcentered">
                    <div className="column">
                        {imageItem}
                    </div>
                    <div className="column">
                        <p className="has-text-weight-semibold is-size-5 has-text-black">{line_item.title}</p>
                        <p className="has-text-weight-normal has-text-black">{line_item.variant.title}</p>
                        <button className="has-text-weight-normal has-text-danger link-button" type="button" onClick={removeItem}>Remove</button>
                        <button className="has-text-weight-normal has-text-danger link-button" type="button" onClick={updateItem}>Update</button>
                    </div>
                </div>
            </div>
            */}
    </>
  );
};

export default Product;
