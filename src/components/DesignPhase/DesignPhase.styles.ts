import styled from "styled-components";

export const DesignPhaseContainer = styled("div")`
  display: flex;
  gap: 25px;
  flex-direction: column;
  max-width: 1150px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
`;

export const SectionTitle = styled("div")`
  width: 100%;
  text-align: left;
  margin-bottom: 60px;
  span {
    color: var(--oath-oath-900292336, #292336);
    font-family: Montserrat;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
  }
`;

export const InitialCard = styled("div")`
  max-width: 808px;
  min-height: 177px;
  width: 100%;
  border-radius: 21px;
  background: #fbfbfd;
  padding: 8px 50px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  .initiacardData {
    color: var(--neutral-grey-300-default-2-b-303-a, #2b303a);
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`;

export const DotListCardContainer = styled("div")`
  display: flex;
  flex-direction: column;
  max-width: 808px;
  min-height: 177px;
  width: 100%;
  border-radius: 21px;
  background: #fbfbfd;
  gap: 30px;
`;

export const DottedListItemContainer = styled("div")`
  display: flex;
`;

export const DottedListItemDot = styled("div")`
  display: flex;
  width: 150px;
  min-height: 200px;
  height: auto;
  justify-content: flex-start;
  padding: 45px;
  box-sizing: border-box;
  @media (max-width: 1005px) {
    display: none;
  }
`;
export const DottedListItemContent = styled("div")`
  display: flex;
  flex: 1;
  min-height: 200px;
  height: auto;
  padding: 45px;
  box-sizing: border-box;
  .first-item,
  .second-item,
  .third-item,
  .fourth-item {
    span,
    ul,
    p {
      color: var(--oath-oath-8004-a-4458, #4a4458);
      font-family: Open Sans;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
    }
  }

  .first-item {
    span {
      font-size: 18px;
    }
  }

  .second-item-ul {
    li {
      margin-bottom: 10px;
    }
  }
`;

export const ContentContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
