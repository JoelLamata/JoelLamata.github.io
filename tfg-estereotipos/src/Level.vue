<script setup>
import { ref } from 'vue'
import poligon from './Poligons.vue'
import Database from './Database.vue'
import Modal from './Modal.vue'

const props = defineProps(['defaultImages', 'replacementImages', 'placeholder', 'poliForm', 'badPoliForm', 'poliNum', 'badPoliNum', 'poliText', 'badPoliText', 'levelNum', 'time'])

let touchingPoligons = [];

function setPoints() {
    let actualPoints = Database.Levels[props.levelNum]['points'];
    let points = Math.floor(100 / props.time);  //Cambiar
    console.log(points);
    if (actualPoints < points) {
        Database.Levels[props.levelNum]['points'] = points;
    }
}

function isOnSquare(e) { //Cambiar nombre?
    const poligonPosition = e.currentTarget.getBoundingClientRect();
    const basuraPosition = document.getElementsByClassName('basura').item(0).getBoundingClientRect();
    const label = e.currentTarget.innerText;
    if (poligonPosition.right >= basuraPosition.left &&
        poligonPosition.left <= basuraPosition.right &&
        poligonPosition.bottom >= basuraPosition.top &&
        poligonPosition.top <= basuraPosition.bottom) {
        changeImage(label);
    }
    else {
        const index = touchingPoligons.indexOf(label);
        if(index > -1){
            touchingPoligons.splice(index, 1);
        }
    }
}

function changeImage(label) {
    const index = touchingPoligons.indexOf(label);
    if(index <= -1){
        touchingPoligons.push(label);
    }
}

function resetLevel() {
    // Reset poligons position
    for (let i = 0; i < props.poliNum + props.badPoliNum; i++) {
        this.$refs.poligons.children[i].children[0].style["cssText"] = ""
    }
    // Reset image
    touchingPoligons = [];
}

function getImage(label) {
    for(let i = 0; i < props.replacementImages.length; i++){
        let dict = props.replacementImages[i];
        if(dict["label"] == label){
            return dict["image"];
        }   
    }
}

function showImage(index) {
    let numDefaultImages = props.defaultImages.length;
    let numTouchingPoligons = touchingPoligons.length;
    if(index > numDefaultImages - numTouchingPoligons){
        return "";
    }
    return props.defaultImages[index - 1]
}

defineExpose({ setPoints, resetLevel })
</script>

<template>
    <div class="level">
        <div class="imgbox">
            <p id="clock"></p>
            <input type="search" :placeholder="props.placeholder" class="search_input" disabled>
            <section class="images" :style="{'column-count':2}">
                <img v-for="i in props.defaultImages.length" :src="showImage(i)">
                <img v-for="label in touchingPoligons" :src="getImage(label)">
            </section>
        </div>
        <div class="poligons">
            <poligon v-for="i in props.poliNum" :poliForm="props.poliForm" :text="props.poliText[i - 1]" @click="isOnSquare" />
            <poligon v-for="i in props.badPoliNum" :poliForm="props.badPoliForm" :text="props.badPoliText[i - 1]" @click="isOnSquare" />
            <div class="basura">
                <p></p>
            </div>
        </div>
    </div>
</template>

<style>
.level {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

.images {
    line-height: 0;
    column-gap: 5px;
    margin: 5px;
}

.images img {
    margin-top: 5px;
    border-radius: 16px;
    width: 100%;
    /* height: auto; */
}

.search_input {
    width: 100%;
    padding: 12px 24px;

    background-color: transparent;
    transition: transform 250ms ease-in-out;
    font-size: 14px;
    line-height: 18px;

    color: #575756;
    background-color: transparent;

    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 18px 18px;
    background-position: 95% center;
    border-radius: 50px;
    border: 1px solid #575756;
    transition: all 250ms ease-in-out;
    backface-visibility: hidden;
    transform-style: preserve-3d;
}

.basura {
    position: absolute;
    bottom: 10%;
    border: solid 1px grey;
    width: 100%;
    height: 20%;
    border-radius: 16px;
    z-index: -1;
}
</style>
