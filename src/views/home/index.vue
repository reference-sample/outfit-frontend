<template>
  <BasePage class="home-page">
    <header class="page-header">
      <div>
        <div class="brand">Outfit</div>
        <div class="subtitle">姐姐 · 衣风录</div>
      </div>
      <button class="notice" type="button" aria-label="通知" @click="notifyPending">♧</button>
    </header>

    <section class="hero-card">
      <div class="hero-image" aria-hidden="true">
        <span>O</span>
      </div>
      <div class="hero-overlay">
        <p class="hero-kicker">{{ today.kicker }}</p>
        <h1>{{ today.title }}</h1>
        <p>{{ today.description }}</p>
      </div>
    </section>

    <button class="quote-card" type="button" @click="notifyPending">
      <div>
        <strong>今日金句</strong>
        <p>{{ today.quote }}</p>
      </div>
      <span>›</span>
    </button>

    <section class="recommend-section">
      <div class="section-header">
        <h2>穿搭推荐</h2>
        <button type="button" @click="notifyPending">查看更多 <span>›</span></button>
      </div>
      <div class="outfit-list">
        <button v-for="outfit in recommendedOutfits" :key="outfit.id" class="outfit-item" type="button" @click="notifyPending">
          <div class="outfit-cover" :class="outfit.coverClass">
            <span>{{ outfit.coverText }}</span>
          </div>
          <strong>{{ outfit.name }}</strong>
          <small>{{ outfit.date }}</small>
        </button>
      </div>
    </section>

    <section class="summary-card">
      <div class="summary-copy">
        <span>我的衣风录</span>
        <strong>记录每一次风格成长</strong>
      </div>
      <div class="summary-stats">
        <div v-for="item in summaryStats" :key="item.label">
          <strong>{{ item.value }}</strong>
          <span>{{ item.label }}</span>
        </div>
      </div>
    </section>

    <BottomTab />
  </BasePage>
</template>

<script setup lang="ts">
import BasePage from "@/components/base/BasePage.vue";
import BottomTab from "@/components/base/BottomTab.vue";
import { showToast } from "vant";
import { recommendedOutfits, summaryStats, today } from "./mock";

const notifyPending = () => showToast("该功能待接口接入");
</script>
<style lang="scss" scoped>
.home-page {
  padding: 0 16px 100px;
}

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.brand {
  color: $wine-color;
  font-family: $title-font;
  font-size: 29px;
  font-weight: $font-semibold;
  line-height: 1;
}

.subtitle {
  margin-top: 6px;
  color: $text-main;
  font-family: $title-font;
  font-size: 14px;
}

.notice {
  display: grid;
  width: 36px;
  height: 36px;
  place-items: center;
  border-radius: 50%;
  color: $text-main;
  font-size: 23px;
}

.hero-card {
  position: relative;
  overflow: hidden;
  height: 196px;
  border-radius: $radius-lg;
  background: $primary-dark;
  box-shadow: $shadow-card;
}

.hero-image {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 42px;
  background:
    radial-gradient(ellipse at 68% 36%, rgba($primary-light, 0.82) 0 7%, transparent 7.5%),
    radial-gradient(ellipse at 65% 71%, $wine-color 0 17%, transparent 17.5%),
    linear-gradient(120deg, $surface-light 0%, $primary-light 52%, $primary-dark 100%);
}

.hero-image::after {
  position: absolute;
  right: 10%;
  bottom: -11%;
  width: 31%;
  height: 72%;
  border-radius: 50% 50% 4px 4px;
  background: linear-gradient(90deg, $text-main, $wine-color 55%, $primary-dark);
  content: "";
}

.hero-image span {
  position: relative;
  z-index: 1;
  margin-right: 28%;
  color: rgba($text-white, 0.42);
  font-family: $title-font;
  font-size: 74px;
}

.hero-overlay {
  position: relative;
  z-index: 2;
  width: 62%;
  height: 100%;
  padding: 24px 18px;
  color: $text-white;
  text-align: left;
  text-shadow: 0 1px 8px rgba($text-main, 0.3);
}

.hero-kicker {
  margin: 0 0 8px;
  font-size: 12px;
  opacity: 0.9;
}

.hero-overlay h1 {
  margin: 0;
  font-size: 23px;
  line-height: 1.25;
}

.hero-overlay p:last-child {
  margin: 9px 0 0;
  font-size: 12px;
  line-height: 1.7;
}

.quote-card {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  padding: 15px 16px;
  border-radius: $radius-md;
  background: $card-bg;
  color: $text-main;
  text-align: left;
  box-shadow: 0 4px 14px rgba($text-main, 0.05);
}

.quote-card strong {
  font-size: 13px;
}

.quote-card p {
  margin: 5px 0 0;
  color: $text-secondary;
  font-size: 12px;
}

.quote-card > span {
  color: $text-secondary;
  font-size: 24px;
}

.recommend-section {
  margin-top: 27px;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 13px;
}

.section-header h2 {
  margin: 0;
  color: $text-main;
  font-size: 18px;
}

.section-header button {
  color: $text-secondary;
  font-size: 12px;
}

.section-header button span {
  font-size: 18px;
  vertical-align: -1px;
}

.outfit-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.outfit-item {
  min-width: 0;
  color: $text-main;
  text-align: left;
}

.outfit-cover {
  position: relative;
  display: grid;
  overflow: hidden;
  aspect-ratio: 0.85;
  place-items: center;
  border-radius: $radius-sm;
  box-shadow: 0 4px 10px rgba($text-main, 0.1);
}

.outfit-cover::before {
  width: 42%;
  height: 72%;
  border-radius: 45% 45% 8px 8px;
  background: rgba($text-main, 0.8);
  box-shadow: 0 -22px 0 -12px rgba($primary-light, 0.9);
  content: "";
}

.outfit-cover span {
  position: absolute;
  right: 8px;
  bottom: 6px;
  color: rgba($text-white, 0.86);
  font-size: 10px;
}

.outfit-cover--wine { background: linear-gradient(140deg, $text-main, $wine-color 55%, $primary-light); }
.outfit-cover--cream { background: linear-gradient(140deg, $surface-warm, $surface-light 55%, $primary-light); }
.outfit-cover--black { background: linear-gradient(140deg, $text-primary, $text-main 56%, $primary-light); }

.outfit-item strong {
  display: block;
  overflow: hidden;
  margin-top: 8px;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.outfit-item small {
  display: block;
  margin-top: 4px;
  color: $text-secondary;
  font-size: 11px;
}

.summary-card {
  margin-top: 26px;
  overflow: hidden;
  border-radius: $radius-lg;
  background: linear-gradient(135deg, $wine-color, $primary-color);
  color: $text-white;
  box-shadow: 0 8px 18px rgba($wine-color, 0.18);
}

.summary-copy {
  padding: 19px 18px 14px;
}

.summary-copy span,
.summary-copy strong {
  display: block;
}

.summary-copy span {
  font-size: 12px;
  opacity: 0.82;
}

.summary-copy strong {
  margin-top: 6px;
  font-size: 17px;
}

.summary-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 13px 0;
  background: rgba($text-white, 0.12);
}

.summary-stats div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  border-right: 1px solid rgba($text-white, 0.2);
}

.summary-stats div:last-child { border-right: 0; }
.summary-stats strong { font-size: 18px; }
.summary-stats span { font-size: 11px; opacity: 0.84; }
</style>
