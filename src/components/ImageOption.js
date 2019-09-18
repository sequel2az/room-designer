import React from "react"
import { Image } from "semantic-ui-react"

const ImageOption = ({ src, label, selected, dark, onClick }) => (
  <div
    onClick={onClick}
    style={{
      cursor: "pointer",
      border: 0,
      borderRadius: 0,
      boxShadow: "none",
    }}
  >
    <Image
      src={src}
      style={{
        border: selected ? "solid 2px red" : 0,
      }}
    />
    <span style={{ color: dark ? "black" : "white" }}>{label}</span>
  </div>
)
export default ImageOption
