<script lang="ts" setup>
import { ref } from "vue";
import Item from "./Item.vue";
import { Slot } from "~/classes/Slot";

const props = defineProps({
  index: Number,
  slot: Slot || null,
});

const { index, slot } = props;
const item = slot?.item;
const slotIsActive = ref(slot?.index === index);
</script>

<template>
  <div class="slot">
    <Item
      v-if="slotIsActive"
      :src="item?.src"
      :key="index"
      :index="index"
    ></Item>
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
