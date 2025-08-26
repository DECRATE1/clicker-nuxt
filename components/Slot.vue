<script lang="ts" setup>
import { ref, Suspense } from "vue";
import type { Slot } from "~/classes/Slot";

interface Props {
  index: number;
  slot: Slot | null | undefined;
}

const props = defineProps<Props>();
const item = ref();
const slotIsActive = ref();
const itemSrc = ref();

const { index, slot } = props;
item.value = slot?.item;
slotIsActive.value = slot?.index === index;
itemSrc.value = "/_nuxt/public/" + slot?.item.src + ".png";
</script>

<template>
  <div class="slot">
    <Item :src="itemSrc"></Item>
    <span class="quanity-number">{{ slot?.quantity }}</span>
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
  position: relative;
}

.quanity-number {
  position: absolute;
  margin-top: auto;
  right: 15px;
  bottom: 15px;
  font-weight: bold;
}
</style>
