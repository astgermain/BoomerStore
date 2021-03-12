import React from 'react'
import p5 from "../../../images/p5.webp";
import p6 from "../../../images/p6.webp";

function BSupplement() {
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
                style={{ backgroundImage: `url(${p5})` }}
              ></div>
              <div className="product-desc-box1">
                <p style={{ fontSize: "2rem", textAlign: "center" }}>
                  About Boomer Supplement
                </p>
                <p className="EReg">
                Supplement your healthy lifestyle with the help of the Boomer line of daily supplements. We’ve sourced the finest ingredients to give your health a boost, so you can and feel your best. Whether you have a specific ailment, you’re seeking relief from, or just looking to increase your general wellness, we’re here to support you along the way. 
{" "}
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                padding: "25px 50px 0 50px",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <div
                className="product-desc-img2"
                style={{
                  backgroundImage: `url(${p6})`,
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
                  Something for Everyone
                </p>
                <p className="EReg">
                Our collection boasts a multi-vitamin, energy supplement, vitamin C, antioxidants, and amino acids. Vitamin C helps you feel your best by maintaining healthy blood vessels, bones, and skin. And an antioxidant-rich diet can help reduce your risk of heart disease and certain cancers, as well as enrich your overall health by reducing the number of free radicals in your body. Our NOXCG3™ supplement is sure to help you power through your next workout or recovery day. This energy-boosting drink supplement contains nitric oxide- arginine, creatine, glutamine, and beta-alanine for the ultimate amino acid drink that stimulates muscle strength and growth.{" "}
                </p>
              </div>
            </div>
          </div>
    )
}

export default BSupplement
