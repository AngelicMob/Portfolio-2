import { styled } from "styled-components";
import { Color } from "../../../assets/colorVariables";

export const MainLayoutContainer = styled("div")`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  min-height: 80%;
  background-color: ${Color.background};
`;

export const ExBox = styled("div")`
  height: 150px;
  width: 150px;
  background: red;
  position: fixed;

  bottom: 50px;
  left: 20px;
`;
