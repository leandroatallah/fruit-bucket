import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  CreateBucketAndFruit,
  BucketList,
  FruitList,
  Grid,
} from "@/components";

function App() {
  return (
    <Grid>
      <CreateBucketAndFruit />
      <FruitList />
      <BucketList />
    </Grid>
  );
}

export default App;
