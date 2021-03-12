import React from 'react'
import Bnad1 from "../../../images/bnad1.webp";
import Bnad2 from "../../../images/bnad2.webp";


function BNaturals() {
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
                style={{ backgroundImage: `url(${Bnad1})` }}
              ></div>
              <div className="product-desc-box1">
                <p style={{ fontSize: "2rem", textAlign: "center" }}>
                  About Boomer Naturals
                </p>
                <p className="EReg">
                  Boomer Naturals™ is a full-service wellness company committed
                  to providing holistic solutions to improve your life and
                  promote overall health. We offer a wide spectrum of
                  naturally-derived wellness products to improve sleep, energy,
                  and emotional well-being. Among our team are mindful wellness
                  practitioners on a mission to help you live the healthiest
                  life possible.{" "}
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
                  backgroundImage: `url(${Bnad2})`,
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
                  We're Here For You
                </p>
                <p className="EReg">
                  We aim to become an integral part of our local community and
                  build long-lasting relationships with our customers. At Boomer
                  Naturals, we look forward to being a part of and supporting
                  your wellness journey.{" "}
                </p>
                <p className="EReg" style={{ padding: "15px 0" }}>
                  Our vision providing a one-stop-shop for all of your wellness
                  needs. We have sought out the best practitioners, ingredients,
                  and sources to provide you with trustworthy products that will
                  support your lifestyle. We back that up with a 60-Day
                  money-back guarantee on all our products no questions asked.
                  This offer excludes all face coverings and PPE for sanitary
                  purposes.{" "}
                </p>
              </div>
            </div>
          </div>
    )
}

export default BNaturals
