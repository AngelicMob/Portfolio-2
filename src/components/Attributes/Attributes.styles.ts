import { styled } from "styled-components";

export const AttributesContainer = styled("div")`
  width: 100%;
  max-width: 1150px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 100px;
  padding-bottom: 100px;
  box-sizing: border-box;

  span {
    white-space: pre-line;
    display: block;
  }

  .title {
    color: #2b303a;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
  }

  @media (max-width: 1005px) {
    padding-bottom: 0px;
  }
`;

export const StatsContainer = styled("div")`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 1005px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Container = styled("div")`
  width: 50%;
  height: auto;
  padding: 25px;
  box-sizing: border-box;

  .sectionTitle {
    margin-bottom: 50px;
    margin-bottom: 50px;
    color: var(--oath-oath-900292336, #292336);
    font-family: Montserrat;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px; /* 114.286% */
  }

  @media (max-width: 1005px) {
    width: 100%;
  }
`;
