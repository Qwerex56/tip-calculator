<template>
  <div>
    <InputSection/>
    <TotalCard>
      <template #description>
        Tip Amount
      </template>
      <template #amount>
        4.27
      </template>
    </TotalCard>
  </div>
</template>

<script lang="ts">
import InputSection from './components/widgets/InputSection.vue';
import TotalCard from './components/widgets/TotalCard.vue';

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
  }
}
</script>

<style scoped lang="scss">
</style>
