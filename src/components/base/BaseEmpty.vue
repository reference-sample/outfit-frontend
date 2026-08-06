<template>
  <div class="empty">
    <van-empty :image="image" :description="description" />

    <div class="title">
      {{ title }}
    </div>

    <div v-if="buttonText" class="btn">
      <BaseButton :block="false" @click="$emit('click')">
        {{ buttonText }}
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "./BaseButton.vue";

defineEmits(["click"]);

withDefaults(
  defineProps({
    image: {
      type: String,
      default: "default",
    },

    title: {
      type: String,
      default: "还没有内容",
    },

    description: {
      type: String,
      default: "今天，也值得留下一个瞬间。",
    },

    buttonText: {
      type: String,
      default: "",
    },
  }),
  {}
);
</script>

<style scoped lang="scss">
.empty {
  padding: 60px 20px;
  text-align: center;
}

.title {
  margin-top: 12px;
  font-size: 18px;
  color: $text-main;
  font-weight: 600;
}

.btn {
  margin-top: 24px;
}
</style>
