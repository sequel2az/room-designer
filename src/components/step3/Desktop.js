import React, { useRef } from "react"
import { Container, Grid, Image, Ref } from "semantic-ui-react"
import Layout from "../layout"
import Preview from "./Preview"
import Form from "./Form"
import PreviousStepLink from "./PreviousStepLink"
import Description from "./Description"
import Title from "./Title"
import FormTitle from "./FormTitle"
import YourSelection from "./YourSelection"

const Page = ({ location }) => {
  const previewRef = useRef(null)
  return (
    <Layout>
      <Container style={{ marginTop: "25px" }}>
        <Grid stackable>
          <Grid.Row columns="equal">
            <Grid.Column>
              <Title />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ marginBottom: "30px" }}>
            <Grid.Column width={13}>
              <Description />
            </Grid.Column>
            <Grid.Column width={3}>
              <PreviousStepLink search={location.search} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns="equal">
            <Grid.Column>
              <FormTitle />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={6}>
              <Form location={location} />
            </Grid.Column>
            <Grid.Column width={10}>
              <Grid>
                <Grid.Row columns="equal">
                  <Grid.Column>
                    <Preview location={location}>
                      {(src, params) => (
                        <React.Fragment>
                          <Ref innerRef={previewRef}>
                            <Image
                              src={src}
                              style={{ border: "solid 8px #D4D4D4" }}
                            />
                          </Ref>
                          <YourSelection {...params} />
                        </React.Fragment>
                      )}
                    </Preview>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Page
