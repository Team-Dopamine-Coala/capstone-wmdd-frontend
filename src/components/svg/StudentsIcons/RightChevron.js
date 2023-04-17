import React from "react";
import Svg, { Path } from "react-native-svg"

function RightChevron({classIndex}) {
    
    const marginright = classIndex ? 10: null;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      marginRight={marginright}
    >
      <Path
        stroke="#1A1A1A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 18l6-6-6-6"
      ></Path>
    </Svg>
  );
}
export default RightChevron;