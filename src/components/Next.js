import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Icon } from "semantic-ui-react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Next = ({ to }) => (
  <AniLink
    swipe
    direction="left"
    to={to}
    style={{
      color: "#3D4868",
    }}
  >
    <StaticQuery
      query={graphql`
        {
          allContentJson(filter: { id: { eq: "next" } }) {
            nodes {
              value
            }
          }
        }
      `}
      render={({ allContentJson }) => (
        <React.Fragment>
          {allContentJson.nodes[0].value}
          <Icon
            name="angle right"
            size="huge"
            style={{
              width: "initial",
              color: "#3D4868",
            }}
          />
        </React.Fragment>
      )}
    />
  </AniLink>
)

export default Next
