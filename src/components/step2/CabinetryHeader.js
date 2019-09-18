import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Header from "./OptionsHeader"

const CabinetryHeader = () => (
  <StaticQuery
    query={graphql`
      {
        allContentJson(filter: { id: { eq: "step2.cabinetry.title" } }) {
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

export default CabinetryHeader
