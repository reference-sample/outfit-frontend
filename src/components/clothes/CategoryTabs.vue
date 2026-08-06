<template>
  <div class="tabs">
    <div
      v-for="item in list"
      :key="item.value"
      class="item"
      :class="{ active: modelValue === item.value }"
      @click="change(item.value)"
    >
      {{ item.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: [String, Number],

  list: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["update:modelValue"]);

const change = (v: any) => {
  emit("update:modelValue", v);
};
</script>

<style scoped lang="scss">
.tabs {
  display: flex;

  gap: 10px;

  overflow: auto;

  padding-bottom: 4px;
}

.item {
  padding: 8px 18px;

  border-radius: 999px;

  background: #fff;

  font-size: 14px;

  white-space: nowrap;

  transition: 0.25s;

  box-shadow: $shadow-card;
}

.active {
  background: $primary-color;

  color: #fff;
}
</style>
