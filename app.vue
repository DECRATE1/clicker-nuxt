<script setup>
import { inventory } from "./classes/Inventory";
onMounted(() => {
  window.addEventListener("beforeunload", () => {
    inventory.saveInventory();
  });
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<style>
body {
  margin: 0;
}
a {
  text-decoration: none;
  color: white;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
