import styled from "styled-components";

interface FlexProps {
  gap?: number;
  alignItems?: string;
  justifyContent?: string;
  direction?: string;
  lgDirection?: string;
  wrap?: boolean;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: ${(props) => props.alignItems || "flex-start"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  gap: ${(props) => props.gap || 0}px;
  flex-direction: ${(props) => props.direction || "row"};
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};

  @media (min-width: 768px) {
    flex-direction: ${(props) => props.lgDirection || props.direction || "row"};
  }
`;

export default Flex;
