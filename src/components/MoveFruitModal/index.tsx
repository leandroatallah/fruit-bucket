import { useDetectClickOutside } from "@/hooks/useDetectClickOutside";
import { Fruit } from "@/interfaces/Fruit";

import * as S from "./MoveFruitModal.styles";

const buckets = [
  {
    id: "1",
    capacity: 10,
    fruits: [],
  },
  {
    id: "2",
    capacity: 10,
    fruits: [],
  },
  {
    id: "3",
    capacity: 10,
    fruits: [],
  },
];

interface MoveFruitModalProps {
  visibled: boolean;
  fruitId: Fruit["id"];
  onClose: () => void;
}

const MoveFruitModal = ({
  visibled,
  fruitId,
  onClose,
}: MoveFruitModalProps) => {
  const ref = useDetectClickOutside({
    onTriggered: () => {
      onClose();
    },
  });

  return (
    <S.Container visibled={visibled} ref={ref}>
      <S.List>
        {buckets?.map((bucket, index) => (
          <S.ListItem key={bucket.id}>Balde {index + 1}</S.ListItem>
        ))}
      </S.List>
    </S.Container>
  );
};

export default MoveFruitModal;
