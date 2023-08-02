import styled from "styled-components";
import { Color } from "../../assets/colorVariables";

export const FooterContainer = styled("div")`
  width: 100%;
  min-height: 100px;
  background-color: ${Color.background};

  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

export const Content = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    width: 80px;
    justify-content: space-between;
  }
`;
export const Text = styled("span")`
  color: ${Color.font};
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
`;
