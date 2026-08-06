<template>
  <div class="preview">
    <div v-for="item in list" :key="item.id" class="item">
      <img :src="item.cover" />

      <div class="remove" @click="$emit('remove', item.id)">✕</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(["remove"]);

defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped lang="scss">
.preview {
  display: flex;

  gap: 12px;

  overflow: auto;
}

.item {
  position: relative;

  width: 82px;

  flex: none;
}

img {
  width: 82px;

  height: 82px;

  border-radius: 14px;

  object-fit: cover;
}

.remove {
  position: absolute;

  right: -6px;

  top: -6px;

  width: 20px;

  height: 20px;

  border-radius: 50%;

  background: $error;

  color: #fff;

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 12px;
}
</style>
