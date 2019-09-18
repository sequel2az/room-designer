import React from "react"
import { Grid } from "semantic-ui-react"
import chunk from "lodash/chunk"
import { themes } from "../../../themes"
import OptionsButton from "./OptionsButton"

const themasChunks = chunk(themes, 2)

const Themes = ({ themeId, onSelect }) => (
  <React.Fragment>
    {themasChunks.map((chunks, i) => (
      <Grid.Row
        key={i}
        columns="equal"
        style={{ paddingTop: "6px", paddingLeft: "13px", paddingRight: "8px" }}
      >
        {chunks.map(({ id, label }) => (
          <Grid.Column key={id} style={{ padding: 0, paddingRight: "5px" }}>
            <OptionsButton
              selected={id === themeId}
              onClick={() => onSelect(id)}
            >
              {label}
            </OptionsButton>
          </Grid.Column>
        ))}
      </Grid.Row>
    ))}
  </React.Fragment>
)

export default Themes
