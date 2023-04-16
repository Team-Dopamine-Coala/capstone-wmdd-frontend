import React from "react";
import Svg, { G, Path, Defs, ClipPath} from "react-native-svg"

function Search() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 17 17"
      marginRight={16}
    >
      <G clipPath="url(#clip0_3753_209795)">
        <Path
          fill="#737373"
          d="M.667 7.16a6.502 6.502 0 006.494 6.495c1.416 0 2.71-.456 3.776-1.22l4.004 4.011a.958.958 0 00.692.277c.553 0 .935-.415.935-.96a.934.934 0 00-.268-.668l-3.98-4.004a6.418 6.418 0 001.335-3.93A6.502 6.502 0 007.161.667 6.502 6.502 0 00.667 7.16zm1.391 0a5.105 5.105 0 015.103-5.102 5.105 5.105 0 015.102 5.103 5.105 5.105 0 01-5.102 5.102 5.105 5.105 0 01-5.103-5.102z"
        ></Path>
      </G>
      <Defs>
        <ClipPath id="clip0_3753_209795">
          <Path
            fill="#fff"
            d="M0 0H15.902V16.056H0z"
            transform="translate(.667 .667)"
          ></Path>
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default Search;