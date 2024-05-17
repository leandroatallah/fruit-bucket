import { Bucket } from "@/interfaces/Bucket";
import { Fruit } from "@/interfaces/Fruit";
import { create } from "zustand";

interface AppState {
  buckets: Bucket[];
  fruits: Fruit[];
}

const useAppStore = create<AppState>()(() => ({
  buckets: [],
  fruits: [],
}));

export default useAppStore;
