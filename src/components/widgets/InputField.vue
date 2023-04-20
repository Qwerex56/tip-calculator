<template>
  <div class="input-field">
    <div class="input-field__head">
      <p class="input-field__head__description"><slot></slot></p>
      <p 
        v-if="false"
        class="input-field__head__error">
          Cant't be zero
      </p>
    </div>
    <div class="input-field__input-section">
      <CustomInput 
        class="input-field__input-section__input"
        :class="{'error': false}"
        p-holder="0"/>
      <img class="input-field__input-section__icon" :src="imgSrc">
    </div>
  </div>
</template>

<script lang="ts">
import CustomInput from './CustomInput.vue';

export default {
  components: {
    CustomInput,
  },
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
  
  &__head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &__description {
      color: $dark-grayish-cyan;

      margin-bottom: 0.5rem;
    }
  
    &__error {
      color: red;
  
      font-size: 1rem;
    }
  }


  &__input-section {
    position: relative;
    
    &__input {
      height: 48px;

      &.error {
        border: 2px solid red;
      }
    }

    &__icon {
      position: absolute;
      
      top: 50%; left: 1rem;
      transform: translate(50%, -50%);
      
      height: 1rem;
    }
  }
}
</style>