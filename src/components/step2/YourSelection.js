import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Header } from "../Text"

const Selection = ({ children }) => (
  <StaticQuery
    query={graphql`
      {
        allContentJson(filter: { id: { eq: "step2.selection" } }) {
          nodes {
            value
          }
        }
      }
    `}
    render={({ allContentJson }) => (
      <Header style={{ color: "#525C73" }} as="h1">
        {allContentJson.nodes[0].value} {children}
      </Header>
    )}
  />
)

export default Selection
