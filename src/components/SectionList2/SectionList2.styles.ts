import styled from "styled-components";

export const SectionList2Container = styled("div")`
  width: 100%;
  max-width: 1150px;
  margin-left: auto;
  margin-right: auto;
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

  .subTitle {
    color: var(--oath-oath-8004-a-4458, #4a4458);
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`;

export const ListContainer = styled("div")`
  margin-top: 70px;
  width: 100%;
  max-width: 1150px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 1005px) {
    width: 100%;
  }
`;
