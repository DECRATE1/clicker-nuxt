<template>
  <main class="main">
    <slot></slot>
  </main>
</template>

<style>
.main {
  display: flex;
  background-color: black;
  width: 100%;
  height: 100vh;
  color: white;
  justify-content: center;
  overflow: hidden;
}
@media (width >= 640px) {
  .main {
    display: flex;
    background-color: black;
    width: 100%;
    height: 100vh;
    color: white;
    justify-content: center;
  }
}

@media (width >= 768px) {
  .main {
    display: flex;
    background-color: black;
    width: 100%;
    height: 100vh;
    color: white;
    justify-content: center;
  }
}

@media (width >= 1028px) {
  .main {
    display: flex;
    background-color: black;
    width: 100%;
    height: 100vh;
    color: white;
    justify-content: center;
  }
}
</style>
