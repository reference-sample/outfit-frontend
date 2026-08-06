<template>
  <div class="logo">
    <div class="icon">O</div>

    <div class="title">Outfit</div>

    <div class="subtitle">数字衣橱 · 穿搭记录 · 风格成长</div>
  </div>
</template>

<style scoped lang="scss">
.logo {
  padding: 48px 0;
  text-align: center;
}

.icon {
  width: 74px;
  height: 74px;
  margin: auto;
  border-radius: 22px;
  background: $primary-color;
  color: #fff;
  font-size: 34px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 16px 36px rgba(197, 91, 104, 0.28);
}

.title {
  margin-top: 18px;
  font-size: 28px;
  font-weight: 700;
}

.subtitle {
  margin-top: 8px;
  color: $text-secondary;
  font-size: 14px;
}
</style>
