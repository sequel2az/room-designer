import React from "react"
import { Container, Grid, Image, Segment } from "semantic-ui-react"
import { labels } from "../../selections"
import Layout from "../layout"
import YourSelection from "./YourSelection"
import PreviousStepLink from "./PreviousStepLink"
import NextStepLink from "./NextStepLink"
import "./override.css"

const Selection = ({ selection, description, options, previewSrc, result }) => (
  <Layout>
    <Container fluid>
      <Grid padded stackable>
        <Grid.Column width={5} style={{ paddingRight: "5px" }}>
          <Segment style={{ border: 0, boxShadow: "none" }}>
            <YourSelection>{labels[selection]}</YourSelection>
            {description}
          </Segment>
          {options}
        </Grid.Column>
        <Grid.Column width={11} style={{ paddingLeft: 0 }}>
          <Grid>
            <Grid.Row columns="equal">
              <Grid.Column>
                <PreviousStepLink />
              </Grid.Column>
              <Grid.Column>
                <NextStepLink result={result} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Image
                  src={previewSrc}
                  style={{ border: "solid 8px #D4D4D4" }}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid>
    </Container>
  </Layout>
)

export default Selection
