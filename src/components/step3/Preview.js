import querystring from "query-string"
import omitBy from "lodash/omitBy"
import isNil from "lodash/isNil"
import { labels } from "../../selections"
import { getThemeById } from "../../themes"
import { resolveColorPickerBySelection } from "../../colors"
import { getFlooringColorById } from "../../flooring"
import { getDoorById } from "../../doors"
import resolvePreviewPathFactory from "../../resolvePreviewPathFactory"

const Preview = ({ location, children }) => {
  const queryParams = querystring.parse(location.search)
  const path = resolvePreviewPathFactory(queryParams.selection)(queryParams)
  const pickColor = resolveColorPickerBySelection(queryParams.selection)

  return children(
    `${location.origin}${path}`,
    omitBy(
      {
        selection: labels[queryParams.selection],
        theme: getThemeById(queryParams.theme),
        color: pickColor(queryParams.color),
        floor: getFlooringColorById(queryParams.floor),
        door: getDoorById(queryParams.door),
      },
      isNil
    )
  )
}

export default Preview
