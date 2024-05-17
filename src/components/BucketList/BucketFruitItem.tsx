import { useState } from "react";

import { Fruit } from "@/interfaces/Fruit";
import { convertToCurrency } from "@/utils";

import * as S from "./BucketFruitItem.styles";
import { Flex, MoveFruitModal, PlusIcon, XIcon } from "@/components";

interface BucketFruitItemProps {
  fruit: Fruit;
}

const BucketFruitItem = ({ fruit }: BucketFruitItemProps) => {
  const [visibled, setVisibled] = useState(false);

  const handleOnClickAddButton = () => {
    setVisibled(true);
  };

  const handleOnClickRemoveButton = () => {};

  const handleOnCloseModal = () => {
    setVisibled(false);
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <S.Box>
        <S.Heading>{fruit.name}</S.Heading>
        <S.Price>{convertToCurrency(fruit.price)}</S.Price>
        <S.ActionList>
          <Flex gap={10}>
            <S.ActionButton onClick={handleOnClickAddButton}>
              <PlusIcon color="#3763FF" />
            </S.ActionButton>
            <S.ActionButton onClick={handleOnClickRemoveButton}>
              <XIcon />
            </S.ActionButton>
          </Flex>
        </S.ActionList>
      </S.Box>

      <MoveFruitModal
        visibled={visibled}
        fruitId={fruit.id}
        onClose={handleOnCloseModal}
      />
    </div>
  );
};

export default BucketFruitItem;
