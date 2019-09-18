import React from "react"
import { Grid } from "semantic-ui-react"
import { useMediaQuery } from "react-responsive"
import chunk from "lodash/chunk"
import times from "lodash/times"
import breakpoints from "../breakpoints"
import Option from "./ImageOption"

const Responsive = props => {
  const isDesktop = useMediaQuery({
    query: `(min-width: ${breakpoints.desktop.min}px)`,
  })

  return isDesktop ? (
    <Options chunkSize={3} {...props} />
  ) : (
    <Options chunkSize={2} {...props} />
  )
}
const getNumberOfEmptySpace = (x, y) => {
  const r = y % x
  return r === 0 ? 0 : x - r
}

const Options = ({ chunkSize, dark, entityId, entities, onSelect }) => (
  <React.Fragment>
    {chunk(entities, chunkSize).map((group, i) => (
      <Grid.Row key={i} columns="equal">
        {group.map(({ id, src, label }) => (
          <Grid.Column key={id}>
            <Option
              src={src}
              label={label}
              dark={dark}
              selected={entityId === id}
              onClick={() => onSelect(id)}
            />
          </Grid.Column>
        ))}
        {times(getNumberOfEmptySpace(chunkSize, group.length)).map(() => (
          <Grid.Column />
        ))}
      </Grid.Row>
    ))}
  </React.Fragment>
)

export default Responsive
