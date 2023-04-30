import { defineStore } from "pinia";
import { UPDATE_TIP_STORE_VALUE } from "../enums/TipStoreTypesEnum";

export const useTipStore = defineStore('tip', {
  state: () => ({ tipValue: 0.00, personCount: 0.00, billAmount: 0.00}),
  getters: {
    validatePeopleCount(state): boolean{
      let error = false;

      if (state.personCount <= 0 || isNaN(state.personCount)) {
        error = true;
      }
      return error;
    },
    calculateTotalPerPerson(state): string {
      const total = state.billAmount + this.calculateTipAmount;
      
      if (state.personCount <= 0) {
        return (0).toFixed(2);
      }
      
      const totalPerPerson = total / state.personCount;
      return totalPerPerson.toFixed(2);
    },
    calculateTipAmountPerPerson(state): string {
      const tip = this.calculateTipAmount;

      if (state.personCount <= 0) {
        return (0).toFixed(2);
      }

      const tipPerPerson = tip / state.personCount;
      return tipPerPerson.toFixed(2);
    },
    calculateTipAmount: (state): number => state.billAmount * (state.tipValue / 100),
  },
  actions: {
    setValue(val: string, type: UPDATE_TIP_STORE_VALUE | undefined) {
      let numVal = parseFloat(val);

      if (isNaN(numVal)) {
        numVal = 0.00;
      }

      switch (type) {
        case UPDATE_TIP_STORE_VALUE.UPDATE_TIP:
          this.tipValue = numVal;
        break;
        case UPDATE_TIP_STORE_VALUE.UPDATE_PERSON:
          numVal = Math.floor(numVal);
          this.personCount = numVal;
        break;
        case UPDATE_TIP_STORE_VALUE.UPDATE_BILL:
          this.billAmount = numVal;
        break;
      }
    },
    // resetStore(): void {
    //   this.tipValue = 0.00;
    //   this.personCount = 0;
    //   this.billAmount = 0.00;
    // },
  }
})