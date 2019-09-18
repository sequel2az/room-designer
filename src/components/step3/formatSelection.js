export default function({ preview, params }, options = {}) {
  const _preview = preview ? `${preview} ` : ""

  const themePrefix = options.prefixed ? "Theme - " : ""
  const colorPrefix = options.prefixed ? "Color - " : ""
  const floorPrefix = options.prefixed ? "Floor - " : ""
  const doorPrefix = options.prefixed ? "Door - " : ""

  const selection = params.selection ? `${params.selection}, ` : ""
  const theme = params.theme ? `${themePrefix}${params.theme.label}, ` : ""
  const color = params.color ? `${colorPrefix}${params.color.label}, ` : ""
  const floor = params.floor ? `${floorPrefix}${params.floor.label}, ` : ""
  const door = params.door ? `${doorPrefix}${params.door.label}` : ""

  return `${_preview}${selection}${theme}${color}${floor}${door}`
    .replace(/#/g, "") // remove all # cause it breakes request fif interested in send as url parameter
    .replace(/,\s?$/, "") // remove trailing comma and optional space
}
