<template>
  <div class="input-section">
    <BillInputField class="input-section__bill">
      Bill
    </BillInputField>
    <p class="input-section__tip">Select Tip %</p>
    <div class="input-section__tip-selector">
      <TipButton name="tip-select" :tip-value="5"/>
      <TipButton name="tip-select" :tip-value="10"/>
      <TipButton name="tip-select" :tip-value="15"/>
      <TipButton name="tip-select" :tip-value="25"/>
      <TipButton name="tip-select" :tip-value="50"/>
      <CustomTipButton/>
    </div>
    <PersonInputField 
      class="input-section__people"
      :is-error="tipStore.validatePeopleCount"
    >
      Number of people
    </PersonInputField>
  </div>
</template>

<script lang="ts">
import BillInputField from './BillInputField.vue';
import PersonInputField from './PersonInputField.vue';
import CustomTipButton from '@/components/CustomTipButton.vue';
import TipButton from '@/components/TipButton.vue';

import iconDollar from '@/assets/images/icon-dollar.svg';
import iconPerson from '@/assets/images/icon-person.svg';

import { useTipStore } from '@/modules/store/TipStore';
import { mapStores } from 'pinia';

import { UPDATE_TIP_STORE_VALUE } from '@/modules/enums/TipStoreTypesEnum';

export default {
  components: {
    BillInputField,
    PersonInputField,
    CustomTipButton,
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
  display: flex;
  flex-direction: column;

  width: 100%;

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
    
    grid-template: repeat(3, 1fr) / repeat(2, 1fr);
    gap: 1rem;

    margin-bottom: 2rem;
    
    height: 176px;

    font-size: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    &__bill {
      margin-bottom: 3rem;
    }

    &__tip-selector {
      grid-template: repeat(2, 1fr) / repeat(3, 1fr);
      
      margin-bottom: 3rem;
    }
  }
}
</style>