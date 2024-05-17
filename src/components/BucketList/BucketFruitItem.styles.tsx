import styled from "styled-components";

export const Box = styled.div`
  position: relative;
  background-color: #fff;
  color: #000;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  width: 100%;
  overflow: hidden;

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

export const ActionList = styled.div`
  background-color: #d1dbff;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 12px 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(100%);
  transition: transform 0.2s ease;

  ${Box}:hover & {
    transform: translateX(0);
  }

  @media (min-width: 768px) {
    width: auto;
  }
`;

export const ActionButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover > svg {
    opacity: 0.5;
  }
`;
