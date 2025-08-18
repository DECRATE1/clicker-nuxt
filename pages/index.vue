<script setup lang="ts">
import { ref } from 'vue'

const scaleValue = ref<number>(1)
const damageIsTaken = ref<boolean>(false)


function takeDamage(): void{
    scaleValue.value = 0.8
    damageIsTaken.value = true
    setTimeout(() => {
      scaleValue.value = 1
      damageIsTaken.value = false
    }, 100)
}
</script>

<template>
  <div class="window">
    <div class="window__display">
      <img src="../public/warm.png" class="enemy" :class="{'enemy__take-damage': damageIsTaken}" draggable="false" width="400" height="400" @click="takeDamage" :style="{transform: `scale(${scaleValue})`, transition: 'transform 0.1s ease-in-out'}"></img>
    </div>
    <UserBar></UserBar>
  </div>
</template>

<style>
.window {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 32px;
  text-transform: uppercase;
  flex-direction: column;
  user-select: none;
  background-image: url("/public/cave_bg.png");
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
}

.window__display{
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.enemy{
  user-select: none;
}

.enemy__take-damage{
  user-select: none;
  filter: brightness(0) saturate(100%) invert(24%) sepia(93%) saturate(6240%) hue-rotate(355deg) brightness(103%) contrast(128%) opacity(80%);
}

@media (width >= 768px) {
  .window {
  width: 50%;
}

@media (width >= 1024px){
  .window{
    width: 40vw;
  }
}

@media (width >= 1536px) {
  .window{
    width: 30vw;
  }
}

}


</style>
