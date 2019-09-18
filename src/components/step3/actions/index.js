import React from "react"
import { Button, Icon } from "semantic-ui-react"

const commnonStyles = {
  color: "white",
  height: "96px",
  borderRadius: 0,
  fontSize: "11px",
}

export const DownloadPdf = ({ onClick }) => (
  <Button
    fluid
    onClick={onClick}
    style={{ ...commnonStyles, backgroundColor: "#50816F" }}
  >
    <Icon name="download" />
    DOWNLOAD PDF
  </Button>
)

export const Share = () => (
  <Button fluid style={{ ...commnonStyles, backgroundColor: "#3D4868" }}>
    <Icon name="share" />
    SHARE
  </Button>
)

export const DesignAnotherSpace = () => (
  <Button fluid style={{ ...commnonStyles, backgroundColor: "#6A6A6A" }}>
    <Icon name="home" />
    DESIGN ANOTHER SPACE
  </Button>
)
