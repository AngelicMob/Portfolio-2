import styled from "styled-components";

export const SectionList1Container = styled("div")`
  width: 50%;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  span {
    white-space: pre-line;
    display: block;
  }

  .title {
    color: #2b303a;
    font-family: Montserrat;
    font-size: 38px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px; /* 126.316% */
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
  width: 80%;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1005px) {
    width: 100%;
  }
`;
