import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const ReportFilled = (props) => (
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
        fill="#FE7F2D"
        d="M8.746 8.005c-.308 0-.533-.257-.533-.576 0-.31.225-.55.533-.55h6.517c.3 0 .524.24.524.55 0 .319-.225.576-.524.576H8.746Zm0 3.188c-.308 0-.533-.256-.533-.575 0-.31.225-.55.533-.55h6.517c.3 0 .524.24.524.55 0 .319-.225.575-.524.575H8.746Zm0 3.19c-.308 0-.533-.249-.533-.559 0-.319.225-.567.533-.567h3.08c.316 0 .532.248.532.567 0 .31-.216.558-.533.558h-3.08ZM5 19.218c0 1.85.857 2.772 2.58 2.772h8.84c1.723 0 2.58-.921 2.58-2.772V5.78C19 3.94 18.143 3 16.42 3H7.58C5.857 3 5 3.939 5 5.781V19.22Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M5 3h14v19H5z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ReportFilled
