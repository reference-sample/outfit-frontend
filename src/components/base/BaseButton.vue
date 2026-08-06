<template>
  <van-button
    :type="vanType"
    :block="block"
    :round="round"
    :loading="loading"
    :disabled="disabled"
    :class="['base-button', variant]"
    v-bind="$attrs"
  >
    <slot />
  </van-button>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  variant?: "primary" | "secondary" | "danger" | "plain";
  block?: boolean;
  round?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  block: true,
  round: true,
  loading: false,
  disabled: false,
});

const vanType = computed(() => {
  if (props.variant === "danger") return "danger";
  return "primary";
});
</script>

<style scoped lang="scss">
.base-button {
  height: 44px;
  font-size: 15px;
  font-weight: 500;
  transition: 0.25s;

  &.primary {
    background: $primary-color;
    border-color: $primary-color;
  }

  &.secondary {
    background: #fff;
    color: $primary-color;
    border: 1px solid $primary-color;
  }

  &.plain {
    background: #f8f5f4;
    color: $text-main;
    border: none;
  }

  &.danger {
    background: $error;
    border-color: $error;
  }

  &:active {
    transform: scale(0.98);
  }
}
</style>
