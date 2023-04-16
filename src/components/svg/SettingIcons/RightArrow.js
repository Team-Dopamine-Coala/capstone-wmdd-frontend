import React from "react";
import Svg, { Path, Defs, G, ClipPath } from "react-native-svg"

function RightArrow({Classdetail}) {

    const color = Classdetail ?  "#212427" : "#667080"
    const margin = Classdetail ? 16 :  null

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      marginRight={margin}
      marginLeft={margin}
    >
      <G clipPath="url(#clip0_1491_126769)">
        <Path 
          fill={color}
          d="M21.135 12.412a.896.896 0 00-.303-.654l-6.484-6.475c-.196-.185-.4-.273-.635-.273-.479 0-.86.351-.86.84 0 .234.088.468.245.615l2.187 2.226 3.867 3.526.205-.479-3.144-.195H3.859c-.507 0-.859.361-.859.87 0 .507.352.868.86.868h12.353l3.144-.195-.205-.488-3.867 3.535-2.187 2.226a.871.871 0 00-.245.616c0 .488.381.84.86.84.234 0 .44-.079.654-.294l6.465-6.455a.895.895 0 00.303-.654z"
        ></Path>
      </G>
      <Defs>
        <ClipPath id="clip0_1491_126769">
          <Path 
            fill="#fff"
            d="M0 0H18.135V14.815H0z"
            transform="rotate(-180 10.567 9.907)"
          ></Path>
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default RightArrow;