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
          //50 pound global tag
        }
        <script>
          {`
!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
// Insert Twitter Pixel ID and Standard Event data below
twq('init','o5w5g');
twq('track','PageView');
`}
        </script>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=DC-10104861"
        ></script>
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'DC-10104861');
          `}
        </script>

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
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MN8V8XS"
          style={{
            display: "none",
            visibility: "hidden",
            width: "0",
            height: "0",
          }}
        ></iframe>
      </noscript>
      {
        //<!-- End Google Tag Manager (noscript) -->
      }
      {console.log(path)}
      {path == ("/outlaws/") || path == ("/outlaws-contest/") ?
        <div className="page-content">
          <Header
            setTheme={setTheme}
            path={path}
            loc={location}
            setMenuMobile={setMenuMobile}
            noDisplay={true}
          />
        {children}
        </div>
        :
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
      }
      <Helmet>
        <script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=1530f724-c8ec-445c-aa78-ba2a973dfe14"
        >
          {" "}
        </script>
      </Helmet>
    </Provider>
  );
};

export default Layout;
