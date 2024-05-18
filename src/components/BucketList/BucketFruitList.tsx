import { Flex } from "@/components";
import { Bucket } from "@/interfaces/Bucket";
import { Fruit } from "@/interfaces/Fruit";

import BucketFruitItem from "./BucketFruitItem";

interface BucketFruitListProps {
  items: Fruit[];
  bucketId: Bucket["id"];
}

const BucketFruitList = ({ items, bucketId }: BucketFruitListProps) => {
  return (
    <Flex direction="column" gap={13}>
      {items?.map((fruit) => (
        <BucketFruitItem key={fruit.id} fruit={fruit} bucketId={bucketId} />
      ))}
    </Flex>
  );
};

export default BucketFruitList;
