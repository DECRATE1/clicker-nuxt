import type { ItemDto } from "./Item";

export class Slot {
  index: number;
  quanity = 1;
  item: ItemDto;
  constructor({ index, item }: { index: number; item: ItemDto }) {
    this.index = index;
    this.item = item;
  }
}
