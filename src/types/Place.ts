import { Activities } from "./Activities";
import { Tags } from "./Tags";

export interface Place {
  id: number;
  name: string;
  location: string;
  raiting: number;
  price: number;
  activities: Activities[];
  tags: Tags[];
  // categories: string[];
}
