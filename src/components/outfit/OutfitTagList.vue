<template>
  <div class="tag-list">
    <BaseTag v-for="tag in tags" :key="tag">
      {{ tag }}
    </BaseTag>
  </div>
</template>

<script setup lang="ts">
import BaseTag from "../base/BaseTag.vue";

defineProps<{
  tags: string[];
}>();
</script>

<style scoped lang="scss">
.tag-list {
  display: flex;

  gap: 8px;

  flex-wrap: wrap;

  margin-top: 14px;
}
</style>
