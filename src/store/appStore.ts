import { toast } from "react-toastify";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Bucket } from "@/interfaces/Bucket";
import { Fruit } from "@/interfaces/Fruit";

export interface AppState {
  buckets: Bucket[];
  fruits: Fruit[];

  createBucket: (capacity: number) => void;
  removeBucket: (bucketId: Bucket["id"]) => void;

  createFruit: (name: string, price: number) => void;

  moveUnallocatedFruit: (fruitId: Fruit["id"], bucketId: Bucket["id"]) => void;
  moveFruitBetweenBuckets: (
    fruitId: Fruit["id"],
    fromBucketId: Bucket["id"],
    toBucketId: Bucket["id"]
  ) => void;
  removeFruitFromBucket: (fruitId: Fruit["id"], bucketId: Bucket["id"]) => void;
}

const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      buckets: [],
      fruits: [],

      createBucket: (capacity) => {
        try {
          if (isNaN(capacity)) {
            throw "A capacidade do balde deve ser um número.";
          }

          if (capacity === 0) {
            throw "A capacidade do balde deve ser um número maior que zero.";
          }

          set((state) => ({
            buckets: [
              ...state.buckets,
              { id: state.buckets.length + 1, capacity, fruits: [] },
            ],
          }));

          toast.success("Balde criado com sucesso.");
        } catch (error) {
          if (typeof error === "string") {
            toast.error(error);
            return;
          }
          toast.error("Ocorreu um erro ao criar o balde.");
        }
      },
      removeBucket: (bucketId) => {
        try {
          const bucket = get().buckets.find((bucket) => bucket.id === bucketId);

          if (!bucket) {
            throw new Error();
          }

          if (bucket.fruits.length > 0) {
            throw new Error();
          }

          set((state) => ({
            buckets: state.buckets.filter((bucket) => bucket.id !== bucketId),
          }));
          toast.success("Balde removido com sucesso.");
        } catch (error) {
          if (typeof error === "string") {
            toast.error(error);
            return;
          }
          toast.error("Ocorreu um erro ao remover o balde.");
        }
      },

      createFruit: (name, price) => {
        try {
          if (name.trim() === "") {
            throw "Nome da fruta inválido.";
          }

          if (isNaN(price)) {
            throw "Preço da fruta inválido.";
          }

          const uuid = crypto.randomUUID();
          set((state) => ({
            fruits: [...state.fruits, { id: uuid, name, price }],
          }));

          toast.success("Fruta criada com sucesso.");
        } catch (error) {
          toast.error("Ops! Ocorreu um erro ao criar a fruta.");
        }
      },

      moveUnallocatedFruit: (fruitId, bucketId) => {
        try {
          const bucket = get().buckets.find((bucket) => bucket.id === bucketId);

          if (!bucket) {
            throw new Error();
          }

          if (bucket.fruits.length === bucket.capacity) {
            toast.warning("O balde está cheio.");
            return;
          }

          set((state) => ({
            fruits: state.fruits.filter((fruit) => fruit.id !== fruitId),
            buckets: state.buckets.map((bucket) => {
              if (bucket.id === bucketId) {
                return {
                  ...bucket,
                  fruits: [
                    ...bucket.fruits,
                    state.fruits.find((fruit) => fruit.id === fruitId),
                  ].filter(Boolean) as Fruit[],
                };
              }

              return bucket;
            }),
          }));
          toast.success("Fruta adicionada ao balde com sucesso.");
        } catch (error) {
          toast.error("Ops! Ocorreu um erro ao mover a fruta.");
        }
      },
      moveFruitBetweenBuckets: (fruitId, fromBucketId, toBucketId) => {
        try {
          if (fromBucketId === toBucketId) {
            return;
          }

          const fromBucket = get().buckets.find(
            (bucket) => bucket.id === fromBucketId
          );
          const toBucket = get().buckets.find(
            (bucket) => bucket.id === toBucketId
          );

          if (!fromBucket || !toBucket) {
            throw new Error();
          }

          if (toBucket.fruits.length === toBucket.capacity) {
            toast.warning("O balde está cheio.");
            return;
          }

          set((state) => {
            const fromBucket = state.buckets.find(
              (bucket) => bucket.id === fromBucketId
            );
            const toBucket = state.buckets.find(
              (bucket) => bucket.id === toBucketId
            );

            if (!fromBucket || !toBucket) {
              return state;
            }

            const updatedBuckets = state.buckets.map((bucket) => {
              if (bucket.id === fromBucketId) {
                const filteredFruits = bucket.fruits.filter(
                  (fruit) => fruit.id !== fruitId
                );
                return { ...bucket, fruits: filteredFruits };
              }

              if (bucket.id === toBucketId) {
                const fruitToAdd = fromBucket.fruits.find(
                  (fruit) => fruit.id === fruitId
                );
                if (!fruitToAdd) {
                  return bucket;
                }
                return { ...bucket, fruits: [...bucket.fruits, fruitToAdd] };
              }

              return bucket;
            });

            return { ...state, buckets: updatedBuckets };
          });

          toast.success("Fruta adicionada ao balde com sucesso.");
        } catch (error) {
          toast.error("Ops! Ocorreu um erro ao mover a fruta.");
        }
      },
      removeFruitFromBucket: (fruitId, bucketId) => {
        try {
          set((state) => ({
            buckets: state.buckets.map((bucket) => {
              if (bucket.id === bucketId) {
                return {
                  ...bucket,
                  fruits: bucket.fruits.filter((fruit) => fruit.id !== fruitId),
                };
              }

              return bucket;
            }),
          }));
          toast.success("Fruta removida do balde com sucesso.");
        } catch (error) {
          toast.error("Ops! Ocorreu um erro ao remover a fruta.");
        }
      },
    }),
    {
      name: "fruit-bucket-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAppStore;
