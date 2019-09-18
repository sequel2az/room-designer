import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Segment, Image, Modal } from "semantic-ui-react"
import { Header } from "../Text"
import resolveMoreOptions from "./resolveMoreOptions"

const OptionsHeader = ({ selection }) => (
  <Modal
    trigger={
      <Segment
        inverted
        style={{
          cursor: "pointer",
          backgroundColor: "#3D4868",
          borderRadius: 0,
        }}
      >
        <StaticQuery
          query={graphql`
            {
              allContentJson(filter: { id: { eq: "step2.options" } }) {
                nodes {
                  value
                }
              }
            }
          `}
          render={({ allContentJson }) => (
            <Header as="h4" textAlign="center">
              {allContentJson.nodes[0].value}
            </Header>
          )}
        />
      </Segment>
    }
  >
    <Modal.Content>
      <Image src={resolveMoreOptions(selection)} />
    </Modal.Content>
  </Modal>
)
export default OptionsHeader
