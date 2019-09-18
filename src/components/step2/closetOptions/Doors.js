import React from "react"
import { doors } from "../../../doors"
import Options from "../../Options"

const Doors = ({ door, ...props }) => (
  <Options entityId={door} entities={doors} {...props} />
)

export default Doors
