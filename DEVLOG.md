### 搭建项目
vite vue3 vant
route、pinia、axios、格式配置
### 基础样式、组件
1.根据设计稿确定基础样式
2.基础组件
src/components
├── base
│   ├── BasePage.vue
│   ├── BaseNavbar.vue
│   ├── BaseCard.vue
│   ├── BaseButton.vue
│   ├── BaseTag.vue
│   ├── BaseEmpty.vue
│   ├── BaseLoading.vue
│   ├── BaseAvatar.vue
│   ├── BaseDivider.vue
3.业务组件
components

outfit/
    OutfitCard.vue
    OutfitBanner.vue
    OutfitGallery.vue
    OutfitImageGrid.vue
    OutfitTimeline.vue

clothes/
    ClothesCard.vue
    ClothesGrid.vue
    ClothesSelector.vue
    ClothesCategory.vue

lookbook/
    LookBookCard.vue
    LookBookSection.vue

common/
    StatCard.vue
    SearchBar.vue
    EmptyHint.vue
    BottomAction.vue


----
1.设计稿：design/产品设计稿-v1.5.png
2.任务：检查src/style中样式是否合理，帮我写好index.scss,并优化现在的基础样式
3.vite.config.ts中有：
css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/variables.scss";`,
      },
    },
  },
注意：其他目录不用改动。不要做指定任务外的检查和优化！