import React, { useState, useEffect } from "react";
import { StaticQuery, graphql } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";
import Provider from "../context/provider";
import Helmet from "react-helmet";
import favicon from "../images/bsicon.png";
import "./layout.sass";

const Layout = ({ path, children, location }) => {
  const [menuMobile, setMenuMobile] = useState("");
  const [theme, setTheme] = useState(false);
  const [body, setBody] = useState("preload");
  useEffect(() => {
    setTimeout(() => {
      setBody("");
    }, 500);
  }, []);
  return (
    <Provider>
      <Helmet>
        {
          //<!-- MAIN GTM, INSTALL ON ALL PAGES -->
          //<!-- INSTALL INSIDE <HEAD> AS HIGH AS POSSIBLE -->
          //Google Tag Manager
        }
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-MN8V8XS');`}
        </script>
        {/*
      <!-- End Google Tag Manager -->
      */}

        <link rel="icon" href={favicon} />
      </Helmet>
      {theme ? (
        <Helmet
          bodyAttributes={{
            class: `bodylight ${body} ${menuMobile}`,
          }}
        />
      ) : (
        <Helmet
          bodyAttributes={{
            class: `bodydark ${body} ${menuMobile}`,
          }}
        />
      )}
      {/*
      <!-- MAIN GTM, INSTALL ON ALL PAGES -->
      <!-- INSTALL IMMEDIATELY AFTER OPENING <BODY> TAG-->
      <!-- Google Tag Manager (noscript) -->
      */}
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MN8V8XS"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      {
      //<!-- End Google Tag Manager (noscript) -->
      }
      <div className="page-content">
        <Header
          setTheme={setTheme}
          path={path}
          loc={location}
          setMenuMobile={setMenuMobile}
        />
        {children}
        <Footer />
      </div>
      <Helmet>
        <script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=1530f724-c8ec-445c-aa78-ba2a973dfe14"
        >
          {" "}
        </script>
        <script
          async
          type="text/javascript"
          src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=TSPD66"
        ></script>
      </Helmet>
    </Provider>
  );
};

export default Layout;
