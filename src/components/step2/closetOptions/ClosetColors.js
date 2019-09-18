import React from "react"
import { closetColors } from "../../../colors"
import Options from "../../Options"

const Colors = ({ color, ...props }) => (
  <Options entityId={color} entities={closetColors} {...props} />
)

export default Colors
