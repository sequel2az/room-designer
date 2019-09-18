import React from "react"
import { Container, Grid, Image } from "semantic-ui-react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import twoCarThumb from "../../images/preview/2car-t1-c1-f1.jpg"
import threeCarThumb from "../../images/preview/3car-t1-c1-f1.jpg"
import fourCarThumb from "../../images/preview/4car-t1-c1-f1.jpg"
import walk1Thumb from "../../images/preview/walk1-d1-c1.jpg"
import walk2Thumb from "../../images/preview/walk2-d1-c1.jpg"
import reach1Thumb from "../../images/preview/reach1-d1-c1.jpg"
import { selections, labels } from "../../selections"
import { Header } from "../Text"
import Layout from "../layout"
import Title from "./Title"
import Description from "./Description"

const Page = () => (
  <Layout>
    <Container>
      <Grid padded centered stackable>
        <Grid.Row columns="equal">
          <Grid.Column>
            <Title />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns="equal">
          <Grid.Column>
            <Description />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns="equal">
          <Grid.Column>
            <Header>Garage</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns="equal">
          <Grid.Column textAlign="center">
            <AniLink
              swipe
              direction="left"
              to={`/steps/2?selection=${selections.twoCar}&theme=1&color=1&floor=1`}
            >
              <Image size="huge" src={twoCarThumb} centered />
              <Header>{labels[selections.twoCar]}</Header>
            </AniLink>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <AniLink
              swipe
              direction="left"
              to={`/steps/2?selection=${selections.threeCar}&theme=1&color=1&floor=1`}
            >
              <Image size="huge" src={threeCarThumb} centered />
              <Header>{labels[selections.threeCar]}</Header>
            </AniLink>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <AniLink
              swipe
              direction="left"
              to={`/steps/2?selection=${selections.fourCar}&theme=1&color=1&floor=1`}
            >
              <Image size="huge" src={fourCarThumb} centered />
              <Header>{labels[selections.fourCar]}</Header>
            </AniLink>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns="equal">
          <Grid.Column>
            <Header>Closet</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns="equal">
          <Grid.Column textAlign="center">
            <AniLink
              swipe
              direction="left"
              to={`/steps/2?selection=${selections.walkincloset1}&color=1&door=1`}
            >
              <Image size="huge" src={walk1Thumb} centered />
              <Header>{labels[selections.walkincloset1]}</Header>
            </AniLink>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <AniLink
              swipe
              direction="left"
              to={`/steps/2?selection=${selections.walkincloset2}&color=1&door=1`}
            >
              <Image size="huge" src={walk2Thumb} centered />
              <Header>{labels[selections.walkincloset2]}</Header>
            </AniLink>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <AniLink
              swipe
              direction="left"
              to={`/steps/2?selection=${selections.reachincloset1}&color=1&door=1`}
            >
              <Image size="huge" src={reach1Thumb} centered />
              <Header>{labels[selections.reachincloset1]}</Header>
            </AniLink>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Layout>
)

export default Page
