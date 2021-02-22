import React from "react"

import SEO from "../components/seo"
import Img404 from "../images/no-page.png"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <div style={{display: "flex", flexDirection: "row", height: "calc(100vh - 300px)"}}>
      <div style={{width: "50%", padding: "15px", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img src={Img404} alt="404"></img>
      </div>
      <div style={{width: "50%", padding: "15px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <div>
          <p className="is-size-3">Uh Oh,</p>
          <p className="is-size-3">Page Not Found</p>
        </div>
        <button className="button account-button" style={{ marginTop: "50px" }} href="/">Return Home</button>
      </div>
    </div>
  </>
)

export default NotFoundPage
