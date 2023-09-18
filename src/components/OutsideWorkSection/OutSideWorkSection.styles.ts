import styled from "styled-components";

export const OutSideWorkSectionContainer = styled("div")`
  display: flex;
  gap: 35px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1150px;
  width: 100%;

  margin-top: "50px";
  margin-bottom: "50px";
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled("div")`
  color: var(--oath-oath-900292336, #292336);
  font-family: Montserrat;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 114.286% */
  max-width: 1000px;
  width: 100%;
  text-align: left;
`;

export const Content = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 900px;
  width: 100%;
`;

export const Description = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: var(--oath-oath-7006-b-6278, #6b6278);
  font-family: Open Sans;
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 152.381% */
  width: 50%;

  @media (max-width: 1005px) {
    width: 100%;
  }
`;
export const ImageContainer = styled("div")`
  width: 50%;
  @media (max-width: 1005px) {
    display: none;
  }
`;
