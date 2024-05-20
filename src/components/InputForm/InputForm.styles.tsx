import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 4px;
`;

export const Input = styled.input<{ prefixOffset?: number }>`
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  padding: 8px 12px;
  width: 100%;
  background-color: #fff;
  height: 40px;
  ${({ prefixOffset }) => prefixOffset && `padding-left: ${prefixOffset}px;`}
`;

export const PrefixText = styled.span`
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  font-size: 16px;
  color: #999;
  pointer-events: none;
`;
