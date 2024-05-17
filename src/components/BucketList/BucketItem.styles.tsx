import styled from "styled-components";

export const Box = styled.div`
  background-color: #3763ff;
  color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 250px;
  padding: 10px 10px 14px;

  @media (min-width: 768px) {
    padding: 14px 14px 18px;
  }
`;

export const Heading = styled.h3`
  width: 100%;
  font-size: 14px;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;

  &:hover {
    opacity: 0.8;
  }
`;

export const Capacity = styled.div`
  margin-top: 8px;
  padding-left: 2px;
  font-size: 13px;
`;
