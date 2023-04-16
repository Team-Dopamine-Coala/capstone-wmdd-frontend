import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const CurriculumOutline = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width='100%'
    height='100%'
    fill="none"
    {...props}
    viewBox="0 0 33 33"
  >
    <G clipPath="url(#a)">
      <Path
        fill="#667080"
        d="M6.738 22h11.549c.392 0 .713-.31.713-.71a.737.737 0 0 0-.5-.682c-1.123-.443-1.355-1.888-.25-2.997.34-.337.75-.771.75-1.658V5.784C19 3.94 18.081 3 16.235 3h-9.47C4.919 3 4 3.93 4 5.784V19.26C4 21.087 4.927 22 6.738 22Zm-1.302-5.125V5.811c0-.887.472-1.384 1.391-1.384h9.337c.927 0 1.4.497 1.4 1.384v9.947c0 .48-.276.754-.776.754H6.89c-.58 0-1.06.124-1.453.363Zm1.382 3.698c-.9 0-1.382-.48-1.382-1.321 0-.798.57-1.313 1.462-1.313h9.15c.116 0 .223-.009.312-.026-.419.922-.348 1.897.125 2.66H6.818Zm-.33-3.299h1.168V4.082H6.488v13.192Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M4 3h15v19H4z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default CurriculumOutline
