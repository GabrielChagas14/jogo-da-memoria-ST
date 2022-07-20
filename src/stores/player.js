import { defineStore } from 'pinia'

export const usePlayerStore = defineStore({
    id:'user',
    state: () => ({
        name: ""
    }),
    getters: {
        getName: (state) => state.name
    },
    actions: {
        setName(n) {
            this.name = n
        }
    }
})
