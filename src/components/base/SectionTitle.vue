<template>
  <div class="section">
    <div>
      <div class="title">
        {{ title }}
      </div>

      <div v-if="subtitle" class="subtitle">
        {{ subtitle }}
      </div>
    </div>

    <div class="right" @click="$emit('more')">
      <slot>
        {{ rightText }}
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(["more"]);

withDefaults(
  defineProps({
    title: String,

    subtitle: String,

    rightText: {
      type: String,
      default: "查看更多",
    },
  }),
  {}
);
</script>

<style scoped lang="scss">
.section {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 18px;
}

.title {
  font-size: 22px;
  font-weight: 700;
  color: $text-main;
}

.subtitle {
  margin-top: 4px;
  color: $text-secondary;
  font-size: 13px;
}

.right {
  color: $primary-color;
  font-size: 14px;
}
</style>
