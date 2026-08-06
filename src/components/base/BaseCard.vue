<template>
  <div class="base-card" :class="{ shadow, bordered }">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  shadow?: boolean;
  bordered?: boolean;
}

withDefaults(defineProps<Props>(), {
  shadow: true,
  bordered: false,
});
</script>

<style scoped lang="scss">
.base-card {
  background: #fff;
  border-radius: 18px;
  padding: 16px;

  &.shadow {
    box-shadow: $shadow-card;
  }

  &.bordered {
    border: 1px solid $border-color;
  }
}
</style>
