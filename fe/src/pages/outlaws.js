import React, { useState } from "react";
import SEO from "../components/seo";
import Perform from "../components/LandingComponents/Outlaws/Perform";
import CoBrand from "../components/LandingComponents/Outlaws/CoBrand";
import BoomerSVG from "../components/LandingComponents/Outlaws/BoomerSVG";
import OutlawsSVG from "../components/LandingComponents/Outlaws/OutlawsSVG";
import HeroImg from "../images/outlaws/outlawsHeroImg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStream, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import CoolMatt from "../images/outlaws/CoolMatt.png";
import Crimzo from "../images/outlaws/Crimzo.png";
import Jake from "../images/outlaws/Jake.png";
import Joobi from "../images/outlaws/Joobi.png";
import ContestLoot from "../images/outlaws/contestLoot.png";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "./outlaws.sass";

const LAMBDA_URL =
  "https://ma04tol43k.execute-api.us-west-1.amazonaws.com/Production";
const required = "This field is required";

const Outlaws = () => {
  const [submitted, setSubmitted] = useState(false);
  const [menu, setMenu] = useState(false);
  const methods = useForm();
  const {
    register,
    handleSubmit,
    setError,
    errors,
    reset,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      await fetch(LAMBDA_URL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      setSubmitted(true);

      reset();
    } catch (error) {
      console.log("methods", methods);
      setError(
        "submit",
        "submitError",
        `Oops! There seems to be an issue! ${error.message}`
      );
    }
  };

  const showSubmitError = (msg) => <p className="msg-error">{msg}</p>;

  const showThankYou = (
    <div className="msg-confirm">
      <Alert variant="outlined" severity="success" className="sContestAlert">
        Your entry was recieved!
      </Alert>
    </div>
  );

  const showForm = (
    <form onSubmit={handleSubmit(onSubmit)} method="post">
      <br></br>
      <Grid item xs={12} className="spacing-contact outlawsContactFormField">
        <label htmlFor="email">
          <TextField
            inputRef={register({ required })}
            type="email"
            name="email"
            id="email"
            label="E-Mail Address"
            rowsMax={1}
            fullWidth
            size="small"
            variant="outlined"
            disabled={isSubmitting}
            error={errors.email}
          />
        </label>
      </Grid>
      <br></br>
      <div className="submit-wrapper">
        <button
          className="contestButton"
          style={{
            background: "black",
            color: "#97d700",
            border: "none",
            textTransform: "uppercase",
            fontSize: "18px",
            fontWeight: "800",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          type="submit"
        >
          Enter Now
        </button>
      </div>
    </form>
  );

  return (
    <>
      <SEO title="Outlaws - Boomer Store Contest Page" />
      <div className={menu ? "menu" : "closed"}>
          <a href="https://www.boomerstore.com/" style={{ textAlign: "left", padding: "10px", width: "100%", color: "black", fontSize: "24px" }} className="outlawsMenuLink">BoomerStore.com</a>
          <a href="http://outlaws.gg/" style={{ textAlign: "left", padding: "10px", width: "100%", color: "black", fontSize: "24px" }} className="outlawsMenuLink">Outlaws.gg</a>
          <a style={{ textAlign: "left", padding: "10px", width: "100%", color: "black", fontSize: "24px" }} className="outlawsMenuLink">Official Contest Rules</a>
          <a style={{ textAlign: "left", padding: "10px", width: "100%", color: "black", fontSize: "24px" }} className="outlawsMenuLink">Privacy Policy</a>
      </div>
      <div
        className="outlawsHero"
        style={{
          backgroundImage: `url(${HeroImg})`,
          maxHeight: "600px",
          backgroundSize: "cover",
          display: "flex",
        }}
      >
        <div className="blackOverlay">
          <div className="outlawsHeroHeader">
              <button onClick={() => setMenu(!menu)} style={{border: "none", background: "none", cursor: "pointer"}}>
            <FontAwesomeIcon
              icon={faStream}
              className={`outlawsMenuButton ${menu && `rotateStream`}`}
              style={{
                marginLeft: "0px",
                marginTop: "1px",
                color: "#97d700",
                height: "2em",
                width: "2em",
                transition: ".25s ease",
                transform: "rotate(0deg)"
              }}
            />
            </button>
          </div>

          <Perform />
          <CoBrand />
          <div className="centerRow">
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{
                marginLeft: "0px",
                marginTop: "1px",
                color: "#fff",
                height: "3em",
                width: "3em",
              }}
            />
          </div>
        </div>
      </div>
      <div className="outlawsPlayerSection">
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "25px",
            paddingBottom: "0px",
            color: "black",
          }}
        >
          Player Favorites
        </h1>
        <div
          className="outlawsPlayers"
          style={{
            padding: "15px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <div className="outlawsPlayer">
            <img src={Joobi} style={{ maxHeight: "none" }}></img>
            <button
              className="buttonClick"
              style={{
                marginTop: "25px",
                background: "#97d700",
                border: "none",
                textTransform: "uppercase",
                fontSize: "18px",
                fontWeight: "800",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://www.boomerstore.com/product/vitamin-energy-packet-orange/";
              }}
            >
              Buy Now
            </button>
          </div>
          <div className="outlawsPlayer">
            <img src={Crimzo} style={{ maxHeight: "none" }}></img>
            <button
              className="buttonClick"
              style={{
                marginTop: "25px",
                background: "#97d700",
                border: "none",
                textTransform: "uppercase",
                fontSize: "18px",
                fontWeight: "800",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://www.boomerstore.com/product/vitamin-energy-packet-mango-pomegranate/";
              }}
            >
              Buy Now
            </button>
          </div>
          <div className="outlawsPlayer">
            <img src={Jake} style={{ maxHeight: "none" }}></img>
            <button
              className="buttonClick"
              style={{
                marginTop: "25px",
                background: "#97d700",
                border: "none",
                textTransform: "uppercase",
                fontSize: "18px",
                fontWeight: "800",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://www.boomerstore.com/product/vitamin-energy-packet-cherry-lime/";
              }}
            >
              Buy Now
            </button>
          </div>
          <div className="outlawsPlayer">
            <img src={CoolMatt} style={{ maxHeight: "none" }}></img>
            <button
              className="buttonClick"
              style={{
                marginTop: "25px",
                background: "#97d700",
                border: "none",
                textTransform: "uppercase",
                fontSize: "18px",
                fontWeight: "800",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://www.boomerstore.com/product/vitamin-energy-packet-raspberry-lemon/";
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div
        className="outlawsSampleSection"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "50px 10px 50px 10px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          Buy Two Get One Free Use Offer{" "}
          <span style={{ color: "#97d700" }}>OUTLAWS2FOR1</span> At Checkout
        </h1>
        <a>Click For A Free Sample Pack</a>
      </div>
      <div className="outlawsContestSection">
        <div className="outlawsContestPrize">
          <img src={ContestLoot} style={{ maxHeight: "450px" }}></img>
        </div>
        <div className="outlawsContestFormContainer">
          <div className="contest-page">
            {errors && errors.submit && (
              <Alert
                variant="outlined"
                severity="error"
                className="spacing-contact"
              >
                Your message wasn't sent, there seems to be an issue!
              </Alert>
            )}
            <div className="text-side">
              <h2
                className="align-left story-text"
                style={{ fontSize: "2em", color: "black" }}
              >
                Enter To Win
              </h2>
              <h3
                style={{ fontSize: "1em", color: "black", fontWeight: "400" }}
              >
                Enter to win a month’s supply of{" "}
                <span className="bold">Vitamin Energy</span>,
                <span className="bold"> Astro Headphones</span>,{" "}
                <span className="bold">Exclusive Merch</span>, and{" "}
                <span className="bold">signed poster from the team</span>.
              </h3>
            </div>
            <div className="form-side">
              {submitted ? showThankYou : showForm}
            </div>
          </div>
        </div>
      </div>
      <div className="outlawsFooterSection">
        <div className="outlawsLogoSVG">
          <OutlawsSVG />
        </div>
        <div
          className="outlawsContestLinks"
          style={{ textAlign: "center", padding: "10px" }}
        >
          <a style={{ textAlign: "center", padding: "10px" }}>OFFICIAL CONTEST RULES</a>
          <a style={{ textAlign: "center", padding: "10px" }}>PRIVACY POLICY</a>
        </div>
        <div className="boomerStoreLogoSVG">
          <BoomerSVG />
        </div>
      </div>
    </>
  );
};
export default Outlaws;
