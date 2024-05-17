import { Bucket } from "@/interfaces/Bucket";

import * as S from "./BucketItem.styles";
import BucketFruitList from "./BucketFruitList";
import { Flex, TrashIcon } from "..";
import { convertToCurrency } from "@/utils";

interface BucketItemProps {
  bucket: Bucket;
}

const BucketItem = ({ bucket }: BucketItemProps) => {
  const fruitCount = bucket.fruits?.length || 0;
  const capacityPercentage = (fruitCount / bucket.capacity) * 100;
  const bucketTotal = bucket.fruits.reduce(
    (acc, fruit) => acc + fruit.price,
    0
  );

  return (
    <div>
      <S.Box>
        <Flex alignItems="center">
          <S.Heading>Total: {convertToCurrency(bucketTotal)}</S.Heading>
          <S.DeleteButton>
            <TrashIcon />
          </S.DeleteButton>
        </Flex>
        <BucketFruitList items={bucket.fruits} />
      </S.Box>
      <S.Capacity>Capacidade: {capacityPercentage}%</S.Capacity>
    </div>
  );
};

export default BucketItem;