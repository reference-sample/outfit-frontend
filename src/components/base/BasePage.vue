<template>
  <div class="base-page">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.base-page {
  min-height: 100vh;
  background: $page-bg;
  padding: 16px;
}
</style>
