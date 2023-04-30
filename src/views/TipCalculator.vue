<template>
  <div class="tip-calculator">
    <div class="tip-calculator__logo">
      <img src="@/assets/images/logo.svg" alt="">
    </div>
    <div class="tip-calculator__app">
      <InputSectionVue/>
      <TipTotalDisplayer class="tip-calculator__app__displayer"/>
    </div>
  </div>
</template>

<script lang="ts">
import InputSectionVue from '@/widgets/InputSection.vue';
import TipTotalDisplayer from '@/widgets/TipTotalDisplayer.vue';

import { useTipStore } from '@/modules/store/TipStore';
import { mapStores } from 'pinia';

export default {
  components: {
    InputSectionVue,
    TipTotalDisplayer,
  },
  computed: {
    ...mapStores(useTipStore),
  }
}

</script>

<style lang="scss">
.tip-calculator {
  display: flex;
  flex-direction: column;

  gap: 2rem;

  background-color: $light-grayish-cyan;

  &__logo {
    justify-self: center;
    align-self: center;

    padding-top: 2rem;
  }

  &__app {
    display: flex;
    flex-direction: column;
    
    width: 100%;

    padding-top: 2rem;
    gap: 2rem;
    
    border-radius: 1rem;

    background-color: $white;

    &__displayer {
      margin: 1.5rem;
      margin-top: 0;
    }
  }
}
</style>