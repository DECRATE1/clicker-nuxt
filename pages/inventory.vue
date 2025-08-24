<script setup lang="ts">
import { inventory } from "~/classes/Inventory";

const invent = inventory.getInventory();
console.log(invent);
</script>

<template>
  <div class="inventory_window">
    <div class="inventory">
      <Slot v-for="n in 28" :index="n - 1" key="n" :slot="invent[n - 1]">
      </Slot>
    </div>
  </div>
</template>

<style>
.inventory_window {
  display: flex;
  width: 100%;
  height: 100vh;
  font-weight: 500;
  font-size: 32px;
  background-image: url("/public/inventory.png");
  background-repeat: no-repeat;
  background-size: 105% 105%;
  background-position: center;
  justify-content: center;
  align-items: center;
}

.inventory {
  width: 90%;
  height: 90%;
  border-radius: 30px;
  background-color: black;
  padding: 16px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(7, 1fr);
  gap: 1px;
}

@media (width >= 768px) {
  .inventory_window {
    width: 50%;
  }

  @media (width >= 1024px) {
    .inventory_window {
      width: 40vw;
    }
  }

  @media (width >= 1536px) {
    .inventory_window {
      width: 30vw;
    }
  }
}
</style>
