import React from "react";
import p1 from "../../../images/p1.webp";
import p2 from "../../../images/p2.webp";

function BSilver() {
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
          style={{ backgroundImage: `url(${p1})` }}
        ></div>
        <div className="product-desc-box1">
          <p style={{ fontSize: "2rem", textAlign: "center" }}>
            About Boomer Silver
          </p>
          <p className="EReg">
            Silver-infusion technology is a revolutionary way to use silver for
            medical purposes, consumer products, and applications that affect
            daily life. Silver has been an integral ingredient for more than a
            century because of its natural bacteria and fungal-reducing
            properties. Through the science of nanotechnology, silver is reduced
            to nano-sized particles. Although silver naturally kills bacteria by
            stopping the exchange of oxygen, nanotechnology increases that
            capability. Because of its excellent microbial reduction properties,
            silver has been used in many products, such as clothing, linens,
            baby bottles, and cosmetics, as well as medical applications like
            bandages, catheters, and even hospital door handles.{" "}
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
            backgroundImage: `url(${p2})`,
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
            Health Benefits of Silver
          </p>
          <p className="EReg">
            Silver has been used throughout history to curb and prevent the
            spread of and treat particular diseases. For example, in individuals
            with diabetes, silver-infused bandages, socks, and even specially
            made shoes help prevent ulcers in the feet and keep their legs from
            deteriorating. Silver has been used in dermatology to treat various
            skin infections such as eczema and rashes or even acne. Whether used
            for medical purposes, consumer products, or industrial ambitions,
            interest in silver technology continues to grow. These new uses,
            such as in Boomer Naturals™ Silver-Infused Reusable Face Coverings,
            take advantage of silver’s significant bacteria and microbial
            reducing properties.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BSilver;
