import React from "react";
import Svg, { Path } from "react-native-svg"

function MapPin({Classdetail}) {

    const color = Classdetail ?  "#212427" : "#667080";
        
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M20 10.182C20 16.546 12 22 12 22s-8-5.454-8-11.818c0-2.17.843-4.251 2.343-5.786A7.91 7.91 0 0112 2c2.122 0 4.157.862 5.657 2.396A8.277 8.277 0 0120 10.182z"
      ></Path>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 13a3 3 0 100-6 3 3 0 000 6z"
      ></Path>
    </Svg>
  );
}

export default MapPin;