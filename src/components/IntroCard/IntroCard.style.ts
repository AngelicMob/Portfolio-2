import styled from "styled-components";

export const IntroCardContainer = styled("div")`
  width: 100%;
  max-width: 1150px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  @media (max-width: 1005px) {
    flex-direction: column-reverse;
  }
`;

export const TextContainer = styled("div")`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  margin-right: 10px;
  padding-right: 20px;
  .intro-heding {
    color: var(--oath-oath-900292336, #292336);
    font-family: Open Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px; /* 100% */
    white-space: pre-line;
  }
  .hello {
    color: var(--oath-oath-900292336, #292336);
    font-family: Montserrat;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    white-space: pre-line;
  }
  .description {
    color: var(--oath-oath-8004-a-4458, #4a4458);
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 187.5% */
    white-space: pre-line;
    margin-bottom: 30px;
  }
`;
export const ImageContainer = styled("div")`
  width: 300px;
  height: 300px;
  border-radius: 15px;
  img {
    border-radius: 15px;
    background-position: center;
    object-fit: cover;
  }
`;
