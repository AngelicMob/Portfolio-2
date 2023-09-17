import styled from "styled-components";

export const CardContainer = styled("div")`
  max-width: 1150px;
  height: 196px;
  width: 100%;
  border-radius: 21px;
  background: #fff;
  padding: 30px 60px;
  box-sizing: border-box;
  display: flex;
  gap: 20px;

  @media (max-width: 1005px) {
    flex-direction: column;
    padding: 30px 30px;

    height: auto;
  }
`;

export const ImageContainer = styled("div")`
  height: 130px;
  width: 130px;
`;
export const TextContainer = styled("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  height: 100%;
  gap: 8px;
  span {
    display: block;
  }
  .cardTitle {
    color: #2b303a;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
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
