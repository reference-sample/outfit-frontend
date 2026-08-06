<template>
  <div class="action">
    <BaseButton variant="secondary" :block="false" @click="$emit('edit')"> 编辑 </BaseButton>

    <BaseButton :block="false" @click="$emit('delete')" variant="danger"> 删除 </BaseButton>
  </div>
</template>

<script setup lang="ts">
defineEmits(["edit", "delete"]);
</script>

<style scoped lang="scss">
.action {
  display: flex;

  gap: 12px;

  margin-top: 24px;
}

.action > * {
  flex: 1;
}
</style>
