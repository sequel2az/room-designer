import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Header from "../OptionsHeader"

const DoorHeader = () => (
  <StaticQuery
    query={graphql`
      {
        allContentJson(filter: { id: { eq: "step2.door.title" } }) {
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

export default DoorHeader
