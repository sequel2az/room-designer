import { withPrefix } from "gatsby"
import { selections } from "./selections"

export default selection =>
  selection === selections.twoCar ||
  selection === selections.threeCar ||
  selection === selections.fourCar
    ? ({ selection, theme, color, floor }) =>
        withPrefix(`/preview/${selection}-t${theme}-c${color}-f${floor}.jpg`)
    : ({ selection, color, door }) =>
        withPrefix(`/preview/${selection}-d${door}-c${color}.jpg`)
