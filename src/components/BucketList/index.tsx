import { useMemo } from "react";
import styled from "styled-components";

import { Box } from "@/components";
import useAppStore from "@/store/appStore";

import BucketItem from "./BucketItem";

const BucketList = () => {
  const { buckets } = useAppStore(({ buckets }) => ({
    buckets,
  }));

  const sortedBuckets = useMemo(() => {
    return buckets.sort((a, b) => {
      const aCapacityPercentage = a.fruits.length / a.capacity;
      const bCapacityPercentage = b.fruits.length / b.capacity;

      if (aCapacityPercentage === bCapacityPercentage) {
        return b.fruits.length - a.fruits.length;
      }

      return bCapacityPercentage - aCapacityPercentage;
    });
  }, [buckets]);

  if (!buckets.length) {
    return (
      <Box>
        <div
          style={{
            minHeight: "250px",
          }}
        >
          Não há baldes
        </div>
      </Box>
    );
  }

  return (
    <Box>
      <Grid>
        {sortedBuckets.map((item) => (
          <BucketItem key={item.id} bucket={item} />
        ))}
      </Grid>
    </Box>
  );
};

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default BucketList;
