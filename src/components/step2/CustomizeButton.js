import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Button } from "semantic-ui-react"

const Customize = ({ onClick }) => (
  <StaticQuery
    query={graphql`
      {
        allContentJson(filter: { id: { eq: "step2.mobile.customize" } }) {
          nodes {
            value
          }
        }
      }
    `}
    render={({ allContentJson }) => (
      <Button
        onClick={e => {
          e.stopPropagation()
          onClick()
        }}
        style={{
          backgroundColor: "#3D4868",
          borderRadius: 0,
          color: "white",
        }}
      >
        {allContentJson.nodes[0].value}
      </Button>
    )}
  />
)

export default Customize
