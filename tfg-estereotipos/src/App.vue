<script setup>
import Modal from './Modal.vue'
import { ref } from 'vue'
import Database from './Database.vue'
import Level from './Level.vue'

let levelNum = ref(1);
let isLevel = ref(false);
let isStart = ref(true);
let time = ref(0);
let showInfo = ref(false);
let showEndLevel = ref(false);
let timer;
const numOfLevels = Object.keys(Database.Levels).length;
const levels = Database.Levels;

function startClock(){
  time.value = 0;
  if(!timer) timer = setInterval(() => {time.value++;}, 1000);
}
function stopClock(){
  clearInterval(timer);
  timer = null;
}
</script>

<template>
  <div class="startScreen" v-show="!isLevel&&isStart">
    <button class="startButton" @click="isStart = false">Start</button>
    <button class="infoButton" @click="showInfo = true">Info</button>
    <Teleport to="body">
      <modal :show="showInfo" @close="showInfo = false">
        <template #header>
          <h3>custom header</h3>
        </template>
      </modal>
    </Teleport>
  </div>

  <div class="levelsScreen" v-show="!isLevel&&!isStart">
    <div v-for="i in numOfLevels">
      <button @click="isLevel = true; levelNum = i; startClock(); $refs.level.resetLevel();">Level {{i}} <br /> {{ levels[i]['points'] }} points</button>
    </div>
    <button class="backButton"  @click="isStart = true; isLevel = false;">Back</button>
  </div>

  <div v-show="isLevel">
    {{ time }}
    <Level :defaultImages="levels[levelNum]['defaultImages']"
        :replacementImages="levels[levelNum]['replacementImages']"
        :poliForm="levels[levelNum]['poliForm'][0]"
        :badPoliForm="levels[levelNum]['poliForm'][1]"
        :placeholder="levels[levelNum]['placeholder']"
        :poliNum="levels[levelNum]['poliNum']"
        :badPoliNum="levels[levelNum]['badPoliNum']"
        :poliText="levels[levelNum]['poliText']"
        :badPoliText="levels[levelNum]['badPoliText']"
        :levelNum="levelNum"
        :time="time"
        ref="level"/>
    <div class="levelButtons">
      <button @click="$refs.level.setPoints(); showEndLevel = true; stopClock()">Submit</button>
      <Teleport to="body">
          <modal :show="showEndLevel" @close="showEndLevel = false; isLevel = false;">
              <template #header>
                  <h3>End level</h3>
              </template>
          </modal>
      </Teleport>
      <button @click="isLevel = false;">Back</button>
    </div>
  </div>
</template>

<style>
body {
  background-color:#ffffff;
  background-image:url(https://www.xtrafondos.com/wallpapers/resoluciones/21/degradado-difuminado-azul_2560x1440_7935.jpg);
  background-repeat:no-repeat;
  background-position:top left;
  background-attachment:fixed;
  height: 100%;
}

.levelButtons {
  position: absolute;
  bottom: 5%;
  right: 50%;
}

/* Grid */
.startScreen {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  height: 97vh;
}

.startButton { grid-area: 2 / 3 / 3 / 4; }
.infoButton { grid-area: 4 / 3 / 5 / 4; }

.levelsScreen{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  grid-template-rows: repeat(6, 1fr);
  place-items: center;
  height: 97vh;
}

.backButton { grid-area: 6 / 3 / 7 / 4; }

/* button */
button {
  align-items: center;
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
}

button:hover,
button:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  color: rgba(0, 0, 0, 0.65);
}

button:hover {
  transform: translateY(-1px);
}

button:active {
  background-color: #F0F0F1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(0);
}
</style>