import { Bucket } from "@/interfaces/Bucket";
import { Fruit } from "@/interfaces/Fruit";
import { create } from "zustand";

interface AppState {
  buckets: Bucket[];
  fruits: Fruit[];

  createBucket: (capacity: number) => void;
  createFruit: (name: string, price: number) => void;

  moveUnallocatedFruit: (fruitId: Fruit["id"], bucketId: Bucket["id"]) => void;
  moveFruitBetweenBuckets: (
    fruitId: Fruit["id"],
    fromBucketId: Bucket["id"],
    toBucketId: Bucket["id"]
  ) => void;
  removeFruitFromBucket: (fruitId: Fruit["id"], bucketId: Bucket["id"]) => void;
}

const useAppStore = create<AppState>()((set) => ({
  buckets: [],
  fruits: [],

  createBucket: (capacity) =>
    set((state) => ({
      buckets: [
        ...state.buckets,
        { id: state.buckets.length + 1, capacity, fruits: [] },
      ],
    })),
  createFruit: (name, price) => {
    const uuid = crypto.randomUUID();
    set((state) => ({
      fruits: [...state.fruits, { id: uuid, name, price }],
    }));
  },

  moveUnallocatedFruit: (fruitId, bucketId) => {
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
  },
  moveFruitBetweenBuckets: (fruitId, fromBucketId, toBucketId) => {
    set((state) => {
      const fromBucket = state.buckets.find(
        (bucket) => bucket.id === fromBucketId
      );
      const toBucket = state.buckets.find((bucket) => bucket.id === toBucketId);

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
  },
  removeFruitFromBucket: (fruitId, bucketId) => {
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
  },
}));

export default useAppStore;
