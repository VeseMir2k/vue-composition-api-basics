import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
    title: 'My counter Title',
  }),
  getters: {
    oddOrEven: (state) => {
      if (state.count % 2) return 'even';
      return ' odd';
    },
  },
  actions: {
    increaseCounter(amount) {
      this.count += amount;
    },
    decreaseCounter(amount) {
      this.count -= amount;
    },
  },
});
