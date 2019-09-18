import { selections } from "../../selections"
import GarageDescription from "./GarageDescription"
import ClosetDescription from "./ClosetDescription"

export default selection =>
  selection === selections.twoCar ||
  selection === selections.threeCar ||
  selection === selections.fourCar
    ? GarageDescription
    : ClosetDescription
