import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Undo = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 16c1.671 0 3-1.331 3-3s-1.329-3-3-3-3 1.331-3 3 1.329 3 3 3Z"
      fill="#000"
    />
    <Path
      d="M20.817 11.186a8.94 8.94 0 0 0-1.355-3.219 9.053 9.053 0 0 0-2.43-2.43 8.95 8.95 0 0 0-5.057-1.535V2L8 5l3.975 3V6.002a6.961 6.961 0 0 1 3.937 1.193 7.004 7.004 0 0 1 1.894 9.718 7.028 7.028 0 0 1-4.394 2.946 7.13 7.13 0 0 1-2.822 0A7.002 7.002 0 0 1 5 13H3a9.02 9.02 0 0 0 1.539 5.034 9.096 9.096 0 0 0 2.428 2.428A8.95 8.95 0 0 0 12 22c.61 0 1.217-.061 1.814-.183a9.014 9.014 0 0 0 5.649-3.786A8.952 8.952 0 0 0 21 13c0-.61-.061-1.217-.183-1.814Z"
      fill="#000"
    />
  </Svg>
)

export default Undo