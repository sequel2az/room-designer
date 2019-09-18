import React from "react"
import { useMediaQuery } from "react-responsive"
import breakpoints from "../../breakpoints"
import Mobile from "../../components/step2/Mobile"
import Desktop from "../../components/step2/Desktop"

const Page = props => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${breakpoints.mobile.max}px)`,
  })
  return isMobile ? <Mobile {...props} /> : <Desktop {...props} />
}

export default Page
