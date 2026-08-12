<template>
  <BasePage class="lookbook-page">
    <header class="page-header">
      <span class="back-placeholder" aria-hidden="true">‹</span>
      <h1>衣风录</h1>
      <span class="header-space" aria-hidden="true"></span>
    </header>

    <section class="book-cover">
      <div class="cover-art" aria-hidden="true">
        <span>O</span>
      </div>
      <div class="cover-content">
        <p>Outfit LookBook</p>
        <h2>《姐姐 · 衣风录》</h2>
        <span>衣有万象，风雅如初。</span>
      </div>
    </section>

    <p class="intro">这是一本关于风格、时间与生活的图册。</p>

    <section class="chapter-list" aria-label="衣风录章节">
      <button v-for="chapter in chapters" :key="chapter.id" class="chapter-card" type="button" @click="notifyPending">
        <div class="chapter-cover" :class="chapter.coverClass">
          <span>{{ chapter.number }}</span>
        </div>
        <div class="chapter-content">
          <h3>{{ chapter.title }}</h3>
          <p>{{ chapter.description }}</p>
          <small>{{ chapter.count }} 套穿搭</small>
        </div>
        <span class="chevron">›</span>
      </button>
    </section>

    <BottomTab />
  </BasePage>
</template>

<script setup lang="ts">
import BasePage from "@/components/base/BasePage.vue";
import BottomTab from "@/components/base/BottomTab.vue";
import { showToast } from "vant";
import { chapters } from "./mock";

const notifyPending = () => showToast("章节详情待接口接入");
</script>

<style scoped lang="scss">
.lookbook-page {
  padding: 0 16px 100px;
}

.page-header {
  display: grid;
  grid-template-columns: 36px 1fr 36px;
  align-items: center;
  height: 58px;
  text-align: center;
}

.page-header h1 {
  margin: 0;
  color: $text-main;
  font-size: 17px;
  font-weight: $font-semibold;
}

.back-placeholder {
  color: $text-main;
  font-size: 30px;
  line-height: 1;
}

.book-cover {
  position: relative;
  overflow: hidden;
  height: 183px;
  border-radius: $radius-lg;
  box-shadow: $shadow-card;
}

.cover-art {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 71% 30%, $primary-light 0 5%, transparent 5.5%),
    radial-gradient(ellipse at 67% 65%, $wine-color 0 14%, transparent 14.5%),
    linear-gradient(120deg, $surface-light, $primary-light 52%, $primary-dark);
}

.cover-art::after {
  position: absolute;
  right: 13%;
  bottom: -13%;
  width: 28%;
  height: 75%;
  border-radius: 48% 48% 4px 4px;
  background: linear-gradient(110deg, $text-main, $wine-color 60%, $primary-dark);
  content: "";
}

.cover-art span {
  position: absolute;
  top: 27px;
  right: 50%;
  color: rgba($text-white, 0.42);
  font-family: $title-font;
  font-size: 62px;
}

.cover-content {
  position: relative;
  z-index: 1;
  width: 68%;
  padding: 30px 20px;
  color: $text-white;
  text-shadow: 0 1px 8px rgba($text-main, 0.25);
}

.cover-content p {
  margin: 0 0 9px;
  font-size: 11px;
  letter-spacing: 0.08em;
  opacity: 0.9;
}

.cover-content h2 {
  margin: 0;
  font-family: $title-font;
  font-size: 25px;
  line-height: 1.35;
}

.cover-content span {
  display: block;
  margin-top: 12px;
  font-size: 12px;
}

.intro {
  margin: 17px 4px 21px;
  color: $text-secondary;
  font-size: 13px;
}

.chapter-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.chapter-card {
  display: grid;
  width: 100%;
  grid-template-columns: 104px 1fr 20px;
  gap: 13px;
  align-items: center;
  padding: 9px;
  border-radius: $radius-md;
  background: $card-bg;
  color: $text-main;
  text-align: left;
  box-shadow: 0 5px 15px rgba($text-main, 0.05);
}

.chapter-cover {
  position: relative;
  overflow: hidden;
  height: 82px;
  border-radius: 9px;
}

.chapter-cover::after {
  position: absolute;
  right: 18%;
  bottom: -10%;
  width: 32%;
  height: 73%;
  border-radius: 45% 45% 3px 3px;
  background: rgba($text-white, 0.46);
  content: "";
}

.chapter-cover span {
  position: absolute;
  z-index: 1;
  top: 8px;
  left: 9px;
  color: rgba($text-white, 0.88);
  font-family: $title-font;
  font-size: 21px;
}

.chapter-cover--spring { background: linear-gradient(145deg, $success, $primary-light 55%, $surface-warm); }
.chapter-cover--city { background: linear-gradient(145deg, $text-primary, $surface-warm 55%, $text-secondary); }
.chapter-cover--night { background: linear-gradient(145deg, $text-main, $wine-color 56%, $primary-light); }
.chapter-cover--oriental { background: linear-gradient(145deg, $wine-color, $primary-light 55%, $primary-dark); }

.chapter-content h3 {
  margin: 0;
  font-size: 15px;
  font-weight: $font-semibold;
}

.chapter-content p {
  display: -webkit-box;
  overflow: hidden;
  margin: 6px 0;
  color: $text-secondary;
  font-size: 11px;
  line-height: 1.5;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.chapter-content small {
  color: $primary-color;
  font-size: 11px;
}

.chevron {
  color: $text-placeholder;
  font-size: 25px;
}
</style>
