import React, { useState } from "react";
import "./shipping.sass";

const Shipping = () => {
  return (
    <div className="shipping-wrapper">
      <div className="shipping-page">
        <p style={{ fontSize: "2.5em", color: "black" }}>Shipping Policy</p>

        <p className="shipping-topic">
          Please allow 7-10 business days for shipping. We appreciate your
          business, and we fulfill and ship orders as quickly as we can. Please
          be patient and know that we strive to ship your order in a timely
          manner. Please feel free to contact us to check on your order.{" "}
        </p>

        <p className="shipping-topic">
          <p style={{fontSize: "1.5rem"}}>Contact Us:</p>
          <p>For questions about an order, information about our
          privacy practices, or if you have a concern or complaint, please
          contact us by email at info@boomerstore.com or by phone (702)
          960-4843, or by mail at the following: </p>
          <p>
          Boomer Naturals 8670 W Cheyenne
          Ave #120, Las Vegas, NV 89129, United States (702) 960-4843
          </p>
        </p>
      </div>
    </div>
  );
};

export default Shipping;
