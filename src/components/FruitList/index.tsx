import { Fruit } from "@/interfaces/Fruit";
import FruitItem from "./FruitItem";
import Flex from "../Flex";

interface FruitListProps {
  items: Fruit[];
}

const FruitList = ({ items }: FruitListProps) => {
  if (!items.length) {
    return <div>Não há frutas</div>;
  }

  return (
    <Flex gap={15}>
      {items.map((item) => (
        <FruitItem key={item.id} fruit={item} />
      ))}
    </Flex>
  );
};

export default FruitList;
