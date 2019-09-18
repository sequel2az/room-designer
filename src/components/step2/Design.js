import { useState } from "react"
import querystring from "query-string"
import resolvePreviewPathFactory from "../../resolvePreviewPathFactory"

const DesktopPage = ({ location, children }) => {
  const queryParams = querystring.parse(location.search)

  const [theme, setTheme] = useState(parseInt(queryParams.theme) || null)
  const [color, setColor] = useState(parseInt(queryParams.color) || null)
  const [floor, setFloor] = useState(parseInt(queryParams.floor) || null)
  const [door, setDoor] = useState(parseInt(queryParams.door) || null)

  const selection = queryParams.selection

  return children({
    selection,
    theme,
    color,
    floor,
    door,
    setTheme,
    setColor,
    setFloor,
    setDoor,
    src: resolvePreviewPathFactory(selection)({
      selection,
      theme,
      color,
      floor,
      door,
    }),
  })
}

export default DesktopPage
