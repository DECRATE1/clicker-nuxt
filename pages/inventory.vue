<script setup>
import { inventory } from "~/classes/Inventory";
const invent = ref([]);
const progress = ref(0);
onMounted(() => {
  const interval = setInterval(() => {
    progress.value += 15;
    if (progress >= 100) clearInterval(interval);
  }, 100);

  if (inventory) {
    invent.value = inventory.getInventory();
  }
});
</script>

<template>
  <div class="inventory_window">
    <div class="inventory">
      <Slot
        v-if="invent.length > 0 && progress >= 100"
        v-for="n in 28"
        :index="n - 1"
        :key="n - 1"
        :slot="invent[n - 1]"
      >
      </Slot>

      <template v-else>
        <div class="slot-suspense">
          <div class="bar">
            <div class="fill" :style="{ width: progress + '%' }"></div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
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
  position: relative;
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
.slot-suspense {
  display: flex;
  position: absolute;
  width: 100%;
  max-width: 300px;
  height: 100%;
  padding: 8px;
  justify-content: center;
  align-items: center;
  place-self: center;
}

.bar {
  width: 100%;
  height: 10px;
  background: #1e1e1e;
  border-radius: 3px;
  overflow: hidden;
}

.fill {
  height: 100%;
  background: linear-gradient(to right, black, red);
  transition: width 0.3s ease;
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
