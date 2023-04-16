import React from "react";
import Svg, { Path } from "react-native-svg"

function mapPin() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      fill="none"
      viewBox="0 0 24 25"
    >
      <Path
        stroke="#737373"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M20 10.43c0 6.364-8 11.819-8 11.819S4 16.794 4 10.43c0-2.17.843-4.25 2.343-5.785A7.91 7.91 0 0112 2.249c2.122 0 4.157.862 5.657 2.396A8.277 8.277 0 0120 10.43z"
      ></Path>
      <Path
        stroke="#737373"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 13.248a3 3 0 100-6 3 3 0 000 6z"
      ></Path>
    </Svg>
  );
}

export default mapPin;