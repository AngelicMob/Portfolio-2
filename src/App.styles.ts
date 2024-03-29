import { styled } from "styled-components";
import { Color } from "./assets/colorVariables";

export const AppContainer = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${Color.background};
`;

export const Content = styled("div")`
  overflow-y: scroll;
  overflow-x: hidden;
`;
