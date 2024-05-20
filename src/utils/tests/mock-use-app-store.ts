import { vi } from "vitest";
import * as useAppStore from "@/store/appStore";

export const removeBucket = vi.fn();
export const removeFruitFromBucket = vi.fn();

export const mockFruits = [
  {
    id: "1",
    name: "Banana",
    price: 2.5,
  },
  {
    id: "2",
    name: "Laranja",
    price: 4.9,
  },
  {
    id: "3",
    name: "Melancia",
    price: 5.4,
  },
];

export const mockUseAppStore = (data: Partial<useAppStore.AppState>) => {
  vi.spyOn(useAppStore, "default").mockImplementation(() => ({
    removeBucket,
    removeFruitFromBucket,
    buckets: [],
    fruits: [],
    ...data,
  }));
};
