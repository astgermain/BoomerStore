import React, {useState, useEffect} from "react";
import { StaticQuery, graphql } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";
import Provider from "../context/provider";

import "./layout.sass";
import Helmet from "react-helmet";

const Layout = ({ path, children, location }) => {
    const [theme, setTheme] = useState(false)
    const [body, setBody] = useState("preload")
    const [body, setBody] = useState("")
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
          class: `bodylight ${body}`,
        }}
      />
      :
      <Helmet
        bodyAttributes={{
          class: `bodydark ${body} ${mobile}`,
        }}
      />
    }
    <div className="page-content">
      <Header  setTheme={setTheme} path={path} loc={location}/>
      {children}
      <Footer />
    </div>
    </Provider>
  );
};

export default Layout;
