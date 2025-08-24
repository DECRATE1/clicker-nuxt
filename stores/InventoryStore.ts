import { defineStore } from "pinia";
import { inventory } from "~/classes/Inventory";
import type { ItemDto } from "~/classes/Item";

export const useInventoryStore = defineStore("inventory", {
  state: () => {
    return {
      inventory: inventory.getInventory(),
    };
  },

  actions: {
    addItem(item: ItemDto) {
      inventory.addToInventory(item);
    },
  },
});
