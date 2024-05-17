import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3763ff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  color: #fff;
  min-height: 40px;
  cursor: pointer;

  &:hover {
    background-color: #2f5be0;
  }
`;

export default Button;
