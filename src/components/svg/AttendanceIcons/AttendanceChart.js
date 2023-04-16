import React from "react";
import Svg, { G, Path, Circle } from "react-native-svg"

function AttendanceChart({completed, color}) {
    
console.log(color)
    const colors = completed ? color : '#BFC2C6'
    const opacity = completed ? 0.8 : 0.2
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="88"
      height="88"
      fill="none"
      viewBox="0 0 88 88"
    >
      <G stroke={colors} opacity={opacity}>
        <Path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="6"
          d="M59.945 33L38.67 54.275 29 44.605"
        ></Path>
        <Circle cx="44" cy="44" r="39.625" strokeWidth="8.75"></Circle>
      </G>
    </Svg>
  );
}

export default AttendanceChart