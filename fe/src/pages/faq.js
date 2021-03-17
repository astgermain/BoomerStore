import React, { useState } from "react";
import "./faq.sass";

const FAQ = () => {
  return (
    <div className="faq-wrapper">
      <div className="faq-page">
        <p style={{ fontSize: "2.5em", color: "black" }}>Have questions? We've got answers.</p>

        <div className="faq-box">
          <p className="faq-topic">When are you restocking?</p>
          <p className="faq-answer">
            We restock weekly; please visit our website frequently to check our
            available stock at the moment. If a face cover you like is out of
            stock, we recommend checking back the following week! Or you can
            always contact our customer service team to inquire about specific
            face masks. You can email them at info@boomernaturals.com or call
            them during regular business hours 7 AM - 5 PM PST at (702)
            960-4843.
          </p>
        </div>

        <div className="faq-box">
          <p className="faq-topic">Where can I buy your products in-store?</p>
          <p className="faq-answer">
            We currently only have one retail store located in Las Vegas. (May
            be updated to CVS as well)
          </p>
        </div>

        <div className="faq-box">
          <p className="faq-topic">Is your Las Vegas store open?</p>
          <p className="faq-answer">
            Yes, we are open every day from 8:00 AM-6:00 PM. Our store is open
            to the public, and we also allow curbside pickup. Our address is
            8670 west Cheyenne Ave unit 120 Las Vegas, NV 89129 (cross streets
            Cheyenne and Rampart).
          </p>
        </div>

        <div className="faq-box">
          <p className="faq-topic">How do I wash my face cover?</p>
          <p className="faq-answer">
            We recommend hand washing our face covers and air drying them with
            warm water and detergent - or machine washing them on a gentle cycle
            for best results.
          </p>
        </div>

        <div className="faq-box">
          <p className="faq-topic">Do I need to wash my face cover at first use?</p>
          <p className="faq-answer">
            Our Boomer Reusable Face Covers are sanitized and are ready to use.
            However, you are more than welcome to wash your face covers before
            the first use for extra caution.
          </p>
        </div>

        <div className="faq-box">
          <p className="faq-topic">
            Why do Boomer silver-infused face covers last a minimum of 30 days?
          </p>
          <p className="faq-answer">
            Our Boomer Reusable Face Covers are made with silver to help provide
            upgraded protection. Lab studies show that after 30 washes, silver
            can become less effective and no longer at its highest protection.
            We recommend discarding your face cover after 30 washes and
            purchasing a new one.
          </p>
        </div>

        <div className="faq-box">
          <p className="faq-topic">What is your delivery timeframe?</p>
          <p className="faq-answer">
            After an order has been placed please allow 1-3 business days for
            fulfillment and shipment. We ship USPS, delivery can take up to 5-7
            business days. We are shipping as fast as we can, and you will be
            notified via email once your order does ship.
          </p>
        </div>

        <div className="faq-box">
          <p className="faq-topic">
            Can I change or add to my order once it has been placed?
          </p>
          <p className="faq-answer">
            Unfortunately, once the order has been placed, we are unable to add
            or combine orders. We apologize for any inconvenience. Feel free to
            contact our customer service team to assist you if you need to
            change or cancel your order.
          </p>
          </div>
          <div className="faq-box">
          <p className="faq-topic">What carrier do you ship with?</p>
          <p className="faq-answer">
            We currently ship with USPS and only ship within the United States.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
