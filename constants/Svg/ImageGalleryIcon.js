import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ImageGalleryIcon = (props) => (
  <Svg
    {...props}
    width={24}
    height={24}
    color={props.color}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M16.744 1.667a.555.555 0 0 0-.555-.556H3.967a.556.556 0 0 0-.556.556v.555h13.333v-.555ZM17.844 3.889a.555.555 0 0 0-.555-.556H2.844a.556.556 0 0 0-.555.556v.555h15.555V3.89ZM17.844 5.556H2.156A1.044 1.044 0 0 0 1.11 6.6v10.133a1.045 1.045 0 0 0 1.045 1.045h15.688a1.045 1.045 0 0 0 1.045-1.045V6.6a1.044 1.044 0 0 0-1.045-1.044ZM4.756 7.472a1.667 1.667 0 1 1 0 3.334 1.667 1.667 0 0 1 0-3.334Zm11.91 8.084H3.334l4.145-4.15a.394.394 0 0 1 .555 0l2.045 2.044 2.816-2.894a.395.395 0 0 1 .556 0l3.217 3.216v1.784Z"
      fill={props.color}
    />
  </Svg>
)

export default ImageGalleryIcon
