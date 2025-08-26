import type { ItemDto } from "./Item";

export class Slot {
  index: number;
  quantity: number = 1;
  item: ItemDto;
  constructor({
    index,
    item,
    quantity,
  }: {
    index: number;
    item: ItemDto;
    quantity?: number;
  }) {
    this.index = index;
    this.item = item;
    if (this.quantity) {
      this.quantity = quantity as number;
    }
  }
}
