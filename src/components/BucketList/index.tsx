import styled from "styled-components";

import { Box } from "@/components";
import useAppStore from "@/store/appStore";

import BucketItem from "./BucketItem";

const BucketList = () => {
  const { buckets } = useAppStore(({ buckets }) => ({
    buckets,
  }));

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
        {buckets.map((item) => (
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
    grid-template-columns: repeat(5, 1fr);
  }
`;

export default BucketList;
