import { Slide, ToastContainer } from "react-toastify";

import {
  CreateBucketAndFruit,
  BucketList,
  FruitList,
  Grid,
} from "@/components";

function App() {
  return (
    <>
      <Grid>
        <CreateBucketAndFruit />
        <FruitList />
        <BucketList />
      </Grid>

      <ToastContainer
        autoClose={3000}
        limit={4}
        pauseOnFocusLoss={false}
        position="bottom-right"
        theme="colored"
        transition={Slide}
        bodyStyle={{
          fontSize: "14px",
          lineHeight: "1.4",
        }}
      />
    </>
  );
}

export default App;
