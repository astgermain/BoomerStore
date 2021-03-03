import React, {useState, useEffect} from "react";
import { StaticQuery, graphql } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";
import Provider from "../context/provider";

import "./layout.sass";
import Helmet from "react-helmet";

const Layout = ({ path, children, location }) => {
    const [theme, setTheme] = useState(false)
    useEffect(() => {
      $(window).load(function() {
        $("body").removeClass("preload");
      });s
    }, [])
  return (

    <Provider>
        {theme ?
      <Helmet
        bodyAttributes={{
          class: "bodylight preload",
        }}
      />
      :
      <Helmet
        bodyAttributes={{
          class: "bodydark preload",
        }}
      />
    }
    <div className="page-content">
      <Header setTheme={setTheme} path={path} loc={location}/>
      {children}
      <Footer />
    </div>
    </Provider>
  );
};

export default Layout;
