import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Header } from "../Text"
import formatSelection from "./formatSelection"

const Selection = params => (
  <StaticQuery
    query={graphql`
      {
        allContentJson(filter: { id: { eq: "step3.selection" } }) {
          nodes {
            value
          }
        }
      }
    `}
    render={({ allContentJson }) => (
      <Header as="h4" style={{ marginTop: "5px" }}>
        {allContentJson.nodes[0].value} {formatSelection({ params })}
      </Header>
    )}
  />
)

export default Selection
