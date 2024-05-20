import { useMemo } from "react";
import { toast } from "react-toastify";

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

  const capacityPercentageText = useMemo(() => {
    if (capacityPercentage % 1 !== 0) {
      return capacityPercentage.toFixed(2);
    }

    return capacityPercentage;
  }, [capacityPercentage]);

  const bucketTotal = useMemo(
    () => bucket.fruits.reduce((acc, fruit) => acc + fruit.price, 0),
    [bucket.fruits]
  );

  const handleRemoveBucket = () => {
    if (bucket.fruits.length > 0) {
      toast.warning("Esvazie o balde antes de removê-lo.");
      return;
    }

    removeBucket(bucket.id);
  };

  return (
    <div data-testid="bucket-item">
      <S.Box>
        <S.Container>
          <div>
            <Flex align="center">
              <S.Heading>Balde {bucket.id}</S.Heading>
              <S.DeleteButton
                type="button"
                onClick={handleRemoveBucket}
                data-testid="delete-bucket"
              >
                <TrashIcon />
              </S.DeleteButton>
            </Flex>
            <S.Total>Total: {convertToCurrency(bucketTotal)}</S.Total>
          </div>
          <BucketFruitList items={bucket.fruits} bucketId={bucket.id} />
        </S.Container>
        <S.Filler $capacityPercentage={capacityPercentage} />
      </S.Box>
      <S.Capacity>
        Capacidade: {fruitCount} de {bucket.capacity} (
        {capacityPercentageText + "%"})
      </S.Capacity>
    </div>
  );
};

export default BucketItem;
