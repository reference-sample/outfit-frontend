<template>
  <BasePage class="detail-page">
    <section class="detail-hero" :class="outfit.coverClass">
      <button class="back-button" type="button" aria-label="返回" @click="router.back()">‹</button>
      <button class="share-button" type="button" aria-label="分享" @click="notifyPending">↗</button>
      <div class="hero-figure" aria-hidden="true"></div>
      <span class="image-count">1/5</span>
    </section>

    <main class="detail-content">
      <h1>{{ outfit.name }}</h1>
      <p class="date">{{ outfit.date }}</p>
      <p class="description">{{ outfit.description }}</p>
      <div class="tag-list"><BaseTag v-for="tag in outfit.tags" :key="tag">{{ tag }}</BaseTag></div>

      <section class="info-section">
        <h2>搭配信息</h2>
        <dl>
          <div><dt>上装</dt><dd>{{ outfit.items[0].name }}</dd></div>
          <div><dt>下装</dt><dd>{{ outfit.items[1].name }}</dd></div>
          <div><dt>配饰</dt><dd>{{ outfit.items[2].name }}</dd></div>
        </dl>
      </section>
    </main>

    <footer class="action-bar">
      <BaseButton variant="secondary" :block="false" @click="notifyPending">♡ 收藏</BaseButton>
      <BaseButton :block="false" @click="notifyPending">编辑穿搭</BaseButton>
    </footer>
  </BasePage>
</template>

<script setup lang="ts">
import BaseButton from "@/components/base/BaseButton.vue";
import BasePage from "@/components/base/BasePage.vue";
import BaseTag from "@/components/base/BaseTag.vue";
import { showToast } from "vant";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { outfits } from "./mock";

const route = useRoute();
const router = useRouter();
const outfit = computed(() => outfits.find((item) => item.id === Number(route.params.id)) ?? outfits[0]);
const notifyPending = () => showToast("该功能待接口接入");
</script>

<style scoped lang="scss">
.detail-page { min-height: 100vh; padding: 0 0 88px; }
.detail-hero { position: relative; height: 336px; overflow: hidden; }
.detail-hero::before { position: absolute; inset: 0; background: inherit; content: ""; }
.detail-hero::after { position: absolute; inset: 0; background: linear-gradient(180deg, rgba($text-main, 0.2), transparent 35%); content: ""; }
.detail-hero.cover--wine { background: linear-gradient(145deg, $text-main, $wine-color 58%, $primary-light); }
.detail-hero.cover--cream { background: linear-gradient(145deg, $surface-warm, $surface-light 55%, $primary-light); }
.detail-hero.cover--night { background: linear-gradient(145deg, $text-main, $primary-dark 55%, $surface-warm); }
.detail-hero.cover--city { background: linear-gradient(145deg, $text-primary, $surface-light 57%, $text-secondary); }
.hero-figure { position: absolute; z-index: 1; right: 27%; bottom: -6%; width: 35%; height: 78%; border-radius: 49% 49% 4px 4px; background: rgba($text-main, 0.76); box-shadow: 0 -52px 0 -26px rgba($primary-light, 0.9); }
.back-button, .share-button { position: absolute; z-index: 2; top: 16px; display: grid; width: 36px; height: 36px; place-items: center; border-radius: 50%; background: rgba($text-main, 0.25); color: $text-white; font-size: 27px; }
.back-button { left: 16px; }.share-button { right: 16px; font-size: 20px; }.image-count { position: absolute; z-index: 2; right: 16px; bottom: 16px; padding: 4px 9px; border-radius: $radius-circle; background: rgba($text-main, 0.62); color: $text-white; font-size: 12px; }

.detail-content { position: relative; z-index: 3; margin-top: -22px; padding: 23px 20px 26px; border-radius: $radius-lg $radius-lg 0 0; background: $card-bg; }
.detail-content h1 { margin: 0; color: $text-main; font-size: 21px; }.date { margin: 6px 0 15px; color: $text-placeholder; font-size: 12px; }.description { margin: 0; color: $text-primary; font-size: 13px; line-height: 1.8; }.tag-list { display: flex; gap: 7px; flex-wrap: wrap; margin-top: 15px; }
.info-section { margin-top: 22px; padding-top: 20px; border-top: 1px solid $border-light; }.info-section h2 { margin: 0 0 12px; color: $text-main; font-size: 15px; }.info-section dl { margin: 0; }.info-section dl div { display: grid; grid-template-columns: 62px 1fr; padding: 9px 0; }.info-section dt { color: $text-secondary; font-size: 13px; }.info-section dd { margin: 0; color: $text-primary; font-size: 13px; }
.action-bar { position: fixed; z-index: 4; right: 0; bottom: 0; left: 0; display: flex; gap: 10px; padding: 12px 16px calc(env(safe-area-inset-bottom) + 12px); border-top: 1px solid $border-light; background: $card-bg; }.action-bar :deep(.base-button) { flex: 1; }
</style>
