import { styled } from "styled-components";
import { Color } from "../../../assets/colorVariables";

export const MainLayoutContainer = styled("div")`
  width: 100%;
  flex: 1;
  padding: 10px;
  box-sizing: border-box;
  min-height: 80%;
  background-color: ${Color.background};
`;
