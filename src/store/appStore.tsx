import { Bucket } from "@/interfaces/Bucket";
import { Fruit } from "@/interfaces/Fruit";
import { create } from "zustand";

interface AppState {
  buckets: Bucket[];
  fruits: Fruit[];

  createBucket: (capacity: number) => void;
  createFruit: (name: string, price: number) => void;
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
  createFruit: (name, price) =>
    set((state) => ({
      fruits: [...state.fruits, { id: state.fruits.length + 1, name, price }],
    })),
}));

export default useAppStore;
