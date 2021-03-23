import React, { useState, useEffect } from "react";
import { StaticQuery, graphql } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";
import Provider from "../context/provider";

import "./layout.sass";
import Helmet from "react-helmet";

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
        <script type="text/javascript" src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=TSPD66"></script>
      </Helmet>
    </Provider>
  );
};

export default Layout;
