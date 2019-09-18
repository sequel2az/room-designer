import React from "react"
import { garageColors } from "../../../colors"
import Options from "../../Options"

const Colors = ({ color, ...props }) => (
  <Options entityId={color} entities={garageColors} {...props} />
)

export default Colors
