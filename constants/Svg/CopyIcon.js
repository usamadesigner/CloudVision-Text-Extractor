import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const CopyIcon = (props) => (
  <Svg
    {...props}
    width={24}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <G filter="url(#a)" fill="#fff">
      <Path d="M17 1.978a.867.867 0 0 0-.872-.867H5.094a.867.867 0 0 0-.872.867V15.8a.866.866 0 0 0 .872.867h.29V2.26H17v-.283Z" />
      <Path d="M18.389 3.333H7.278a.833.833 0 0 0-.834.834v13.889c0 .46.374.833.834.833h11.11c.461 0 .834-.373.834-.833V4.166a.833.833 0 0 0-.833-.833Z" />
    </G>
    <Defs></Defs>
  </Svg>
)

export default CopyIcon
