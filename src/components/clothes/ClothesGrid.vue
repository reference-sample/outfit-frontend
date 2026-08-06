<template>
  <div class="grid">
    <ClothesCard v-for="item in list" :key="item.id" v-bind="item" @click="$emit('click', $event)" />
  </div>
</template>

<script setup lang="ts">
import ClothesCard from "./ClothesCard.vue";

defineEmits(["click"]);

defineProps<{
  list: any[];
}>();
</script>

<style scoped lang="scss">
.grid {
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 16px;
}
</style>
