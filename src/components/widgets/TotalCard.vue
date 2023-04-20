<template>
  <div class="total-card">
    <p class="total-card__description">
      <slot name="description">

      </slot><br>
      <span class="total-card__description--person">/ preson</span>
    </p>
    <p class="total-card__amount">
      <slot name="amount">

      </slot>
    </p>
  </div>
</template>

<script lang="ts">
export default {

}
</script>

<style scoped lang="scss">
.total-card {
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: $space-mono;

  &__description {

    color: $white;
    
    font-size: 1rem;

    &--person {
      color: $dark-grayish-cyan;

      font-size: 0.5rem;
    }
  }

  &__amount {
    color: $strong-cyan;

    font-size: 2rem;

    &::before {
      content: url('@/assets/images/icon-dollar.svg');
    }
  }
}
</style>