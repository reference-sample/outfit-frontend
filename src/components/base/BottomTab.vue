<template>
  <van-tabbar route safe-area-inset-bottom class="bottom-tab">
    <van-tabbar-item to="/" icon="home-o"> 首页 </van-tabbar-item>

    <van-tabbar-item to="/clothes" icon="apps-o"> 衣橱 </van-tabbar-item>

    <van-tabbar-item to="/outfit" icon="photo-o"> 穿搭 </van-tabbar-item>

    <van-tabbar-item to="/lookbook" icon="notes-o"> 衣风录 </van-tabbar-item>

    <van-tabbar-item to="/mine" icon="manager-o"> 我的 </van-tabbar-item>
  </van-tabbar>
</template>

<style scoped lang="scss">
.bottom-tab {
  border-top: 1px solid $border-color;
  background: #fff;

  :deep(.van-tabbar-item--active) {
    color: $primary-color;
    font-weight: 600;
  }

  :deep(.van-icon) {
    font-size: 22px;
  }

  :deep(.van-tabbar-item__text) {
    margin-top: 4px;
    font-size: 12px;
  }
}
</style>
