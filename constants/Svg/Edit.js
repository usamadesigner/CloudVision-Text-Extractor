import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Edit = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16.103 3.013a3.453 3.453 0 1 1 4.884 4.883L19.885 9 15 4.115l1.103-1.102ZM14.116 5 4.02 15.099c-.38.38-.652.857-.786 1.378L2.019 21.22a.625.625 0 0 0 .76.76l4.744-1.212a3.003 3.003 0 0 0 1.38-.786L19 9.884l-4.883-4.885Z"
      fill={props.color || '#000'}
    />
  </Svg>
)

export default Edit
