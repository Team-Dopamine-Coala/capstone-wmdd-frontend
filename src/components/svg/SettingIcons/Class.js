import React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Icon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <G clipPath="url(#clip0_1749_148167)">
        <Path
          fill="#667080"
          d="M3.719 26.667h24.574c2.475 0 3.707-1.204 3.707-3.589V8.945c0-2.385-1.232-3.589-3.707-3.589H3.72C1.244 5.356 0 6.55 0 8.945v14.133c0 2.396 1.244 3.589 3.719 3.589zm.023-1.864c-1.184 0-1.835-.613-1.835-1.817V9.037c0-1.203.651-1.817 1.835-1.817h24.516c1.172 0 1.835.614 1.835 1.817v13.949c0 1.204-.663 1.817-1.835 1.817H3.742zM0 21.157h4.832c1.575 0 2.487-.891 2.487-2.408v-5.487c0-1.516-.912-2.407-2.487-2.407H0v1.632h4.82c.521 0 .83.3.83.822v5.394c0 .52-.309.822-.83.822H0v1.632zm15.136 3.947h1.67V6.919h-1.67v18.185zm.817-3.635c3.34 0 5.637-2.222 5.601-5.463-.023-3.195-2.309-5.43-5.601-5.452-3.28-.035-5.567 2.188-5.567 5.452 0 3.24 2.286 5.463 5.567 5.463zm.011-1.55c-2.344 0-4.003-1.621-4.003-3.925 0-2.292 1.659-3.89 4.003-3.89 2.37 0 4.027 1.598 4.015 3.89-.012 2.304-1.67 3.924-4.014 3.924zM32 21.156v-1.632h-4.82c-.51 0-.817-.301-.817-.822v-5.394c0-.521.308-.822.817-.822H32v-1.632h-4.832c-1.575 0-2.475.891-2.475 2.407v5.487c0 1.517.9 2.408 2.475 2.408H32z"
        ></Path>
      </G>
      <Defs>
        <ClipPath id="clip0_1749_148167">
          <Path
            fill="#fff"
            d="M0 0H32V21.333H0z"
            transform="translate(0 5.333)"
          ></Path>
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Icon;