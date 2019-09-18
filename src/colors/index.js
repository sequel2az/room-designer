import find from "lodash/find"
import { selections } from "../selections"
import alno from "./cabinetry-colors-all/alno.jpg"
import chocolateApple from "./cabinetry-colors-all/chocolate-apple.jpg"
import coco from "./cabinetry-colors-all/coco.jpg"
import whiteChocolate from "./cabinetry-colors-all/choclate-white-swatch.jpg"
import formosa from "./cabinetry-colors-all/formosa.jpg"
import marselle from "./cabinetry-colors-all/marselle.jpg"
import pewter from "./cabinetry-colors-all/pewter.jpg"
import silverFrost from "./cabinetry-colors-all/silver-frost.jpg"
import white from "./cabinetry-colors-all/white.jpg"

const colors = {
  white: { src: white, label: "Oxford White" },
  pewter: { src: pewter, label: "Pewter" },
  chocolateApple: { src: chocolateApple, label: "Chocolate Apple" },
  alno: { src: alno, label: "Alno" },
  whiteChocolate: { src: whiteChocolate, label: "White Chocolate" },
  formosa: { src: formosa, label: "Formosa" },
  marselle: { src: marselle, label: "Marseille" },
  silverFrost: { src: silverFrost, label: "Silver Frost" },
  coco: { src: coco, label: "Coco" },
}
export const garageColors = [
  { id: 1, ...colors.white },
  { id: 2, ...colors.pewter },
  { id: 3, ...colors.chocolateApple },
  { id: 4, ...colors.alno },
  { id: 5, ...colors.formosa },
  { id: 6, ...colors.marselle },
]

export const closetColors = [
  { id: 1, ...colors.white },
  { id: 2, ...colors.silverFrost },
  { id: 3, ...colors.coco },
  { id: 4, ...colors.alno },
  { id: 5, ...colors.whiteChocolate },
  { id: 6, ...colors.marselle },
]

export function getGarageColorById(id) {
  return find(garageColors, { id: parseInt(id) })
}

export function getGlosetColorById(id) {
  return find(closetColors, { id: parseInt(id) })
}

export function resolveColorPickerBySelection(selection) {
  return selection === selections.twoCar ||
    selection === selections.threeCar ||
    selection === selections.fourCar
    ? getGarageColorById
    : getGlosetColorById
}
