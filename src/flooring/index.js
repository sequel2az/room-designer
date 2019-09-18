import find from "lodash/find"
import dusk from "./garage-flooring/dusk.jpg"
import graphite from "./garage-flooring/graphite.jpg"
import icedCoffee from "./garage-flooring/iced-coffee.jpg"
import quartzsite from "./garage-flooring/quartzsite.jpg"
import sedona from "./garage-flooring/sedona.jpg"
import smoke from "./garage-flooring/smoke.jpg"

export const flooringColors = [
  { id: 1, src: sedona, label: "Sedona" },
  { id: 2, src: smoke, label: "Smoke" },
  { id: 3, src: quartzsite, label: "Quartzsite" },
  { id: 4, src: graphite, label: "Graphite" },
  { id: 5, src: icedCoffee, label: "Iced-Coffee" },
  { id: 6, src: dusk, label: "Dusk" },
]

export function getFlooringColorById(id) {
  return find(flooringColors, { id: parseInt(id) })
}
