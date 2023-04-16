import React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Clock() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <G clipPath="url(#clip0_1427_145725)">
        <Path
          fill="#667080"
          d="M6.873 13.053h5.117a.676.676 0 00.687-.686V5.763a.674.674 0 00-.687-.676.665.665 0 00-.676.676v5.928H6.873a.668.668 0 00-.687.676.67.67 0 00.687.686zM12 21.99c5.47 0 10-4.537 10-9.995C22 6.527 17.46 2 11.99 2 6.53 2 2 6.527 2 11.995c0 5.458 4.54 9.995 10 9.995zm0-1.666a8.291 8.291 0 01-8.324-8.329c0-4.625 3.687-8.33 8.314-8.33a8.308 8.308 0 018.343 8.33A8.3 8.3 0 0112 20.325z"
        ></Path>
      </G>
      <Defs>
        <ClipPath id="clip0_1427_145725">
          <Path fill="#fff" d="M0 0H20V20H0z" transform="translate(2 2)"></Path>
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Clock;