import styled from "styled-components";

export const SnowManSectionContainer = styled("div")`
  margin-top: 120px;
  margin-bottom: 120px;
  width: 70%;
  max-width: 1150px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  gap: 40px;
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
  width: 100%;
  aspect-ratio: 1/1;
`;
