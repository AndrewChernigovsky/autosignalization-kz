import type { LocalType } from "@/types/LocalType";

export interface ProductI {
  name: string;
  cost: number;
  items: {}[];
  location: LocalType;
}