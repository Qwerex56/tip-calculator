<template>
  <div class="tip-btn">
    <input class="tip-btn__checkbox"  type="radio" :name='name'>
    <label class="tip-btn__label" :for='name'>
      {{ percentTipValue }}
    </label>
  </div>
</template>

<script lang='ts'>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    tipValue: {
      type: Number,
      required: true,
    }
  },
  computed: {
    percentTipValue() {
      return this.tipValue.toString().concat('%');
    },
  },
}
</script>
<style scoped lang='scss'>
.tip-btn {
  display: flex;
  position: relative;

  font-family: $space-mono;
  font-weight: $bold-weight;
  
  &__label {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);

    color: $white;

    pointer-events: none;
  }

  &__checkbox {
    appearance: none;

    min-width: 100%;
    min-height: 100%;

    background-color: $very-dark-cyan;
  
    &:checked {
      background-color: $strong-cyan;
      &+.tip-btn__label {
        color: $very-dark-cyan;
      }
    }

    &:not(:checked):hover {
      background-color: $light-grayish-cyan;
      &+.tip-btn__label {
        color: $very-dark-cyan;
      }
    }
  }
}
</style>