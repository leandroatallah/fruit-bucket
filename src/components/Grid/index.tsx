import styled from "styled-components";

const Grid = styled.div`
  padding: 48px 16px;
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: 16px;
  border-radius: 8px;
  width: auto;
  max-width: 1024px;

  & > * {
    grid-column: col-start / span 12;
  }

  @media (min-width: 768px) {
    margin: 66px auto 0;
    background-color: #e5e5e5;
    padding: 42px 54px;
  }
`;

export default Grid;
