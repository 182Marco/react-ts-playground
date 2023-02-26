import styled from "styled-components";
import logo from "./../../logo.svg";
import { mySpin } from "./animations";

export const SpinningLogo = styled.img.attrs({
  src: logo,
  alt: "logo",
})`
  height: 100px;
  width: 100px;
  animation: ${mySpin} infinite 1s linear;
`;

export default SpinningLogo;
