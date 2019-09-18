import React, { useRef } from "react"
import { Grid, Ref, Image } from "semantic-ui-react"
import { Header } from "../Text"
import Menu from "../Menu"
import Options from "./Options"
import Preview from "./Preview"
import Form from "./Form"
import Description from "./Description"

const MobilePage = ({ location }) => {
  const previewRef = useRef(null)
  return (
    <Menu
      prev={`/steps/2${location.search}`}
      options={() => <Options imgRef={previewRef} />}
      content={() => (
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Header>Header</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Description />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns="equal">
            <Grid.Column>
              <Header>Sub header</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Preview location={location}>
                {src => (
                  <Ref innerRef={previewRef}>
                    <Image src={src} style={{ border: "solid 8px #D4D4D4" }} />
                  </Ref>
                )}
              </Preview>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Form location={location} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )}
    />
  )
}

export default MobilePage
