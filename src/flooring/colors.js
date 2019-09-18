import find from "lodash/find"
import { selections } from "../selections"

const colors = {
  oxfordWhite: { value: "#f1f3f1", label: "Oxford White" },
  pewter: { value: "#8e9294", label: "Pewter" },
  chocolateApple: { value: "#4e3133", label: "Chocolate Apple" },
  alno: { value: "#000001", label: "Alno" },
  formosa: { value: "#c2d6d8", label: "Formosa" },
  marseille: { value: "#0a6daa", label: "Marseille" },
  sedona: { value: "#d28964", label: "Sedona" },
  smoke: { value: "#f5f5f5", label: "Smoke" },
  quartzsite: { value: "#000001", label: "Quartzsite" },
  graphite: { value: "#474a51", label: "Graphite" },
  icedCoffee: { value: "#997f56", label: "Iced-Coffee" },
  dusk: { value: "#f4f2f1", label: "Dusk" },
  silverFrost: { value: "#9aa3ad", label: "Silver Frost" },
  coco: { value: "#9a8c84", label: "Coco" },
  whiteChocolate: { value: "#ede6d6", label: "White Chocolate" },
}
export const garageColors = [
  { id: 1, ...colors.oxfordWhite },
  { id: 2, ...colors.pewter },
  { id: 3, ...colors.chocolateApple },
  { id: 4, ...colors.alno },
  { id: 5, ...colors.formosa },
  { id: 6, ...colors.marseille },
]

export const flooringColors = [
  { id: 1, ...colors.sedona },
  { id: 2, ...colors.smoke },
  { id: 3, ...colors.quartzsite },
  { id: 4, ...colors.graphite },
  { id: 5, ...colors.icedCoffee },
  { id: 6, ...colors.dusk },
]

export const closetColors = [
  { id: 1, ...colors.oxfordWhite },
  { id: 2, ...colors.silverFrost },
  { id: 3, ...colors.coco },
  { id: 4, ...colors.alno },
  { id: 5, ...colors.whiteChocolate },
  { id: 6, ...colors.marseille },
]

export function getGarageColorById(id) {
  return find(garageColors, { id: parseInt(id) })
}

export function getGlosetColorById(id) {
  return find(closetColors, { id: parseInt(id) })
}

export function getFlooringColorById(id) {
  return find(flooringColors, { id: parseInt(id) })
}

export function resolveColorPickerBySelection(selection) {
  return selection === selections.twoCar ||
    selection === selections.threeCar ||
    selection === selections.fourCar
    ? getGarageColorById
    : getGlosetColorById
}
