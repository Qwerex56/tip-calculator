<template>
  <div class="tip-calculator">
    <div class="tip-calculator__logo">
      <img src="@/assets/images/logo.svg" alt="">
    </div>
    <div class="tip-calculator__app">
      <InputSectionVue/>
      <TipTotalDisplayer/>
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

  padding: 1rem;
  gap: 1rem;

  &__app {
    display: flex;
    flex-direction: column;

    gap: 2rem;
  }
}
</style>