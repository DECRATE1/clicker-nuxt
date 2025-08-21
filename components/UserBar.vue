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
  align-items: center;
  justify-content: center;
  padding-inline: 45px;
  box-sizing: border-box;
  width: 100%;
  height: 8rem;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
  background-color: red;
  align-self: flex-end;
  background: url("ui_background.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
