<template>
  <van-nav-bar
    :title="title"
    :left-arrow="leftArrow"
    fixed
    safe-area-inset-top
    class="base-navbar"
    @click-left="onBack"
  >
    <template #right>
      <slot name="right" />
    </template>
  </van-nav-bar>

  <div class="navbar-placeholder"></div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

interface Props {
  title: string;
  leftArrow?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  leftArrow: true,
});

const router = useRouter();

const onBack = () => {
  router.back();
};
</script>

<style scoped lang="scss">
.base-navbar {
  background: rgba(250, 247, 244, 0.92);
  backdrop-filter: blur(20px);

  :deep(.van-nav-bar__title) {
    font-size: 18px;
    font-weight: 600;
    color: $text-main;
  }

  :deep(.van-icon) {
    color: $text-main;
    font-size: 20px;
  }

  &::after {
    display: none;
  }
}

.navbar-placeholder {
  height: 46px;
}
</style>
