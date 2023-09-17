import { styled } from "styled-components";

export const StatsMeterContainer = styled("div")`
  span {
    color: #000;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px; /* 200% */
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
export const TickContainer = styled("div")`
  display: flex;
  gap: 10px;
`;
export const Tick = styled("div")<{ filled: string }>`
  width: 57px;
  height: 21px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  border-radius: 10px;
  background: ${(props) => (props.filled === "true" ? "#2B303A" : "#E1E6EF")};
`;
