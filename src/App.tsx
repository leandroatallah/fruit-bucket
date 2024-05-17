import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  CreateBucketAndFruit,
  BucketList,
  FruitList,
  Grid,
} from "@/components";

const fruitData = [
  { id: "1", name: "Fruta A", price: 4.55 },
  { id: "2", name: "Fruta B", price: 3.9 },
];

const bucketData = [
  { id: "1", capacity: 10, fruits: [] },
  { id: "2", capacity: 20, fruits: fruitData },
];

function App() {
  return (
    <Grid>
      <CreateBucketAndFruit />
      <FruitList items={fruitData} />
      <BucketList items={bucketData} />
    </Grid>
  );
}

export default App;
