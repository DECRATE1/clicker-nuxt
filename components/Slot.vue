<script lang="ts" setup>
import { ref } from "vue";
import Item from "./Item.vue";

const slotIsActive = ref(false);

function activateSlot() {
  slotIsActive.value = true;
}
</script>

<template>
  <div class="slot" @contextmenu.prevent="activateSlot">
    <Item v-if="slotIsActive"></Item>
  </div>
</template>

<style>
.slot {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-image: url("/public/slot.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 125% 125%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
