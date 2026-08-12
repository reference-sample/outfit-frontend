<template>
  <BasePage class="outfit-page">
    <header class="page-header">
      <h1>穿搭</h1>
      <button type="button" aria-label="筛选" class="filter-button" @click="notifyPending">☷</button>
    </header>

    <div class="search-shell">
      <span>⌕</span>
      <input v-model="keyword" type="search" placeholder="搜索穿搭名称 / 场景 / 单品" />
    </div>

    <nav class="filter-tabs" aria-label="穿搭分类">
      <button v-for="tab in filterTabs" :key="tab" :class="{ active: activeTab === tab }" type="button" @click="activeTab = tab">
        {{ tab }}
      </button>
    </nav>

    <main class="outfit-grid">
      <button v-for="outfit in filteredOutfits" :key="outfit.id" class="outfit-card" type="button" @click="openDetail(outfit.id)">
        <div class="cover" :class="outfit.coverClass">
          <span class="cover-label">{{ outfit.scene }}</span>
        </div>
        <div class="card-content">
          <h2>{{ outfit.name }}</h2>
          <div class="tags"><BaseTag v-for="tag in outfit.tags" :key="tag">{{ tag }}</BaseTag></div>
        </div>
      </button>
    </main>

    <button class="add-button" type="button" aria-label="新增穿搭" @click="notifyPending">＋</button>
    <BottomTab />
  </BasePage>
</template>

<script setup lang="ts">
import BasePage from "@/components/base/BasePage.vue";
import BaseTag from "@/components/base/BaseTag.vue";
import BottomTab from "@/components/base/BottomTab.vue";
import { showToast } from "vant";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { filterTabs, outfits } from "./mock";

const router = useRouter();
const keyword = ref("");
const activeTab = ref("全部");
const notifyPending = () => showToast("该功能待接口接入");
const openDetail = (id: number) => router.push(`/outfit/${id}`);

const filteredOutfits = computed(() => outfits.filter((outfit) => {
  const matchesTab = activeTab.value === "全部" || outfit.tags.includes(activeTab.value);
  const matchesKeyword = !keyword.value || `${outfit.name}${outfit.scene}${outfit.tags.join("")}`.includes(keyword.value);
  return matchesTab && matchesKeyword;
}));
</script>

<style scoped lang="scss">
.outfit-page { padding: 0 16px 100px; }
.page-header { display: flex; align-items: center; justify-content: space-between; height: 60px; }
.page-header h1 { margin: 0; color: $text-main; font-size: 20px; font-weight: $font-semibold; }
.filter-button { color: $text-main; font-size: 23px; }

.search-shell {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 13px;
  border-radius: $radius-circle;
  background: $card-bg;
  box-shadow: 0 3px 12px rgba($text-main, 0.05);
  color: $text-secondary;
}
.search-shell span { font-size: 20px; }
.search-shell input { width: 100%; color: $text-main; font-size: 13px; }
.search-shell input::placeholder { color: $text-placeholder; }

.filter-tabs { display: flex; gap: 8px; overflow-x: auto; margin: 16px -16px 15px; padding: 0 16px; }
.filter-tabs button { flex: 0 0 auto; padding: 6px 12px; border-radius: $radius-circle; color: $text-secondary; font-size: 12px; }
.filter-tabs .active { background: $primary-color; color: $text-white; box-shadow: 0 3px 8px rgba($primary-color, 0.2); }

.outfit-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px 12px; }
.outfit-card { overflow: hidden; border-radius: $radius-md; background: $card-bg; color: $text-main; text-align: left; box-shadow: $shadow-card; }
.cover { position: relative; height: 178px; overflow: hidden; }
.cover::before { position: absolute; right: 23%; bottom: -9%; width: 38%; height: 78%; border-radius: 47% 47% 4px 4px; background: rgba($text-main, 0.76); box-shadow: 0 -28px 0 -15px rgba($primary-light, 0.9); content: ""; }
.cover-label { position: absolute; right: 8px; bottom: 7px; color: rgba($text-white, 0.9); font-size: 10px; }
.cover--wine { background: linear-gradient(145deg, $text-main, $wine-color 58%, $primary-light); }
.cover--cream { background: linear-gradient(145deg, $surface-warm, $surface-light 55%, $primary-light); }
.cover--night { background: linear-gradient(145deg, $text-main, $primary-dark 55%, $surface-warm); }
.cover--city { background: linear-gradient(145deg, $text-primary, $surface-light 57%, $text-secondary); }
.card-content { padding: 10px 10px 12px; }
.card-content h2 { overflow: hidden; margin: 0; font-size: 14px; text-overflow: ellipsis; white-space: nowrap; }
.tags { display: flex; gap: 4px; flex-wrap: wrap; margin-top: 7px; }
.tags :deep(.base-tag) { padding: 3px 6px; font-size: 10px; }

.add-button { position: fixed; right: 22px; bottom: 84px; display: grid; width: 48px; height: 48px; place-items: center; border-radius: 50%; background: $primary-color; box-shadow: 0 7px 16px rgba($primary-color, 0.3); color: $text-white; font-size: 27px; }
</style>
