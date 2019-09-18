import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Header } from "../Text"

const Title = () => (
  <StaticQuery
    query={graphql`
      {
        allContentJson(filter: { id: { eq: "step1.title" } }) {
          nodes {
            value
          }
        }
      }
    `}
    render={({ allContentJson }) => (
      <Header as="h1">{allContentJson.nodes[0].value}</Header>
    )}
  />
)

export default Title
