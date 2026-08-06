<template>
  <div class="search-bar">
    <van-search
      v-model="keyword"
      shape="round"
      placeholder="搜索衣物、穿搭..."
      clearable
      @search="emitSearch"
      @update:model-value="emitInput"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue", "search"]);

const keyword = ref(props.modelValue);

watch(
  () => props.modelValue,
  (v) => {
    keyword.value = v;
  }
);

const emitInput = () => {
  emit("update:modelValue", keyword.value);
};

const emitSearch = () => {
  emit("search", keyword.value);
};
</script>

<style scoped lang="scss">
.search-bar {
  :deep(.van-search) {
    padding: 0;
    background: transparent;
  }

  :deep(.van-search__content) {
    border-radius: 14px;
    background: #fff;
    height: 42px;
    box-shadow: $shadow-card;
  }

  :deep(.van-field__left-icon) {
    color: $text-secondary;
  }
}
</style>
