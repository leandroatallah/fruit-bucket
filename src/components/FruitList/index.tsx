import styled from "styled-components";

import { Flex } from "@/components";
import useAppStore from "@/store/appStore";

import FruitItem from "./FruitItem";

const EmptyList = styled.div`
  min-height: 77px;
  display: flex;
  align-items: center;
`;

const FruitList = () => {
  const { fruits } = useAppStore(({ fruits }) => ({
    fruits,
  }));

  if (!fruits.length) {
    return <EmptyList>Não há frutas não alocadas.</EmptyList>;
  }

  return (
    <Flex gap={15}>
      {fruits.map((item) => (
        <FruitItem key={item.id} fruit={item} />
      ))}
    </Flex>
  );
};

export default FruitList;
