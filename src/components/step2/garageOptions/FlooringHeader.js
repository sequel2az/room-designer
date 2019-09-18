import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Header from "../OptionsHeader"

const FlooringHeader = () => (
  <StaticQuery
    query={graphql`
      {
        allContentJson(filter: { id: { eq: "step2.flooring.title" } }) {
          nodes {
            value
          }
        }
      }
    `}
    render={({ allContentJson }) => (
      <Header label={allContentJson.nodes[0].value} />
    )}
  />
)

export default FlooringHeader
