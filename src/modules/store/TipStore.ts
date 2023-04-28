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
    calculateTotalPerPerson(state): number {
      const total = state.billAmount + this.calculateTipAmount;
      
      if (state.personCount <= 0) {
        return 0.00;
      }
      
      const totalPerPerson = total / state.personCount;
      return totalPerPerson;
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
    }
  }
})