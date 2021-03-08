import React from 'react';
import noprod from "../../images/no-products.png"
import './cart.sass'

const Empty = () => {
    return (
        <div className="has-text-centered no-cart">
            <div className="shopping-half">
                <img src={noprod}></img>
            </div>
            <div className="shopping-half">
                <p className="is-size-3">Your cart is empty.</p>
                <p className="is-size-3">We can fix that.</p>
                <a className="button account-button" style={{ marginTop: "50px" }} href="/">Shop → </a>
            </div>
            
        </div>
    );
};

export default Empty;