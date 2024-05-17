import { PlusIcon } from "@/components";
import { Fruit } from "@/interfaces/Fruit";
import { convertToCurrency } from "@/utils";

import * as S from "./FruitItem.styles";

interface FruitItemProps {
  fruit: Fruit;
}

const FruitItem = ({ fruit }: FruitItemProps) => {
  return (
    <S.Box>
      <S.Content>
        <S.Heading>{fruit.name}</S.Heading>
        <S.Price>{convertToCurrency(fruit.price)}</S.Price>
      </S.Content>
      <S.Button>
        <PlusIcon />
      </S.Button>
    </S.Box>
  );
};

export default FruitItem;
