import styled from "styled-components";

export const Box = styled.div`
  background-color: #fff;
  color: #000;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Heading = styled.h4`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
`;

export const Price = styled.span`
  font-size: 14px;
`;
