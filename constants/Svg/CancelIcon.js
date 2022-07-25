import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CancelIcon = (props) => (
  <Svg
    {...props}
    width={24}
    height={24}
    fill="none"
    color={props.color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="m10 10 4.37 4.37m-8.738 0L10 10l-4.37 4.37Zm8.738-8.74L10 10l4.37-4.37ZM10 10 5.632 5.63 10 10Z"
      stroke="#4F4F4F"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default CancelIcon
