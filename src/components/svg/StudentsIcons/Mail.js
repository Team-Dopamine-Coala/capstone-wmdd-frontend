import React from "react"
import Svg, { Path } from "react-native-svg"

function Mail() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      marginRight={16}
    >
      <Path
        stroke="#667080"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      ></Path>
      <Path
        stroke="#667080"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M22 6l-10 7L2 6"
      ></Path>
    </Svg>
  );
}
export default Mail;