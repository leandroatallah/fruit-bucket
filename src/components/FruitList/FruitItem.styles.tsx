import styled from "styled-components";

export const Box = styled.div`
  background-color: #3763ff;
  color: #fff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 15px 18px;
  min-width: 160px;
  min-height: 77px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  width: 100%;
  border-right: 1px solid #fff;
  padding: 4px 20px 4px 0;
`;

export const Heading = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
`;

export const Price = styled.div`
  font-size: 11px;
  line-height: 1.2;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  margin-left: 18px;

  &:hover {
    opacity: 0.8;
  }
`;
