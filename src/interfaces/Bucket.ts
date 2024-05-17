import { Fruit } from "./Fruit";

export interface Bucket {
  id: number;
  capacity: number;
  fruits: Fruit[];
}
