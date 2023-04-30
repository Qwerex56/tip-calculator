<template>
  <div class="input-field">
    <div class="input-field__head">
      <p class="input-field__head__description"><slot></slot></p>
      <p
        v-if="isError"
        class="input-field__head__error">
          Cant't be zero
      </p>
    </div>
    <div class="input-field__input-section">
      <CustomInput 
        class="input-field__input-section__input"
        :class="{'error': isError}"
        p-holder="0"
        v-model="tipStore.billAmount"
      />
      <img class="input-field__input-section__icon" :src="iconDollar">
    </div>
  </div>
</template>

<script lang="ts">
import CustomInput from '@/components/CustomInput.vue';

import { useTipStore } from '@/modules/store/TipStore';
import { mapStores } from 'pinia';

import type { UPDATE_TIP_STORE_VALUE } from '@/modules/enums/TipStoreTypesEnum';
import type { PropType } from 'vue';

import IconDollar from '@/assets/images/icon-dollar.svg';

export default {
  components: {
    CustomInput,
  },
  props: {
    imgSrc: {
      type: String,
      required: false,
    },
    updateValue: {
      type: Object as PropType<UPDATE_TIP_STORE_VALUE>,
      required: false,
    },
    isError: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  data() {
    return {
      iconDollar: IconDollar,
    }
  },
  computed: {
    ...mapStores(useTipStore),
  },
  methods: {
    updateTipStoreValue(val: string) {
      this.tipStore.setValue(val, this.updateValue)
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