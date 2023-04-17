<template>
  <div class="input-field">
    <p class="input-field__type"><slot></slot></p>
    <div class="input-field__input-section">
      <input class="input-field__input-section__input" type="number">
      <img class="input-field__input-section__icon" :src="imgSrc" alt="image">
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    imgSrc: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped lang="scss">
.input-field {
  font-family: $space-mono;
  font-weight: $bold-weight;
  
  &__type {
    color: $dark-grayish-cyan;
  }

  &__input-section {
    position: relative;

    &__input {
      appearance: none;

      border-radius: .25rem;
      border: none;
      outline: none;

      min-width: 100%;
      min-height: 100%;

      background-color: $very-light-grayish-cyan;
      color: $very-dark-cyan;

      font-family: inherit;
      font-weight: inherit;
      text-align: right;

      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        appearance: none;
      }
      
    }
    
    &__icon {
      position: absolute;  
  
      top: 50%; left: 0%;
      transform: translate(50%, -50%);
    }
  }
}
</style>