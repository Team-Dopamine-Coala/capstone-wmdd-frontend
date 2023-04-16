import React from "react" 
import Svg, { G, Path, Defs, ClipPath} from "react-native-svg"

function Calendar() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      marginRight={8}
    >
      <G clipPath="url(#clip0_1427_145724)">
        <Path
          fill="#000000"
          d="M5.151 21h13.708C20.956 21 22 19.984 22 17.972V6.047c0-2.012-1.044-3.027-3.141-3.027H5.15C3.054 3.02 2 4.026 2 6.047v11.925C2 19.994 3.054 21 5.151 21zm-.15-1.572c-.894 0-1.385-.46-1.385-1.368V8.85c0-.898.491-1.367 1.384-1.367h13.99c.893 0 1.394.469 1.394 1.367v9.21c0 .909-.502 1.368-1.395 1.368H5zm5.047-8.439h.592c.351 0 .462-.098.462-.44v-.576c0-.341-.11-.449-.462-.449h-.592c-.351 0-.471.108-.471.45v.576c0 .341.12.44.471.44zm3.332 0h.592c.351 0 .472-.098.472-.44v-.576c0-.341-.12-.449-.472-.449h-.592c-.351 0-.472.108-.472.45v.576c0 .341.12.44.472.44zm3.332 0h.592c.35 0 .471-.098.471-.44v-.576c0-.341-.12-.449-.471-.449h-.592c-.352 0-.462.108-.462.45v.576c0 .341.11.44.462.44zm-9.995 3.194h.582c.36 0 .471-.098.471-.44v-.576c0-.342-.11-.44-.471-.44h-.583c-.36 0-.471.098-.471.44v.576c0 .342.11.44.471.44zm3.331 0h.592c.351 0 .462-.098.462-.44v-.576c0-.342-.11-.44-.462-.44h-.592c-.351 0-.471.098-.471.44v.576c0 .342.12.44.471.44zm3.332 0h.592c.351 0 .472-.098.472-.44v-.576c0-.342-.12-.44-.472-.44h-.592c-.351 0-.472.098-.472.44v.576c0 .342.12.44.472.44zm3.332 0h.592c.35 0 .471-.098.471-.44v-.576c0-.342-.12-.44-.471-.44h-.592c-.352 0-.462.098-.462.44v.576c0 .342.11.44.462.44zm-9.995 3.203h.582c.36 0 .471-.107.471-.449v-.576c0-.342-.11-.44-.471-.44h-.583c-.36 0-.471.098-.471.44v.576c0 .342.11.45.471.45zm3.331 0h.592c.351 0 .462-.107.462-.449v-.576c0-.342-.11-.44-.462-.44h-.592c-.351 0-.471.098-.471.44v.576c0 .342.12.45.471.45zm3.332 0h.592c.351 0 .472-.107.472-.449v-.576c0-.342-.12-.44-.472-.44h-.592c-.351 0-.472.098-.472.44v.576c0 .342.12.45.472.45z"
        ></Path>
      </G>
      <Defs>
        <ClipPath id="clip0_1427_145724">
          <Path fill="#fff" d="M0 0H20V18H0z" transform="translate(2 3)"></Path>
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default Calendar;