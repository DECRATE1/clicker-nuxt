import type { ItemDto } from "./Item";
import { Slot } from "./Slot";
export class Inventory {
  private inventory: (Slot | undefined)[];
  private occupied = 0;
  constructor({ size }: { size: number }) {
    this.inventory = Array.from({ length: size });
  }
  addToInventory(currentItem: ItemDto) {
    this.inventory.every((slot, index) => {
      if (slot) {
        console.log("we have slot!!");
        if (slot.item.id === currentItem.id) {
          console.log(1);
          slot.quanity++;
          return false;
        }
      }

      const newSlot = new Slot({ index: this.occupied++, item: currentItem });
      this.inventory[index] = newSlot;
      return false;
    });
  }

  getInventory() {
    return this.inventory;
  }
}

export const inventory = new Inventory({ size: 28 });
