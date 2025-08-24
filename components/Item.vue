<script lang="ts" setup> 
const props = defineProps({
    src: {
        type: String,
        required: false
    },
    index: Number
})

const {src} = props

const itemSrc = ref("/_nuxt/public/"+src+".png")
</script>


<template>
    <img class="item" draggable="false" :src="itemSrc" :key="index"></img>
</template>

<style>
.item{
    width: 81px;
    height: 81px;
    border: none;
    scale: 2;
    rotate: 45deg;
    user-select: none;
}
</style>