import { useState } from "react";

import { Bucket } from "@/interfaces/Bucket";
import { Fruit } from "@/interfaces/Fruit";
import useAppStore from "@/store/appStore";
import { convertToCurrency } from "@/utils";

import * as S from "./BucketFruitItem.styles";
import { Flex, MoveFruitModal, PlusIcon, XIcon } from "@/components";

interface BucketFruitItemProps {
  fruit: Fruit;
  bucketId: Bucket["id"];
}

const BucketFruitItem = ({ fruit, bucketId }: BucketFruitItemProps) => {
  const { removeFruitFromBucket } = useAppStore();

  const [visibled, setVisibled] = useState(false);

  const handleOnClickAddButton = () => {
    setVisibled(true);
  };

  const handleOnClickRemoveButton = () => {
    removeFruitFromBucket(fruit.id, bucketId);
  };

  const handleOnCloseModal = () => {
    setVisibled(false);
  };

  return (
    <div
      style={{ position: "relative", width: "100%" }}
      data-testid="bucket-fruit-item"
    >
      <S.Box>
        <S.Heading title={fruit.name}>{fruit.name}</S.Heading>
        <S.Price>{convertToCurrency(fruit.price)}</S.Price>
        <S.ActionList>
          <Flex gap={10}>
            <S.ActionButton
              type="button"
              onClick={handleOnClickAddButton}
              data-testid="move-fruit-from-bucket"
            >
              <PlusIcon color="#3763FF" />
            </S.ActionButton>
            <S.ActionButton
              type="button"
              onClick={handleOnClickRemoveButton}
              data-testid="remove-fruit"
            >
              <XIcon />
            </S.ActionButton>
          </Flex>
        </S.ActionList>
      </S.Box>

      <MoveFruitModal
        visibled={visibled}
        fruitId={fruit.id}
        onClose={handleOnCloseModal}
        fromBucketId={bucketId}
      />
    </div>
  );
};

export default BucketFruitItem;
