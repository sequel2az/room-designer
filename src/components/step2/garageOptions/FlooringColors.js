import React from "react"
import { flooringColors } from "../../../flooring"
import Options from "../../Options"

const Colors = ({ color, ...props }) => (
  <Options entityId={color} entities={flooringColors} {...props} />
)

export default Colors
