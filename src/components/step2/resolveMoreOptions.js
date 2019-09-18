import { selections } from "../../selections"
import GarageOptions from "./garage-more-options.jpg"
import ClosetOptions from "./closet-more-options.jpg"

export default selection =>
  selection === selections.twoCar ||
  selection === selections.threeCar ||
  selection === selections.fourCar
    ? GarageOptions
    : ClosetOptions
