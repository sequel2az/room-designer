import find from "lodash/find"

export const themes = [
  { id: 1, label: "Standard Garage" },
  { id: 2, label: "Family/Sport Garage" },
  { id: 3, label: "Maximum Storage" },
  { id: 4, label: "Workshop" },
]

export function getThemeById(id) {
  return find(themes, { id: parseInt(id) })
}
