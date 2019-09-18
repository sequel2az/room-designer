import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Paragraph } from "../Text"

const Description = () => (
  <StaticQuery
    query={graphql`
      {
        allContentJson(filter: { id: { eq: "step2.closet.description" } }) {
          nodes {
            value
          }
        }
      }
    `}
    render={({ allContentJson }) => (
      <Paragraph>{allContentJson.nodes[0].value}</Paragraph>
    )}
  />
)

export default Description
