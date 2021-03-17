import React, { useState } from "react";
import "./refund.sass";

const Refund = () => {
  return (
    <div className="refund-wrapper">
      <div className="refund-page">
        <p style={{ fontSize: "2.5em", color: "black" }}>
          Refund Policy
        </p>

        <p className="refund-topic">At Boomer Store, we know that what we put in our bodies directly impacts how we feel and look. So we work hard to ensure our products contain only the best, highest-quality, natural ingredients.</p>
        <p className="refund-topic">And all our products are third-party tested to ensure quality. </p>
        <p className="refund-topic">We only use the highest-quality, purest ingredients available. Many of our products are cruelty-free. They are free from toxins, parabens, synthetic chemicals, and artificial fragrances. Our all-natural health and wellness products are good for you, your pets, and the planet.</p> 
        <p className="refund-topic">Please note that not all products are eligible for a refund (i.e., face covers).</p>


        <div className="refund-box">
          <p className="refund-topic">Gifts</p>
          <p className="refund-answer">
            <p className="refund-p">If the item was marked as a gift when purchased and shipped directly to you, you’ll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you.</p>
            <p className="refund-p">If the item wasn’t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver, and she or he will be notified about your return.</p>
          </p>
        </div>
        <div className="refund-box">
          <p className="refund-topic">Shipping</p>
          <p className="refund-answer">
            <p className="refund-p">To return your product, mail it to 8670 W Cheyenne Ave #120, Las Vegas, NV 89129, United States</p>
            <p className="refund-p">Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>
            <p className="refund-p">If you are shipping an item valued at over $75, we strongly recommend using a trackable shipping service or purchasing shipping insurance. We cannot guarantee that we will receive your returned item.</p>
            <p className="refund-p">For help with returns, call 702-960-4843</p>
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Refund;
