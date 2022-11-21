import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Tick = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m4.125 13.125 5.25 5.25 10.5-11.25"
      stroke={props.color || '#000'}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default Tick
