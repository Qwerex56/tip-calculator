<template>
    <div class="tip-calculator__app">
      <InputSectionVue class="tip-calculator__app__input"/>
      <TipTotalDisplayer class="tip-calculator__app__displayer"/>
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
.tip-calculator__app {
  display: flex;
  flex-direction: column;
    
  width: 100%;
  gap: 2rem;
  padding: 2rem;
    
  border-radius: 1rem 1rem 0 0; 

  background-color: $white;

  &__displayer {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;

    justify-self: center;
    align-self: center;

    max-width: 920px;
    max-height: 490px;

    border-radius: 1rem;

    &__input {
      padding: 1rem;
    }
  }
}
</style>