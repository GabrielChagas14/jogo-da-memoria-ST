import { defineStore } from "pinia";

export const useCardsStore = defineStore({
  id: "cards",
  state: () => ({
    disabledCards: 0,
    firstCard: '',
    secondCard: '',
  }),
  getters: {
    getDisabledCard: (state) => state.disabledCards,
    getFirstCard: (state) => state.firstCard,
    getSecondCard: (state) => state.secondCard,
  },
  actions: {
    increaseDisabledCards() {
        this.disabledCards+=2;
    },
    setFirstCard(e) {
      this.firstCard = e;
    },
    setSecondCard(e) {
      this.secondCard = e;
    },
  },
});
