<template>
  <div class="tip-calculator">
    <img class="tip-calculator__logo" src="@/assets/images/logo.svg" alt="SPLITTER">
    <TipCalculator class="tip-calculator__app"/>
  </div>
</template>

<script lang="ts">
import TipCalculator from './views/TipCalculator.vue';

export default {
  components: {
    TipCalculator,
  },
}
</script>

<style scoped lang="scss">
.tip-calculator {
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 2.5rem;
  margin-top: 3rem;
  
  &__logo {
    width: 5rem;
  }
  
  &__app {
    padding: 2rem;
  }

  @media screen and (min-width: 768px) {
    gap: 5.5rem;
    margin-top: -3rem;
  }
}
</style>
