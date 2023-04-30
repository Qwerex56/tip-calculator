<template>
  <CustomInput
    p-holder="Custom"
    v-model="tipStore.tipValue">
  </CustomInput>
</template>

<script lang="ts">
import CustomInput from './CustomInput.vue';

import { useTipStore } from '@/modules/store/TipStore';
import { mapStores } from 'pinia';

export default {
  components: {
    CustomInput,
  },
  computed: {
    ...mapStores(useTipStore),
  }
}
</script>

<style>

</style>