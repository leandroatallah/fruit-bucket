import { Flex, TrashIcon } from "@/components";
import { Bucket } from "@/interfaces/Bucket";
import useAppStore from "@/store/appStore";
import { convertToCurrency } from "@/utils";

import * as S from "./BucketItem.styles";
import BucketFruitList from "./BucketFruitList";

interface BucketItemProps {
  bucket: Bucket;
}

const BucketItem = ({ bucket }: BucketItemProps) => {
  const { removeBucket } = useAppStore();

  const fruitCount = bucket.fruits?.length || 0;
  const capacityPercentage = (fruitCount / bucket.capacity) * 100;
  const bucketTotal = bucket.fruits.reduce(
    (acc, fruit) => acc + fruit.price,
    0
  );

  const handleRemoveBucket = () => {
    removeBucket(bucket.id);
  };

  return (
    <div>
      <S.Box>
        <div>
          <Flex align="center">
            <S.Heading>Balde {bucket.id}</S.Heading>
            <S.DeleteButton type="button" onClick={handleRemoveBucket}>
              <TrashIcon />
            </S.DeleteButton>
          </Flex>
          <S.Total>Total: {convertToCurrency(bucketTotal)}</S.Total>
        </div>
        <BucketFruitList items={bucket.fruits} bucketId={bucket.id} />
      </S.Box>
      <S.Capacity>Capacidade: {capacityPercentage.toFixed(2)}%</S.Capacity>
    </div>
  );
};

export default BucketItem;
