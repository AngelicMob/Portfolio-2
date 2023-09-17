import styled from "styled-components";

export const HomeContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 0px 30px;
`;

export const Quote = styled("div")`
  margin-top: 70px;
  background: linear-gradient(90deg, #167a74 0%, #5b5b5b 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  white-space: break-spaces;
  font-family: Montserrat;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 125% */
  letter-spacing: -0.64px;
  /* @media (max-width: 1005px) {
    height: 300px;
  } */
`;

export const Section = styled("section")`
  width: 100%;
`;
