import * as React from "react"
import Svg, { Path } from "react-native-svg"
const FlashOn = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M10 23v-9H7V2h10l-4 9h4l-7 12Z" fill="#000" />
  </Svg>
)

export default FlashOn
