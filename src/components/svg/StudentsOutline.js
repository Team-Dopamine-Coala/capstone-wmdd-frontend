import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const StudentsOutline = (props) => (
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
        d="M11.056 20H21.88c1.44 0 2.12-.424 2.12-1.358 0-2.224-2.852-5.441-7.532-5.441-4.67 0-7.523 3.217-7.523 5.44 0 .935.68 1.359 2.111 1.359Zm-.413-1.282c-.224 0-.31-.06-.31-.237 0-1.393 2.188-3.998 6.135-3.998 3.956 0 6.145 2.605 6.145 3.998 0 .178-.095.237-.32.237h-11.65Zm5.834-6.57c2.05 0 3.723-1.799 3.723-3.989 0-2.173-1.663-3.879-3.723-3.879-2.051 0-3.732 1.74-3.723 3.896.009 2.181 1.672 3.973 3.723 3.973Zm0-1.281c-1.258 0-2.335-1.189-2.335-2.691-.01-1.477 1.05-2.614 2.335-2.614 1.284 0 2.335 1.12 2.335 2.597 0 1.502-1.068 2.708-2.335 2.708ZM1.749 20h6.765c-.413-.23-.724-.738-.663-1.256H1.543c-.181 0-.259-.068-.259-.23 0-2.105 2.439-4.074 5.257-4.074 1.077 0 2.06.255 2.895.739.267-.34.586-.637.974-.9-1.112-.722-2.447-1.095-3.87-1.095-3.61 0-6.54 2.58-6.54 5.407C0 19.533.586 20 1.75 20Zm4.8-7.784c1.776 0 3.232-1.57 3.232-3.497 0-1.884-1.44-3.403-3.232-3.403-1.775 0-3.24 1.544-3.231 3.42 0 1.919 1.456 3.48 3.231 3.48Zm0-1.264c-1.06 0-1.947-.993-1.947-2.216 0-1.197.879-2.156 1.947-2.156 1.086 0 1.957.942 1.957 2.14 0 1.239-.897 2.232-1.957 2.232Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 4h24v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default StudentsOutline