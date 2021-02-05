import React, {useState} from "react";
import { StaticQuery, graphql } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";
import Provider from "../context/provider";
import "./layout.sass";
import Helmet from "react-helmet";

const Layout = ({ children }) => {
    const [theme, setTheme] = useState(false)
  return (

    <Provider>
        {theme ?
      <Helmet
        bodyAttributes={{
          class: "bodylight",
        }}
      />
      :
      <Helmet
        bodyAttributes={{
          class: "bodydark",
        }}
      />
    }
    <div className="page-content">
      <Header setTheme={setTheme}/>
      {children}
      <Footer />
    </div>
    </Provider>
  );
};

export default Layout;
