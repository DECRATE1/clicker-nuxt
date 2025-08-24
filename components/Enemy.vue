<script setup lang="ts"> 
import { ref } from "vue";
import { inventory } from "~/classes/Inventory";
import { Item, type ItemDto } from "~/classes/Item";
import { ItemData } from "~/data/Itemdata";

const props = defineProps({

  name: {
    type: String,
    required: true
  },

  src: {
    type: String,
    required: true
  }
})
const appStore = useAppStore()
let {name, src} = props
const hp = ref(appStore.currentEnemy.hp)
const scaleValue = ref<number>(1);
const damageIsTaken = ref<boolean>(false);
const srcImage = ref("/_nuxt/public/"+src+".png")

const inventoryStore = useInventoryStore()



function takeDamage(): void {
  scaleValue.value = 0.8;
  damageIsTaken.value = true;
  appStore.currentEnemy.hp -= 1
  hp.value = appStore.currentEnemy.hp
  if(appStore.currentEnemy.hp <= 0){
    const itemData = ItemData[Math.floor(Math.random() * ItemData.length)]
    const item = new Item(itemData!)
    if(item.isDropted()){
      inventoryStore.addItem(item)
    }
    appStore.endFight()
    return
  }
  setTimeout(() => {
    scaleValue.value = 1;
    damageIsTaken.value = false;
  }, 100);
}


</script>

<template>
    <div class="enemy-container">
        <img :src="srcImage" loading="lazy" id="enemy"  class="enemy" :class="{'enemy__take-damage': damageIsTaken}" draggable="false" width="400" height="400" @click="takeDamage" :style="{transform: `scale(${scaleValue})`, transition: 'transform 0.1s ease-in-out'}"></img>
        <div>{{ hp }}</div>
     </div>
</template>


<style>
.enemy {
  user-select: none;
  border: none;
  outline: none;
}

.enemy-container{
  display: flex;
  flex-direction: column;
  border: none;
  align-items: center;
}

.enemy__take-damage {
  user-select: none;
  filter: brightness(0) saturate(100%) invert(24%) sepia(93%) saturate(6240%)
    hue-rotate(355deg) brightness(103%) contrast(128%) opacity(80%);
}

.hp-bar{
  width: 19vw;
  height: 2.5vh;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
}

</style>