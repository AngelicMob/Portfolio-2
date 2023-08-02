import styled from "styled-components";

export const DesignPhaseContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1150px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  gap: 50px;
`;

export const Title = styled("span")`
  width: 100%;
  color: var(--oath-oath-900292336, #292336);
  font-family: Montserrat;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
`;

export const InitialCardContainer = styled("div")`
  max-height: 180px;
  max-width: 808px;
  width: 100%;
  border-radius: 21px;
  background: #fbfbfd;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  box-sizing: border-box;
`;

export const DottedListContainer = styled("div")`
  max-height: 180px;
  max-width: 808px;
  width: 100%;
  border-radius: 21px;
  background: #fbfbfd;
`;
