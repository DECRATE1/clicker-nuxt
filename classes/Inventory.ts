import { Slot } from "./Slot";
import type { ItemDto } from "./Item";

export class Inventory {
  private inventory: (Slot | undefined)[];
  private occupied = 0;

  constructor({ size = 28 }: { size?: number }) {
    const save =
      typeof window !== "undefined"
        ? localStorage.getItem("inventorySave")
        : null;

    if (save) {
      try {
        const raw = JSON.parse(save);
        this.inventory = raw.map((data: Slot, index: number) =>
          data?.item
            ? new Slot({
                index,
                item: data.item,
                quantity: data.quantity ?? 1,
              })
            : undefined
        );
      } catch (e) {
        console.warn("Inventory save corrupted:", e);
        this.inventory = Array.from({ length: size });
      }
    } else {
      this.inventory = Array.from({ length: size });
    }

    this.occupied = this.inventory.filter(Boolean).length;
  }

  addToInventory(currentItem: ItemDto) {
    this.inventory.every((slot, index) => {
      if (slot && slot.item.id === currentItem.id) {
        slot.quantity++;
        return false;
      }

      if (!slot) {
        this.inventory[index] = new Slot({ index, item: currentItem });
        this.occupied++;
        return false;
      }

      return true;
    });
  }

  getInventory() {
    return this.inventory;
  }

  saveInventory() {
    const raw = this.inventory.map((slot) =>
      slot ? { item: slot.item, quantity: slot.quantity } : null
    );
    localStorage.setItem("inventorySave", JSON.stringify(raw));
  }
}
export const inventory = new Inventory({ size: 28 });
