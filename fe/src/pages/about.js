import React, { useState } from "react";
import "./about.sass";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-page">
        <p style={{ fontSize: "2.5em", color: "black" }}>About</p>
        <p style={{ fontSize: "1.25em", color: "black" }}>Boomer Store is a full-service company committed to providing high-quality solutions to improve your life and promote overall wellbeing. We offer a broad spectrum of naturally-derived wellness products to improve sleep, energy, and emotional well-being. As well as products to make life easier and more balanced.</p>
        <br></br>
        <p style={{ fontSize: "1.25em", color: "black" }}>We aim to become an integral part of our local community and build long-lasting relationships with our customers. At Boomer Store, we look forward to being a part of and supporting your journey.</p>
        <br></br>
        <p style={{ fontSize: "1.25em", color: "black" }}>Our vision is to provide a one-stop-shop for all of your needs. We have sought out the best practitioners, ingredients, and sources to provide you with reliable products that will support your lifestyle. From home necessities, supplements, and electronics, we’ve curated a collection of products that we believe will become your favorite.</p>
        <br></br>
        <p style={{ fontSize: "1.25em", color: "black" }}> We are always on the lookout for the next best product to bring to you. Our customers are our number one priority.</p>

      </div>
    </div>
  );
};

export default About;
