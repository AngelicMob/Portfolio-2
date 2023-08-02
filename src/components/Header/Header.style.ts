import styled from "styled-components";
import { Color } from "../../assets/colorVariables";

export const HeaderContainer = styled("div")`
  height: 100px;
  width: 100%;
  background-color: ${Color.background};
  color: "red";
`;
export const Content = styled("div")`
  height: 100%;
  margin-left: 100px;
  margin-right: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
  }
`;

export const Text = styled("span")<{ currentroute: number }>`
  color: ${Color.font};
  text-decoration: ${(props) => (props.currentroute ? "underline" : "none")};
  text-underline-offset: 8px;
  font-family: "Montserrat", sans-serif;
  font-size: 21px;
`;
