import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Header } from "../Text"

const Title = () => (
  <StaticQuery
    query={graphql`
      {
        allContentJson(filter: { id: { eq: "step3.form.title" } }) {
          nodes {
            value
          }
        }
      }
    `}
    render={({ allContentJson }) => (
      <Header as="h2" style={{ borderBottom: "solid 1px #D4D4D4" }}>
        {allContentJson.nodes[0].value}
      </Header>
    )}
  />
)

export default Title
