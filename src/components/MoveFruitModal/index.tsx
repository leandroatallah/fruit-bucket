import { useDetectClickOutside } from "@/hooks/useDetectClickOutside";
import { Bucket } from "@/interfaces/Bucket";
import { Fruit } from "@/interfaces/Fruit";
import useAppStore from "@/store/appStore";

import * as S from "./MoveFruitModal.styles";

interface MoveFruitModalProps {
  visibled: boolean;
  fruitId: Fruit["id"];
  fromBucketId?: Bucket["id"];
  onClose: () => void;
}

const MoveFruitModal = ({
  visibled,
  fruitId,
  fromBucketId,
  onClose,
}: MoveFruitModalProps) => {
  const { buckets, moveFruitBetweenBuckets, moveUnallocatedFruit } =
    useAppStore();

  const ref = useDetectClickOutside({
    onTriggered: () => onClose(),
  });

  const bucketOptions = buckets.filter((bucket) => bucket.id !== fromBucketId);

  const handleMoveFruit = (bucketId: number) => {
    if (fromBucketId) {
      moveFruitBetweenBuckets(fruitId, fromBucketId, bucketId);
    } else {
      moveUnallocatedFruit(fruitId, bucketId);
    }

    onClose();
  };

  return (
    <S.Container visibled={visibled} ref={ref} data-testid="move-fruit-modal">
      <S.List>
        {bucketOptions?.map((bucket) => (
          <S.ListItem
            key={bucket.id}
            onClick={() => handleMoveFruit(bucket.id)}
            data-testid="bucket-option"
          >
            Balde {bucket.id}
          </S.ListItem>
        ))}
      </S.List>
    </S.Container>
  );
};

export default MoveFruitModal;
