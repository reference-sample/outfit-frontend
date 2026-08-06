<template>
  <div class="outfit-swiper">
    <van-swipe :autoplay="3000" lazy-render indicator-color="#C95B68">
      <van-swipe-item v-for="(item, index) in images" :key="index">
        <img :src="item" class="image" />
      </van-swipe-item>
    </van-swipe>

    <div class="count">{{ current }}/{{ images.length }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  images: string[];
}>();

const current = ref(1);
</script>

<style scoped lang="scss">
.outfit-swiper {
  position: relative;
  overflow: hidden;
  border-radius: 22px;
}

.image {
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
}

.count {
  position: absolute;
  right: 12px;
  bottom: 12px;
  padding: 4px 10px;
  border-radius: 20px;
  color: #fff;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(8px);
}
</style>
