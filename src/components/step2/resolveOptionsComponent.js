import { selections } from "../../selections"
import GarageOptions from "./garageOptions"
import ClosetOptions from "./closetOptions"

export default selection =>
  selection === selections.twoCar ||
  selection === selections.threeCar ||
  selection === selections.fourCar
    ? GarageOptions
    : ClosetOptions
