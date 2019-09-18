import React from "react"
import { Header as SemnaticHeader } from "semantic-ui-react"

export const Header = ({ style, ...props }) => (
  <SemnaticHeader
    style={{
      ...(style ? style : {}),
      fontFamily: "Nunito Sans",
      fontWeight: 300,
      fontStyle: "normal",
    }}
    {...props}
  />
)

export const Paragraph = ({ style, ...props }) => (
  <p
    style={{
      ...(style ? style : {}),
      fontFamily: "Nunito Sans",
      fontWeight: 400,
      fontStyle: "normal",
    }}
    {...props}
  />
)
