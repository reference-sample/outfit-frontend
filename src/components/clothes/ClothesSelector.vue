<template>
  <van-popup v-model:show="show" position="bottom" round :style="{ height: '80vh' }">
    <div class="selector">
      <SearchBar v-model="keyword" />

      <CategoryTabs class="mt16" v-model="category" :list="categories" />

      <div class="list">
        <ClothesGrid :list="list" @click="toggle" />
      </div>

      <div class="bottom">
        <BaseButton @click="confirm"> 完成（{{ selected.length }}） </BaseButton>
      </div>
    </div>
  </van-popup>
</template>

<script setup lang="ts">
import { ref } from "vue";

import SearchBar from "../base/SearchBar.vue";
import CategoryTabs from "./CategoryTabs.vue";
import ClothesGrid from "./ClothesGrid.vue";
import BaseButton from "../base/BaseButton.vue";

const show = defineModel<boolean>("show", { default: false });

const keyword = ref("");

const category = ref("");

const selected = ref<any[]>([]);

defineProps({
  list: {
    type: Array,
    default: () => [],
  },

  categories: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["confirm"]);

const toggle = (item: any) => {
  const i = selected.value.findIndex((v) => v.id === item.id);

  if (i > -1) {
    selected.value.splice(i, 1);
  } else {
    selected.value.push(item);
  }
};

const confirm = () => {
  emit("confirm", selected.value);

  show.value = false;
};
</script>

<style scoped lang="scss">
.selector {
  display: flex;

  flex-direction: column;

  height: 100%;

  padding: 16px;
}

.mt16 {
  margin-top: 16px;
}

.list {
  flex: 1;

  overflow: auto;

  margin-top: 18px;
}

.bottom {
  padding-top: 16px;
}
</style>
