<script setup>
import { ref, onMounted } from "vue";
import { useCardsStore } from "../stores/cards";
const cards = useCardsStore();
const props = defineProps(["img", "name"]);
const front = ref(null);
onMounted(() => {
  front.value.style.backgroundImage = "url(" + props.img + ")";
});

function revealCard() {
  if (front.value.parentNode.className.includes("reveal-card")) {
    return;
  }
  if (cards.getFirstCard === "") {
    front.value.parentNode.classList.add("reveal-card");
    cards.setFirstCard(front.value.parentNode);
    console.log(cards.getFirstCard);
  } else if (cards.getSecondCard === "") {
    front.value.parentNode.classList.add("reveal-card");
    cards.setSecondCard(front.value.parentNode);
    console.log(cards.getSecondCard);
    compareCard();
  }
}

function compareCard() {
  if (
    cards.firstCard.getAttribute("data-name") ===
    cards.secondCard.getAttribute("data-name")
  ) {
    cards.getFirstCard.firstChild.classList.add("disabled-card");
    cards.getSecondCard.firstChild.classList.add("disabled-card");
    cards.setFirstCard("");
    cards.setSecondCard("");
    cards.increaseDisabledCards();
    checkEndGame();
  } else {
    setTimeout(() => {
      cards.firstCard.classList.remove("reveal-card");
      cards.secondCard.classList.remove("reveal-card");
      cards.setFirstCard("");
      cards.setSecondCard("");
    }, 500);
  }
}

function checkEndGame(){
  if(cards.getDisabledCard === 20){
    alert('Parabéns, você conseguiu')
  }
}
</script>
<template>
  <div class="card" :data-name="props.name" @click="revealCard()">
    <div ref="front" class="face front"></div>
    <div class="face back"></div>
  </div>
</template>
<style lang="postcss">
.card {
  @apply w-full select-none aspect-3/4 rounded-md transition-all duration-500;
  background-color: #ccc;
  transform-style: preserve-3d;
  perspective: -10px;
  & .face {
    @apply w-full h-full absolute rounded-md bg-cover bg-center border-2 border-st-red transition-all duration-300;
  }
  & .back {
    @apply bg-cover-1;
    backface-visibility: hidden;
  }
}
.reveal-card {
  transform: rotateY(180deg);
}
.disabled-card {
  filter: saturate(0);
  opacity: 0.5;
}
</style>
