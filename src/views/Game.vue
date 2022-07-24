<script setup>

import allCaracters from '../assets/allCaracters.jpg'
import billy from '../assets/billy.png'
import dustin from '../assets/dustin.png'
import hopper from '../assets/hopper.png'
import jonathan from '../assets/jonathan.png'
import max from '../assets/max.png'
import mike from '../assets/mike.png'
import nancy from '../assets/nancy.png'
import steve from '../assets/steve.png'
import will from '../assets/will.png'

import { ref, reactive, onMounted } from "vue";
import { usePlayerStore } from "../stores/player";
import Card from "../components/Card.vue";

const player = usePlayerStore();
const timer = ref(null);


onMounted(() => {
setInterval(() => {
    const currentTime = +timer.value.innerHTML;
    timer.value.innerHTML = currentTime + 1;
  }, 1000);
});

const caracters = reactive([
  { name: "allCaracters", path: allCaracters },
  { name: "billy", path: billy },
  { name: "dustin", path: dustin },
  { name: "hopper", path: hopper },
  { name: "jonathan", path: jonathan },
  { name: "max", path: max },
  { name: "mike", path: mike },
  { name: "nancy", path: nancy },
  { name: "steve", path: steve },
  { name: "will", path: will },
]);

const duplicateCharacters = reactive([...caracters, ...caracters]);
const shuffledArray = reactive(
  duplicateCharacters.sort(() => Math.random() - 0.5)
);
</script>
<template>
  <main>
    <header>
      <span class="player">{{ player.getName }}</span>
      <span
        >Tempo: <span ref="timer">00</span></span
      >
    </header>
    <div class="grid-cards">
      <card
        v-for="(caracter, index) in shuffledArray"
        :key="index"
        :img="caracter.path"
        :name="caracter.name"
      />
    </div>
  </main>
</template>
<style lang="postcss">
main {
  @apply w-full h-full pt-5 px-5 pb-12 bg-main bg-cover bg-center font-pressStart;
  & header {
    @apply mx-auto mb-9 p-7 rounded-md select-none flex items-center justify-between w-full max-w-4xl bg-transparent-white text-sm md:text-xl;
  }
  & .grid-cards {
    @apply grid grid-cols-5 gap-4 w-full max-w-4xl relative m-auto;
  }
}
</style>
