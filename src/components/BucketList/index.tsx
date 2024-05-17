import styled from "styled-components";

import { Bucket } from "@/interfaces/Bucket";

import BucketItem from "./BucketItem";
import { Box } from "..";

interface BucketListProps {
  items: Bucket[];
}

const BucketList = ({ items }: BucketListProps) => {
  if (!items.length) {
    return <Box>Não há baldes</Box>;
  }

  return (
    <Box>
      <Grid>
        {items.map((item) => (
          <BucketItem key={item.id} bucket={item} />
        ))}
      </Grid>
    </Box>
  );
};

// 2 items per row
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export default BucketList;
