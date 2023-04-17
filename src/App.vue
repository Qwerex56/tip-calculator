<template>
  <div>
    <TipButton :name="'some_name'" :tip-value="12.5"/>
    <InputField :img-src="iconDollar">
      bill
    </InputField>
  </div>
</template>

<script lang="ts">
import TipButton from './components/widgets/TipButton.vue';
import InputField from './components/widgets/InputField.vue';

import iconDollar from './assets/images/icon-dollar.svg';

export default {
  components: {
    TipButton,
    InputField,
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
