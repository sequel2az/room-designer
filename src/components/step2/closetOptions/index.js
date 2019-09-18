import React from "react"
import { Grid } from "semantic-ui-react"
import MoreOptions from "../MoreOptions"
import CabinetryHeader from "../CabinetryHeader"
import ClosetColors from "./ClosetColors"
import Doors from "./Doors"
import DoorHeader from "./DoorHeader"

const ClosetOptions = ({ selection, color, door, dark, onSelect }) => (
  <Grid padded>
    <Grid.Row columns="equal">
      <Grid.Column width={16}>
        <DoorHeader />
      </Grid.Column>
    </Grid.Row>

    <Doors
      door={door}
      dark={dark}
      onSelect={door => onSelect({ color, door })}
    />

    <Grid.Row columns="equal">
      <Grid.Column width={16}>
        <CabinetryHeader />
      </Grid.Column>
    </Grid.Row>

    <ClosetColors
      color={color}
      dark={dark}
      onSelect={color => onSelect({ color, door })}
    />

    <Grid.Row columns="equal">
      <Grid.Column width={16}>
        <MoreOptions selection={selection} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default ClosetOptions
