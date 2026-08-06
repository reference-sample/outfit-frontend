<template>
  <div class="clothes-card" @click="$emit('click', id)">
    <div class="image">
      <img :src="cover" :alt="name" />
    </div>

    <div class="body">
      <div class="name">{{ name }}</div>

      <div class="category">
        {{ category }}
      </div>

      <div class="footer">
        <BaseTag type="gray">
          {{ season }}
        </BaseTag>

        <span v-if="usedCount !== undefined" class="count"> 使用 {{ usedCount }} 次 </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseTag from "../base/BaseTag.vue";

defineEmits(["click"]);

defineProps<{
  id: number | string;
  cover: string;
  name: string;
  category: string;
  season: string;
  usedCount?: number;
}>();
</script>

<style scoped lang="scss">
.clothes-card {
  overflow: hidden;
  background: #fff;
  border-radius: 18px;
  box-shadow: $shadow-card;
  transition: 0.25s;

  &:active {
    transform: scale(0.98);
  }
}

.image {
  aspect-ratio: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.body {
  padding: 12px;
}

.name {
  font-size: 15px;
  font-weight: 600;
  color: $text-main;
}

.category {
  margin-top: 4px;
  font-size: 13px;
  color: $text-secondary;
}

.footer {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.count {
  font-size: 12px;
  color: $text-placeholder;
}
</style>
