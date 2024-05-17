import { Box, Button, Flex, Heading, InputForm } from "@/components";

const CreateBucketAndFruit = () => (
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
);

export default CreateBucketAndFruit;
