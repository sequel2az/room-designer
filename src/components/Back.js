import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Icon } from "semantic-ui-react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Back = ({ to }) => (
  <AniLink
    swipe
    direction="right"
    to={to}
    style={{
      color: "#3D4868",
    }}
  >
    <StaticQuery
      query={graphql`
        {
          allContentJson(filter: { id: { eq: "back" } }) {
            nodes {
              value
            }
          }
        }
      `}
      render={({ allContentJson }) => (
        <React.Fragment>
          <Icon
            name="angle left"
            size="huge"
            style={{
              width: "initial",
              color: "#3D4868",
            }}
          />
          {allContentJson.nodes[0].value}
        </React.Fragment>
      )}
    />
  </AniLink>
)

export default Back
