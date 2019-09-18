import React from "react"
import omitBy from "lodash/omitBy"
import isNil from "lodash/isNil"
import Layout from "../layout"
import Selection from "./Selection"
import Design from "./Design"
import resolveOptionsComponent from "./resolveOptionsComponent"
import resolveDescriptionComponent from "./resolveDescriptionComponent"

const DesktopPage = props => (
  <Design {...props}>
    {({
      selection,
      theme,
      color,
      floor,
      door,
      setTheme,
      setColor,
      setFloor,
      setDoor,
      src,
    }) => {
      const Options = resolveOptionsComponent(selection)
      const Description = resolveDescriptionComponent(selection)
      return (
        <Layout>
          <Selection
            selection={selection}
            previewSrc={src}
            description={<Description />}
            options={
              <Options
                dark
                selection={selection}
                theme={theme}
                color={color}
                floor={floor}
                door={door}
                onSelect={options => {
                  setTheme(options.theme)
                  setColor(options.color)
                  setFloor(options.floor)
                  setDoor(options.door)
                }}
              />
            }
            result={omitBy({ selection, theme, color, floor, door }, isNil)}
          />
        </Layout>
      )
    }}
  </Design>
)

export default DesktopPage
