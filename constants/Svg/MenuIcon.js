import * as React from "react"
import Svg, { Path } from "react-native-svg"

const MenuIcon = (props) => (
  <Svg
    {...props}
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M22 18.005c0 .55-.446.995-.995.995h-8.01a.995.995 0 1 1 0-1.99h8.01c.55 0 .995.445.995.995ZM22 12c0 .55-.446.995-.995.995H2.995a.995.995 0 1 1 0-1.99h18.01c.55 0 .995.446.995.995Zm-.995-5.01a.995.995 0 1 0 0-1.99H8.995a.995.995 0 0 0 0 1.99h12.01Z"
      fill="#000"
    />
  </Svg>
)

export default MenuIcon
