import styled from "styled-components";

export const ListItemContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 105px;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  gap: 20px;
`;

export const ImageContainer = styled("div")`
  height: 105px;
  width: 105px;
  border-radius: 15px;
`;
export const TextContainer = styled("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  height: 100%;
  span {
    display: block;
  }
  .cardTitle {
    color: #2b303a;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 8px;
  }
  .cardDescription {
    color: #3a3e48;
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 150% */
  }
`;
