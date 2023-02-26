import styled from "styled-components";
import { col1, col2, defaultCol } from "./colors";
import { BtnProps } from "./interfaces";

export const Btn = styled.button<BtnProps>`
  border: ${`2px solid ${defaultCol}`};
  border-color: ${p => (p.col ? p.col : defaultCol)};
  color: ${({ col }) => (col ? col : defaultCol)};
  border-radius: 30px;
`;

export const LandingBtn = styled(Btn)`
  background-image: ${`linear-gradient(to right, ${col1} 0%, ${col2} 100%)`};
  color: #fff;
  font-weight: 700;
  border: none;
  display: inline-block;
  margin-top: 17px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-image: ${`linear-gradient(to right, ${col2} 0%, ${col1} 100%)`};
  }
`;

export const DarkBtn = styled(Btn)`
  border: 2px solid ${p => p.theme.dark.text};
  color: ${p => p.theme.dark.text};
  background-color: ${p => p.theme.dark.primary};
`;

export const SubmitBtn = styled(Btn).attrs({
  type: "submit",
})``;

export default Btn;
