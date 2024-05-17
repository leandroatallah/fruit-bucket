import styled from "styled-components";

interface FlexProps {
  gap?: number;
  align?: string;
  justify?: string;
  direction?: string;
  $lgDirection?: string;
  wrap?: boolean;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: ${(props) => props.align || "flex-start"};
  justify-content: ${(props) => props.justify || "flex-start"};
  gap: ${(props) => props.gap || 0}px;
  flex-direction: ${(props) => props.direction || "row"};
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};

  @media (min-width: 768px) {
    flex-direction: ${(props) =>
      props.$lgDirection || props.direction || "row"};
  }
`;

export default Flex;
