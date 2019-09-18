import React from "react"
import "semantic-ui-css/semantic.min.css"

const Layout = ({ children }) => (
  <div style={{ backgroundColor: "white", height: "100vh" }}>
    <style>
      {`
      .tl-edges {
        height:100vh;
        overflow-x: initial!important;
      }`}
    </style>
    <main>{children}</main>
  </div>
)

export default Layout
