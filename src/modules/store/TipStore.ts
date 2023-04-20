import { defineStore } from "pinia";

export const useTipStore = defineStore('tip', {
  state: () => ({ tipValue: 0, isCustomValue: false}),

  actions: {
    setTipValue(val: number) {
      this.tipValue = val;
    }
  }
})