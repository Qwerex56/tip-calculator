<template>
  <div>
    <InputSection/>
    <TotalCard>
      <template #description>
        Tip Amount
      </template>
      <template #amount>
        {{ tipStore.calculateTotalPerPerson.toFixed(2) }}
      </template>
    </TotalCard>
  </div>
</template>

<script lang="ts">
import InputSection from './components/widgets/InputSection.vue';
import TotalCard from './components/widgets/TotalCard.vue';

import { useTipStore } from './modules/store/TipStore';
import { mapStores } from 'pinia';

import iconDollar from './assets/images/icon-dollar.svg';

export default {
  components: {
    InputSection,
    TotalCard,
  },
  data() {
    return {
      iconDollar,

    }
  },
  computed: {
    ...mapStores(useTipStore),
  }
}
</script>

<style scoped lang="scss">
</style>
