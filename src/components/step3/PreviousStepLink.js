import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Button } from "semantic-ui-react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const PreviousStepLink = ({ search }) => (
  <AniLink swipe direction="right" to={`/steps/2${search}`}>
    <StaticQuery
      query={graphql`
        {
          allContentJson(filter: { id: { eq: "step3.previous" } }) {
            nodes {
              value
            }
          }
        }
      `}
      render={({ allContentJson }) => (
        <Button
          fluid
          style={{
            backgroundColor: "#D4D4D4",
            borderRadius: 0,
            color: "#3F4B65",
          }}
        >
          {allContentJson.nodes[0].value}
        </Button>
      )}
    />
  </AniLink>
)

export default PreviousStepLink
