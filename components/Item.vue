<script lang="ts" setup> 
const props = defineProps({
    src: {
        type: String,
        required: false
    },
    index: Number
})

const {src} = props
const image = ref(src)
</script>


<template>
    <img class="item" draggable="false" :src="image" :key="index" v-show="src!.split('/')[3] !== 'undefined.png'"></img>
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