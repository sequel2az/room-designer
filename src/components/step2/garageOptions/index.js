import React from "react"
import { Grid } from "semantic-ui-react"
import MoreOptions from "../MoreOptions"
import CabinetryHeader from "../CabinetryHeader"
import Themes from "./Themes"
import GarageColors from "./GarageColors"
import FlooringColors from "./FlooringColors"
import FlooringHeader from "./FlooringHeader"
import ThemeHeader from "./ThemeHeader"

const GarageOptions = ({ selection, theme, color, floor, onSelect, dark }) => (
  <Grid padded>
    <Grid.Row columns="equal">
      <Grid.Column width={16}>
        <ThemeHeader />
      </Grid.Column>
    </Grid.Row>

    <Themes
      themeId={theme}
      onSelect={theme => onSelect({ theme, color, floor })}
    />

    <Grid.Row columns="equal">
      <Grid.Column width={16}>
        <CabinetryHeader />
      </Grid.Column>
    </Grid.Row>

    <GarageColors
      color={color}
      dark={dark}
      onSelect={color => onSelect({ theme, color, floor })}
    />

    <Grid.Row columns="equal">
      <Grid.Column width={16}>
        <FlooringHeader />
      </Grid.Column>
    </Grid.Row>
    <FlooringColors
      color={floor}
      dark={dark}
      onSelect={floor => onSelect({ theme, color, floor })}
    />
    <Grid.Row columns="equal">
      <Grid.Column width={16}>
        <MoreOptions selection={selection} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GarageOptions
