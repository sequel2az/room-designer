import find from "lodash/find"
import classicRaised from "./closet-door-styles/classic-rasied.jpg"
import easedEdge from "./closet-door-styles/eased-edge.jpg"
import economyRaised from "./closet-door-styles/economy-raised.jpg"
import shaker from "./closet-door-styles/shaker.jpg"
import slab from "./closet-door-styles/slab.jpg"

export const doors = [
  {
    id: 1,
    src: slab,
    label: "Slab / Smooth",
  },
  {
    id: 2,
    src: easedEdge,
    label: "Eased Edge",
  },
  {
    id: 3,
    src: economyRaised,
    label: "Economy Raised",
  },
  {
    id: 4,
    src: classicRaised,
    label: "Classic Raised",
  },
  {
    id: 5,
    src: shaker,
    label: "Shaker",
  },
]

export function getDoorById(id) {
  return find(doors, { id: parseInt(id) })
}
