import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ImageIcon = (props) => (
  <Svg
    {...props}
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M14.998 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM20.998 28l-3-4-6 8h24l-9-12-6 8Z"
      fill="#4F4F4F"
    />
    <Path
      d="M39.998 8h-32c-2.206 0-4 1.794-4 4v24c0 2.206 1.794 4 4 4h32c2.206 0 4-1.794 4-4V12c0-2.206-1.794-4-4-4Zm-32 28V12h32l.004 24H7.998Z"
      fill="#4F4F4F"
    />
  </Svg>
)

export default ImageIcon
