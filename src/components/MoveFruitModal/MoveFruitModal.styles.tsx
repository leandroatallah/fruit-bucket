import styled from "styled-components";

export const Container = styled.div<{ visibled: boolean }>`
  display: ${(props) => (props.visibled ? "block" : "none")};
  position: absolute;
  width: 190px;
  padding: 18px 22px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px #00000040;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px 12px;
`;

export const ListItem = styled.div`
  background-color: #e5e5e5;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  height: 28px;
  width: 100%;
`;
