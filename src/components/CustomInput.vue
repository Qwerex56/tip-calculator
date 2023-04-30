<template>
  <input
    type="number"
    class="custom-tip-input" 
    :placeholder="pHolder"
    :value="modelValue"
    @input="$emit('update:modelValue', parseFloat(($event.target as HTMLInputElement).value))"
  />
</template>

<script lang="ts">
export default {
  props: {
    pHolder: {
      type: String,
      required: false,
    },
    modelValue: {
      type: Number, 
      required: false,
    },
  },
  emits: ['update:modelValue',]
}
</script>

<style lang="scss">
.custom-tip-input {
  appearance: none;
  box-sizing: border-box;
  direction: rtl;
  
  width: 100%;

  outline: none;
  border: none;
  border-radius: 0.25rem;

  background-color: $very-light-grayish-cyan;
  color: $very-dark-cyan;

  font-family: $space-mono;
  font-size: 1.5rem;
  font-weight: $bold-weight;
  text-align: right;
  text-indent: 1rem;

  &:hover {
    border: .125rem solid $strong-cyan;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
  }
}
</style>