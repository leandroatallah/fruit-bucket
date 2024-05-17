import { Fruit } from "./Fruit";

export interface Bucket {
  id: string;
  capacity: number;
  fruits: Fruit[];
}
