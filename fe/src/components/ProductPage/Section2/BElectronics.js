import React from "react";
import p3 from "../../../images/p3.webp";
import p4 from "../../../images/p4.webp";

function BElectronics() {
  return (
    <div className="product-page-section2">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="product-desc-img1"
          style={{ backgroundImage: `url(${p3})` }}
        ></div>
        <div className="product-desc-box1">
          <p style={{ fontSize: "2rem", textAlign: "center" }}>
            About Boomer Electronics
          </p>
          <p className="EReg">
            Boomer is delighted to bring you our top-of-the-line electronics.
            We’ve kept you in mind when designing these products. You need
            quality and the looks to go along with it. We think you’ll obsess
            over our matching phone cases and charging cables, perfect for
            keeping you on the go in sleek style. You will no longer need to
            sacrifice style for power and quality when it comes to your
            electronic devices and accessories. But don’t just take our word for
            it; go ahead give it a try!{" "}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "25px 50px 25px 50px",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div
          className="product-desc-img2"
          style={{
            backgroundImage: `url(${p4})`,
            width: "435px",
            height: "560px",
          }}
        ></div>
        <div
          style={{
            width: "550px",
            color: "white",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              fontSize: "2rem",
              textAlign: "flex-start",
              padding: "15px 0",
            }}
          >
            We’ve Got What You Need
          </p>
          <p className="EReg">
            Our electronics are lightweight and on-trend, with the power to keep
            you going no matter where the day takes you. Whether you’re team
            Apple™ or Android™, we’ve got the accessories you need.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BElectronics;
