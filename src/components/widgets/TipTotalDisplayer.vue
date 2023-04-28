<template>
  <div class="tip-displayer">
    <TotalCard class="tip-displayer__tip-amount">
      <template #description>
          Tip Amount
      </template>
      <template #amount>
          {{ tipStore.calculateTipAmountPerPerson }}
      </template>
    </TotalCard>
    <TotalCard class="tip-displayer__total">
      <template #description>
          Total
      </template>
      <template #amount>
          {{ tipStore.calculateTotalPerPerson }}
      </template>
    </TotalCard>
    <ResetButton/>
  </div>
</template>

<script lang="ts">
import TotalCard from './TotalCard.vue';
import ResetButton from './ResetButton.vue';

import { useTipStore } from '@/modules/store/TipStore';
import { mapStores } from 'pinia';

export default {
  components: {
    TotalCard,
    ResetButton
  },
  computed: {
    ...mapStores(useTipStore),
  }
}
</script>

<style lang="scss">
.tip-displayer {
  display: flex;
  flex-direction: column;

  padding: 1.5rem;
  padding-top: 2.75rem;

  border-radius: .75rem;

  background-color: $very-dark-cyan;

  &__tip-amount {
    margin-bottom: 1.5rem;
  }

  &__total {
    margin-bottom: 2.25rem;
  }
}
</style>