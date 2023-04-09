<script setup>
const props = defineProps(['poliForm', 'text'])
</script>

<template>
     <div class="poligon" v-drag :style="{'clip-path': props.poliForm}">
        <img src="./images/green.png" width="100" height="100" >
        <div class="text">{{props.text}}</div>
    </div>
</template>

<style>
.poligon {
    display: inline-block;
    text-align: center;
    color: black;
}
.text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>