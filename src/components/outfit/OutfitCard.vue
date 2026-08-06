<template>
  <div class="outfit-card" @click="$emit('click', id)">
    <div class="cover">
      <img :src="cover" :alt="name" />
    </div>

    <div class="content">
      <div class="title">
        {{ name }}
      </div>

      <div v-if="caption" class="caption">
        {{ caption }}
      </div>

      <div v-if="tags?.length" class="tags">
        <BaseTag v-for="tag in tags" :key="tag">
          {{ tag }}
        </BaseTag>
      </div>

      <div v-if="date" class="date">
        {{ date }}
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
  caption?: string;
  date?: string;
  tags?: string[];
}>();
</script>

<style scoped lang="scss">
.outfit-card {
  overflow: hidden;
  background: #fff;
  border-radius: 18px;
  box-shadow: $shadow-card;
  transition: 0.25s;

  &:active {
    transform: scale(0.98);
  }
}

.cover {
  aspect-ratio: 3/4;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.35s;
  }
}

.content {
  padding: 14px;
}

.title {
  font-size: 17px;
  font-weight: 600;
  color: $text-main;
}

.caption {
  margin-top: 6px;
  font-size: 13px;
  color: $text-secondary;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 12px;
}

.date {
  margin-top: 12px;
  font-size: 12px;
  color: $text-placeholder;
}
</style>
