import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CameraIcon = (props) => (
  <Svg
    {...props}
    width={21}
    height={20}
    fill={props.color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M2.722 4.444h4.056l.589-1.51A1.111 1.111 0 0 1 8.4 2.221h4.2a1.111 1.111 0 0 1 1.039.711l.583 1.511h4.056a1.11 1.11 0 0 1 1.11 1.112v11.11a1.11 1.11 0 0 1-1.11 1.112H2.722a1.111 1.111 0 0 1-1.11-1.111V5.556a1.111 1.111 0 0 1 1.11-1.112Zm14.35 3.128a.445.445 0 0 0 0-.889H15.74a.445.445 0 0 0 0 .89h1.333ZM10.5 15.556a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
      fill={props.color}
    />
    <Path
      d="M14.328 10.589a3.927 3.927 0 0 1-2.284 3.561l-.605-.967a2.776 2.776 0 0 0 1.27-4.023 2.778 2.778 0 0 0-4.17-.638l-.606-.978a3.922 3.922 0 0 1 6.395 3.045Z"
      fill={props.color}
    />
  </Svg>
)

export default CameraIcon;
