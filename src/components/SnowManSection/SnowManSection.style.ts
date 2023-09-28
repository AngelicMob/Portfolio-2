import styled from "styled-components";

export const SnowManSectionContainer = styled("div")`
  margin-top: 120px;
  margin-bottom: 120px;

  max-width: 1150px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  gap: 40px;

  @media (max-width: 1005px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SnowManContainer = styled("div")`
  height: 400px;
  width: 355px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  .cardTitle {
    color: #000;
    text-align: center;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
  }
  :hover {
    text-decoration: underline;
    text-underline-offset: 8px;
  }
`;

export const ImageContainer = styled("div")`
  min-width: 355px;
  min-height: 355px;
  max-width: 355px;
  max-height: 355px;
`;
