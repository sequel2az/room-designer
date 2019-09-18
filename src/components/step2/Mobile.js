import React from "react"
import { Grid, Image, Header } from "semantic-ui-react"
import querystring from "query-string"
import omitBy from "lodash/omitBy"
import isNil from "lodash/isNil"
import { labels } from "../../selections"
import Menu from "../Menu"
import resolveOptionsComponent from "./resolveOptionsComponent"
import Design from "./Design"
import Customize from "./CustomizeButton"

const MobilePage = props => (
  <Design {...props}>
    {({
      selection,
      theme,
      color,
      floor,
      door,
      setTheme,
      setColor,
      setFloor,
      setDoor,
      src,
    }) => {
      const Options = resolveOptionsComponent(selection)
      return (
        <Menu
          prev="/steps/1"
          next={`/steps/3?${querystring.stringify(
            omitBy({ selection, theme, color, floor, door }, isNil)
          )}`}
          options={() => (
            <Options
              selection={selection}
              theme={theme}
              color={color}
              floor={floor}
              door={door}
              onSelect={options => {
                setTheme(options.theme)
                setColor(options.color)
                setFloor(options.floor)
                setDoor(options.door)
              }}
            />
          )}
          content={toggle => (
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Header>{labels[selection]}</Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Image src={src} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="left">
                  <Customize onClick={toggle} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          )}
        />
      )
    }}
  </Design>
)

export default MobilePage
