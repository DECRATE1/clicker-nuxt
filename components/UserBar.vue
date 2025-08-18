<template>
  <div class="user-bar">
    <UiBtn
      v-for="(item, index) in 1"
      :item="item"
      :index="index"
      :key="index"
    ></UiBtn>
  </div>
</template>

<style>
.user-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  padding-inline: 45px;
  box-sizing: border-box;
  width: 100%;
  height: 8rem;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
  background-color: red;
  align-self: flex-end;
}
</style>
