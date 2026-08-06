<template>
  <BaseCard>
    <div class="title">
      {{ title }}
    </div>

    <div v-if="date" class="date">
      {{ date }}
    </div>

    <div v-if="caption" class="caption">
      {{ caption }}
    </div>

    <OutfitTagList :tags="tags" />
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from "../base/BaseCard.vue";
import OutfitTagList from "./OutfitTagList.vue";

withDefaults(
  defineProps<{
    title: string;

    caption?: string;

    date?: string;

    tags?: string[];
  }>(),
  {
    tags: () => [],
  }
);
</script>

<style scoped lang="scss">
.title {
  font-size: 22px;
  font-weight: 700;
  color: $text-main;
}

.date {
  margin-top: 6px;
  font-size: 12px;
  color: $text-placeholder;
}

.caption {
  margin-top: 16px;
  color: $text-primary;
  line-height: 1.9;
  font-size: 15px;
}
</style>
