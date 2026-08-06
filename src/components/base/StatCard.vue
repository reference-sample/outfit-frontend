<template>
  <BaseCard class="stat-card">
    <div class="number">
      {{ value }}
    </div>

    <div class="label">
      {{ label }}
    </div>

    <div v-if="desc" class="desc">
      {{ desc }}
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from "./BaseCard.vue";

withDefaults(
  defineProps({
    value: {
      type: [String, Number],
      default: 0,
    },

    label: {
      type: String,
      default: "",
    },

    desc: {
      type: String,
      default: "",
    },
  }),
  {}
);
</script>

<style scoped lang="scss">
.stat-card {
  text-align: center;
  cursor: pointer;
  transition: 0.25s;

  &:active {
    transform: scale(0.98);
  }
}

.number {
  font-size: 32px;
  font-weight: 700;
  color: $primary-color;
  line-height: 1;
}

.label {
  margin-top: 10px;
  font-size: 15px;
  color: $text-main;
}

.desc {
  margin-top: 6px;
  color: $text-secondary;
  font-size: 12px;
}
</style>
