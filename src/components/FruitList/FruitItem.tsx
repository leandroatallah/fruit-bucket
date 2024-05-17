import { useState } from "react";

import { MoveFruitModal, PlusIcon } from "@/components";
import { Fruit } from "@/interfaces/Fruit";
import { convertToCurrency } from "@/utils";

import * as S from "./FruitItem.styles";

interface FruitItemProps {
  fruit: Fruit;
}

const FruitItem = ({ fruit }: FruitItemProps) => {
  const [visibled, setVisibled] = useState(false);

  const handleOnClickButton = () => {
    setVisibled(true);
  };

  const handleOnCloseModal = () => {
    setVisibled(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <S.Box>
        <S.Content>
          <S.Heading>{fruit.name}</S.Heading>
          <S.Price>{convertToCurrency(fruit.price)}</S.Price>
        </S.Content>
        <S.Button type="button" onClick={handleOnClickButton}>
          <PlusIcon />
        </S.Button>
      </S.Box>
      <MoveFruitModal
        visibled={visibled}
        fruitId={fruit.id}
        onClose={handleOnCloseModal}
      />
    </div>
  );
};

export default FruitItem;
