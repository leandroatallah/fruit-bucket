import { Flex, TrashIcon } from "@/components";
import { Bucket } from "@/interfaces/Bucket";

import * as S from "./BucketItem.styles";
import BucketFruitList from "./BucketFruitList";
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
        <Flex align="center">
          <S.Heading>Total: {convertToCurrency(bucketTotal)}</S.Heading>
          <S.DeleteButton type="button">
            <TrashIcon />
          </S.DeleteButton>
        </Flex>
        <BucketFruitList items={bucket.fruits} bucketId={bucket.id} />
      </S.Box>
      <S.Capacity>Capacidade: {capacityPercentage.toFixed(2)}%</S.Capacity>
    </div>
  );
};

export default BucketItem;
