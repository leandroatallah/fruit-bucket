import { Fruit } from "@/interfaces/Fruit";
import { convertToCurrency } from "@/utils";

import * as S from "./BucketFruitItem.styles";

interface BucketFruitItemProps {
  fruit: Fruit;
}

const BucketFruitItem = ({ fruit }: BucketFruitItemProps) => {
  return (
    <S.Box>
      <S.Heading>{fruit.name}</S.Heading>
      <S.Price>{convertToCurrency(fruit.price)}</S.Price>
    </S.Box>
  );
};

export default BucketFruitItem;
