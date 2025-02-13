// stores/useExampleStore.ts
import { defineStore } from "pinia";

export const useExampleStore = defineStore("example", {
  state: () => ({ _count: 0 }),
  getters: {
    count(state) {
      return state._count;
    },
  },
  actions: {
    increment() {
      this._count++;
    },
  },
});
