import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const EvaluationFilled = (props) => (
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
        d="M5.845 10.696c2.096 0 3.845-1.735 3.845-3.826 0-2.1-1.749-3.844-3.845-3.844C3.74 3.026 2 4.77 2 6.87c0 2.091 1.748 3.826 3.845 3.826Zm-.455-1.77c-.188 0-.312-.098-.446-.25l-1-1.2c-.089-.099-.115-.205-.115-.348a.45.45 0 0 1 .437-.462c.17 0 .294.07.41.222l.696.88L6.96 5.225c.107-.16.24-.249.401-.249.25 0 .464.196.464.418a.673.673 0 0 1-.116.365L5.845 8.676a.513.513 0 0 1-.455.25Zm6.967-1.38h8.956A.679.679 0 0 0 22 6.87a.677.677 0 0 0-.687-.667h-8.956a.671.671 0 1 0 0 1.344Zm0 10.286h8.956a.677.677 0 0 0 .687-.667.679.679 0 0 0-.687-.677h-8.956a.671.671 0 1 0 0 1.344ZM5.845 21c2.096 0 3.845-1.735 3.845-3.826 0-2.11-1.749-3.853-3.845-3.853C3.74 13.32 2 15.065 2 17.174 2 19.264 3.748 21 5.845 21Zm-.455-1.771c-.188 0-.312-.107-.446-.25l-1-1.21c-.089-.097-.115-.204-.115-.346 0-.258.196-.454.437-.454.17 0 .294.062.41.223l.696.88 1.588-2.544c.107-.17.24-.258.401-.258.25 0 .464.195.464.427a.646.646 0 0 1-.116.356L5.845 18.97a.503.503 0 0 1-.455.258Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M2 3h20v18H2z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default EvaluationFilled
