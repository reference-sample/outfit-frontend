<template>
  <BasePage class="mine-page">
    <header class="page-header">
      <span class="brand">Outfit</span>
      <span class="page-title">我的</span>
      <button class="settings" type="button" aria-label="设置" @click="notifyPending">⚙</button>
    </header>

    <section class="profile-card">
      <div class="avatar" aria-hidden="true">姐</div>
      <div class="profile-copy">
        <h1>{{ profile.nickname }}</h1>
        <p>ID：{{ profile.id }}</p>
        <p class="motto">{{ profile.motto }}</p>
      </div>
    </section>

    <section class="stats" aria-label="我的数据">
      <div v-for="item in stats" :key="item.label" class="stat-item">
        <strong>{{ item.value }}</strong>
        <span>{{ item.label }}</span>
      </div>
    </section>

    <section class="menu-group">
      <button v-for="item in primaryItems" :key="item.label" class="menu-item" type="button" @click="item.action">
        <span class="menu-icon">{{ item.icon }}</span>
        <span>{{ item.label }}</span>
        <span class="chevron">›</span>
      </button>
    </section>

    <section class="menu-group secondary-menu">
      <button v-for="item in secondaryItems" :key="item.label" class="menu-item" type="button" @click="item.action">
        <span class="menu-icon">{{ item.icon }}</span>
        <span>{{ item.label }}</span>
        <span v-if="item.extra" class="extra">{{ item.extra }}</span>
        <span class="chevron">›</span>
      </button>
    </section>

    <button class="logout" type="button" @click="logout">退出登录</button>

    <BottomTab />
  </BasePage>
</template>

<script setup lang="ts">
import BasePage from "@/components/base/BasePage.vue";
import BottomTab from "@/components/base/BottomTab.vue";
import { removeToken } from "@/utils/storage";
import { showToast } from "vant";
import { computed } from "vue";
import { useRouter } from "vue-router";
import { profile, stats } from "./mock";

const router = useRouter();

const notifyPending = () => showToast("该功能待接口接入");
const resetPassword = () => router.push("/reset-password");
const logout = () => {
  removeToken();
  showToast("已退出登录");
  router.replace("/login");
};

const primaryItems = computed(() => [
  { icon: "◎", label: "账号信息", action: notifyPending },
  { icon: "◉", label: "修改密码", action: resetPassword },
  { icon: "◌", label: "消息通知", action: notifyPending },
]);

const secondaryItems = computed(() => [
  { icon: "◉", label: "清除缓存", extra: profile.cacheSize, action: notifyPending },
  { icon: "◷", label: "关于 Outfit", action: notifyPending },
]);
</script>
<style lang="scss" scoped>
.mine-page {
  padding: 0 16px 100px;
}

.page-header {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  height: 56px;
}

.brand {
  color: $text-main;
  font-family: $title-font;
  font-size: 18px;
  font-weight: $font-semibold;
}

.page-title {
  font-size: 16px;
  font-weight: $font-semibold;
}

.settings {
  justify-self: end;
  color: $text-main;
  font-size: 20px;
}

.profile-card {
  display: flex;
  align-items: center;
  padding: 20px 4px 22px;
}

.avatar {
  display: grid;
  width: 68px;
  height: 68px;
  flex: 0 0 auto;
  place-items: center;
  border: 3px solid $text-white;
  border-radius: 50%;
  background: linear-gradient(145deg, $primary-light, $primary-dark);
  box-shadow: 0 4px 14px rgba($text-main, 0.16);
  color: $text-white;
  font-family: $title-font;
  font-size: 25px;
}

.profile-copy {
  min-width: 0;
  margin-left: 14px;
}

.profile-copy h1 {
  margin: 0 0 3px;
  color: $text-main;
  font-size: 18px;
}

.profile-copy p {
  margin: 0;
  color: $text-secondary;
  font-size: 12px;
}

.profile-copy .motto {
  margin-top: 6px;
  color: $text-primary;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 16px;
  padding: 16px 0;
  border-bottom: 1px solid $border-light;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  border-right: 1px solid $border-light;
}

.stat-item:last-child {
  border: 0;
}

.stat-item strong {
  color: $text-main;
  font-size: 20px;
  line-height: 1;
}

.stat-item span {
  color: $text-secondary;
  font-size: 12px;
}

.menu-group {
  overflow: hidden;
  margin-top: 14px;
  border-radius: $radius-lg;
  background: $card-bg;
}

.menu-item {
  display: grid;
  width: 100%;
  grid-template-columns: 26px 1fr auto 16px;
  align-items: center;
  min-height: 52px;
  padding: 0 16px;
  border-bottom: 1px solid $border-light;
  color: $text-main;
  text-align: left;
  font-size: 14px;
}

.menu-item:last-child {
  border-bottom: 0;
}

.menu-icon {
  color: $text-primary;
  font-size: 17px;
}

.chevron {
  color: $text-placeholder;
  font-size: 24px;
  line-height: 1;
}

.extra {
  margin-right: 8px;
  color: $text-secondary;
  font-size: 12px;
}

.secondary-menu {
  margin-top: 12px;
}

.logout {
  display: block;
  width: calc(100% - 32px);
  margin: 22px auto 0;
  color: $primary-color;
  font-size: 14px;
}
</style>
