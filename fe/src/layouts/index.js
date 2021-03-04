import React, {useState, useEffect} from "react";
import { StaticQuery, graphql } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";
import Provider from "../context/provider";

import "./layout.sass";
import Helmet from "react-helmet";

const Layout = ({ path, children, location }) => {
    const [menuMobile, setMenuMobile] = useState("")
    const [theme, setTheme] = useState(false)
    const [body, setBody] = useState("preload")
    useEffect(() => {
      setTimeout(() => {
        setBody("")
      }, 500)
        
    }, [])
  return (

    <Provider>
        {theme ?
      <Helmet
        bodyAttributes={{
          class: `bodylight ${body} ${menuMobile}`, 
        }}
      />
      :
      <Helmet
        bodyAttributes={{
          class: `bodydark ${body} ${menuMobile}`,
         
        }}
      />
    }
    <div className="page-content">
      <Header setTheme={setTheme} path={path} loc={location} setMenuMobile={setMenuMobile}/>
      {children}
      <Footer />
    </div>
    </Provider>
  );
};

export default Layout;
