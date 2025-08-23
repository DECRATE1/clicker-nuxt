<script lang="ts" setup>
const props = defineProps({
    index: {
        type: Number,
        required: true
    }
})

const {index} = props
const appStore = useAppStore()
const src = ref<string>("ui_" + (index + 1) + ".png")

</script>
 
<template>
    <NuxtLink to="inventory" class="ui-btn">
        <img class="ui-btn__image" alt="ui-image" loading="lazy" :src="src" width="128" height="128" @mouseenter="src = `ui_${index + 1}_hover.png`" @mouseleave="src=`ui_${index+1}.png`"></img>
    </NuxtLink>
</template>

<style>
.ui-btn {
  width: 115px;
  height: 115px;
  border-radius: 60px;
  color: white;
  cursor: pointer;
  display: flex;
}

.ui-btn__image{
    width: 100%;
    height: 100%;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
