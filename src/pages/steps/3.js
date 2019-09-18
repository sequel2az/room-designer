import React from "react"
import { useMediaQuery } from "react-responsive"
import breakpoints from "../../breakpoints"
import Mobile from "../../components/step3/Mobile"
import Desktop from "../../components/step3/Desktop"

const Page = props => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${breakpoints.mobile.max}px)`,
  })
  return isMobile ? <Mobile {...props} /> : <Desktop {...props} />
}

export default Page
