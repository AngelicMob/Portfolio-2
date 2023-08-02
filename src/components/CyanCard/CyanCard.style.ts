import styled from "styled-components";

export const CyanCardContainer = styled("div")`
  display: flex;
  flex-direction: column;
  max-width: 1150px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
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

export const CyanCard = styled("div")`
  height: 196px;
  width: 100%;
  border-radius: 21px;
  background: #fff;
  padding: 30px 60px;
  box-sizing: border-box;
  display: flex;
  gap: 20px;

  border-radius: 21px;
  background: #c5f7ed;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .intro {
    color: var(--neutral-grey-5003-a-3-e-48, #3a3e48);
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
  }
  .title {
    color: #2b303a;
    font-family: Montserrat;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
  }

  .desc {
    color: var(--neutral-grey-300-default-2-b-303-a, #2b303a);
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`;
