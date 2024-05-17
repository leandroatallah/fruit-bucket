import styled from "styled-components";

const Box = styled.div`
  background-color: #d1dbff;
  border-radius: 8px;
  padding: 20px 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media (min-width: 768px) {
    padding: 20px 28px 28px;
  }
`;

export default Box;
