import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  Box,
  BucketList,
  Button,
  FruitList,
  Grid,
  Heading,
  InputForm,
  Flex,
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
      <Flex gap={24} alignItems="stretch" direction="column" lgDirection="row">
        <Box>
          <Heading>Criar Balde</Heading>
          <InputForm label="Capacidade" type="number" min="0" />
          <Button>Salvar</Button>
        </Box>
        <Box>
          <Heading>Criar Fruta</Heading>
          <Flex direction="column" gap={15}>
            <InputForm label="Nome" type="text" />
            <InputForm label="Preço" type="number" min="0" />
          </Flex>
          <Button>Salvar</Button>
        </Box>
      </Flex>
      <FruitList items={fruitData} />
      <BucketList items={bucketData} />
    </Grid>
  );
}

export default App;
