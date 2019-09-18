import React from "react"
import { Button } from "semantic-ui-react"

export const Green = ({ style, children, selected, onClick, ...rest }) => (
  <Button
    fluid
    onClick={onClick}
    style={{
      ...style,
      backgroundColor: selected ? "#a0a0a0" : "#50816F",
      borderRadius: 0,
      color: "white",
    }}
    {...rest}
  >
    {children}
  </Button>
)
