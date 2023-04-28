<template>
  <div class="tip-calculator">
    <div class="tip-calculator__logo">
      <img src="@/assets/images/logo.svg" alt="" srcset="">
    </div>
    <div class="tip-calculator__app">
      <InputSection/>
      <TipTotalDisplayer/>
    </div>
  </div>
</template>

<script lang="ts">
import InputSection from './components/widgets/InputSection.vue';
import TipTotalDisplayer from './components/widgets/TipTotalDisplayer.vue';

import { useTipStore } from './modules/store/TipStore';
import { mapStores } from 'pinia';

export default {
  components: {
    InputSection,
    TipTotalDisplayer,
  },
  computed: {
    ...mapStores(useTipStore),
  }
}
</script>

<style scoped lang="scss">
.tip-calculator {
  background-color: $light-grayish-cyan;

  &__logo {
    display: flex;
    justify-content: center;

    padding: 3rem 0rem;

  }
  
  &__app {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  
    padding: 1.5rem;

    background-color: $white;
  
    border-radius: 1.5rem;
  }
}
</style>
