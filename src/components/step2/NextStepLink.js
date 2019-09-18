import React from "react"
import { StaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import querystring from "query-string"
import * as Buttons from "../Buttons"

const NextSteplLink = ({ result }) => (
  <AniLink
    swipe
    direction="left"
    to={`/steps/3?${querystring.stringify(result)}`}
  >
    <StaticQuery
      query={graphql`
        {
          allContentJson(filter: { id: { eq: "step2.next" } }) {
            nodes {
              value
            }
          }
        }
      `}
      render={({ allContentJson }) => (
        <Buttons.Green>{allContentJson.nodes[0].value}</Buttons.Green>
      )}
    />
  </AniLink>
)

export default NextSteplLink
