<script setup>
import { ref, reactive, onMounted } from "vue";
import { usePlayerStore } from "../stores/player";
import Card from "../components/Card.vue";

const player = usePlayerStore();
const timer = ref(null);

onMounted(() => {
 this.loop = setInterval(() => {
    const currentTime = +timer.value.innerHTML;
    timer.value.innerHTML = currentTime + 1;
  }, 1000);
});

const caracters = reactive([
  { name: "allCaracters", path: "src/assets/allCaracters.jpg" },
  { name: "billy", path: "src/assets/billy.png" },
  { name: "dustin", path: "src/assets/dustin.png" },
  { name: "hopper", path: "src/assets/hopper.png" },
  { name: "jonathan", path: "src/assets/jonathan.png" },
  { name: "max", path: "src/assets/max.png" },
  { name: "mike", path: "src/assets/mike.png" },
  { name: "nancy", path: "src/assets/nancy.png" },
  { name: "steve", path: "src/assets/steve.png" },
  { name: "will", path: "src/assets/will.png" },
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
  @apply w-full h-full pt-5 px-5 pb-12 bg-main bg-cover font-pressStart;
  & header {
    @apply mx-auto mb-9 p-7 rounded-md select-none flex items-center justify-between w-full max-w-4xl bg-transparent-white text-xl;
  }
  & .grid-cards {
    @apply grid grid-cols-5 gap-4 w-full max-w-4xl relative m-auto;
  }
}
</style>
