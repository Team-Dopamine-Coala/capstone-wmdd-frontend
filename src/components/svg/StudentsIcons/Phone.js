import React from "react"
import Svg, { Path } from "react-native-svg"

function Phone() {
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
        d="M22 16.92v3a2.001 2.001 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.499 19.499 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a1.999 1.999 0 012.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0122 16.92z"
      ></Path>
    </Svg>
  );
}
export default Phone;