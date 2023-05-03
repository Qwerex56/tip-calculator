<template>
  <div class="reset-button">
    <input
      class="reset-button__button" 
      type="button"
      value="RESET"
      @click="tipStore.$reset"
    >
  </div>
</template>

<script lang="ts">
import { useTipStore } from '@/modules/store/TipStore';
import { mapStores } from 'pinia';

export default {
  computed: {
    ...mapStores(useTipStore),
  },
}

</script>

<style lang="scss">
.reset-button {
  display: flex;

  &__button {
    width: 100%;
    height: 48px;

    background-color: $strong-cyan;
    color: $very-dark-cyan;
    
    border: none;
    border-radius: .25rem;

    font-size: 1rem;
    font-weight: 700;
    text-align: center;

    &:hover {
      background-color: $light-grayish-cyan;
    }
  }
}
</style>