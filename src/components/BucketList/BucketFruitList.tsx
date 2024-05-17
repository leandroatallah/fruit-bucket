import { Flex } from "@/components";
import { Fruit } from "@/interfaces/Fruit";

import BucketFruitItem from "./BucketFruitItem";

interface BucketFruitListProps {
  items: Fruit[];
}

const BucketFruitList = ({ items }: BucketFruitListProps) => {
  return (
    <Flex direction="column" gap={13}>
      {items?.map((fruit) => (
        <BucketFruitItem key={fruit.id} fruit={fruit} />
      ))}
    </Flex>
  );
};

export default BucketFruitList;
