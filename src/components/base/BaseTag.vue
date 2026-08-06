<template>
  <span class="base-tag" :class="type">
    <slot />
  </span>
</template>

<script setup lang="ts">
interface Props {
  type?: "primary" | "coffee" | "green" | "gray";
}

withDefaults(defineProps<Props>(), {
  type: "primary",
});
</script>

<style scoped lang="scss">
.base-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;

  &.primary {
    background: #f8e5e7;
    color: $primary-dark;
  }

  &.coffee {
    background: #f4eee8;
    color: #8b6d57;
  }

  &.green {
    background: #eef6ef;
    color: #4d845c;
  }

  &.gray {
    background: #f4f4f4;
    color: #777;
  }
}
</style>
