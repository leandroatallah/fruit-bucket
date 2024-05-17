import { Box, Button, Flex, Heading, InputForm } from "@/components";
import useAppStore from "@/store/appStore";

const CreateBucketAndFruit = () => {
  const { createBucket, createFruit } = useAppStore();

  const handleAddBucket = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const capacity = Number(e.currentTarget.capacity.value);

    if (isNaN(capacity) || capacity === 0) return;

    createBucket(capacity);

    e.currentTarget.reset();
  };

  const handleAddFruit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = e.currentTarget.fruitName.value;
    const price = Number(e.currentTarget.price.value);

    if (!name || isNaN(price)) return;

    createFruit(name, price);

    e.currentTarget.reset();
  };

  return (
    <Flex gap={24} align="stretch" direction="column" $lgDirection="row">
      <Box as="form" onSubmit={handleAddBucket}>
        <Heading>Criar Balde</Heading>
        <InputForm name="capacity" label="Capacidade" type="number" min="1" />
        <Button type="submit">Salvar</Button>
      </Box>
      <Box as="form" onSubmit={handleAddFruit}>
        <Heading>Criar Fruta</Heading>
        <Flex direction="column" gap={15}>
          <InputForm name="fruitName" label="Nome" type="text" />
          <InputForm
            name="price"
            label="Preço"
            type="number"
            min="0"
            step="0.01"
          />
        </Flex>
        <Button type="submit">Salvar</Button>
      </Box>
    </Flex>
  );
};

export default CreateBucketAndFruit;
