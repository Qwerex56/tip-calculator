<template>
  <div class="input-section">
    <InputField 
      class="input-section__bill" 
      :img-src="iconDollar" 
      :update-value="tipStoreUpdateValue.UPDATE_BILL"
    >
      Bill
    </InputField>
    <p class="input-section__tip">Select Tip %</p>
    <div class="input-section__tip-selector">
      <TipButton name="tip-select" :tip-value="5"/>
      <TipButton name="tip-select" :tip-value="10"/>
      <TipButton name="tip-select" :tip-value="15"/>
      <TipButton name="tip-select" :tip-value="25"/>
      <TipButton name="tip-select" :tip-value="50"/>
      <CustomInput 
        p-holder="Custom"
        @input-value-change="(val: string) => {
          tipStore.setValue(val, tipStoreUpdateValue.UPDATE_TIP);
        }"  
      />
    </div>
    <InputField 
      class="input-section__people"
      :img-src="iconPerson" 
      :update-value="tipStoreUpdateValue.UPDATE_PERSON"
      :is-error="tipStore.validatePeopleCount"
    >
      Number of people
    </InputField>
  </div>
</template>

<script lang="ts">
import InputField from './InputField.vue';
import CustomInput from './CustomInput.vue';
import TipButton from './TipButton.vue';

import iconDollar from '@/assets/images/icon-dollar.svg';
import iconPerson from '@/assets/images/icon-person.svg';

import { useTipStore } from '@/modules/store/TipStore';
import { mapStores } from 'pinia';

import { UPDATE_TIP_STORE_VALUE } from '@/modules/enums/TipStoreTypesEnum';

export default {
  components: {
    InputField,
    CustomInput,
    TipButton,
  },
  computed: {
    ...mapStores(useTipStore),
  },
  data() {
    return {
      iconDollar: iconDollar,
      iconPerson: iconPerson,
      tipStoreUpdateValue: UPDATE_TIP_STORE_VALUE
    }
  }
}

</script>

<style lang="scss">
.input-section {
  // padding: 2rem;

  font-family: $space-mono;
  font-weight: $bold-weight;
  

  &__bill {
    margin-bottom: 2rem;
  }

  &__tip {
    color: $dark-grayish-cyan;
    margin-bottom: 0.5rem;
  }

  &__tip-selector {
    display: grid;
    
    grid-template: repeat(3, 3rem) / repeat(2, 9.25rem);
    gap: 1rem;

    margin-bottom: 2rem;
    
    height: 176px;

    font-size: 1.5rem;
  }
}
</style>