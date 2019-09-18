import React from "react"
import { Segment } from "semantic-ui-react"
import { Header } from "../Text"

const OptionsHeader = ({ label }) => (
  <Segment inverted style={{ backgroundColor: "#3D4868", borderRadius: 0 }}>
    <Header as="h4" textAlign="center">
      {label}
    </Header>
  </Segment>
)
export default OptionsHeader
