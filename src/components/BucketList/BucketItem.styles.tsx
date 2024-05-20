import styled from "styled-components";

export const Box = styled.div`
  position: relative;
  background-color: #3763ff;
  color: #fff;
  border-radius: 4px;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  min-height: 250px;
  padding: 10px 10px 14px;
  z-index: 2;

  @media (min-width: 768px) {
    padding: 14px 14px 18px;
  }
`;

export const Filler = styled.div<{ $capacityPercentage: number }>`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #2b4bd8;
  border-radius: 0 0 4px 4px;
  height: ${({ $capacityPercentage: cP }) => `${cP}%`};
  transition: height 0.25s;
  opacity: 0.75;
  z-index: 1;
`;

export const Heading = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin: 0;
  width: 100%;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Total = styled.h3`
  font-size: 14px;
  margin: 8px 0 0;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  transform: scale(0.8);

  &:hover {
    opacity: 0.8;
  }
`;

export const Capacity = styled.div`
  margin-top: 8px;
  padding-left: 2px;
  font-size: 13px;
`;
