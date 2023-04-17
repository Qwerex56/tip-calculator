<template>
  <div>
    <TipButton :name="'some_name'" :tip-value="12.5"/>
  </div>
</template>

<script lang="ts">
import TipButton from './components/widgets/TipButton.vue';

export default {
  components: {
    TipButton,
  },
}
</script>

<style scoped lang="scss">
div {
  height: 20px;
}
</style>
