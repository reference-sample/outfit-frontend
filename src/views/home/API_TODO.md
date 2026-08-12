# 首页待接入接口与字段

Swagger 已提供以下可用于首页推荐区的接口：

- `GET /outfit/page`：可返回穿搭的 `id`、`name`、`description`、`coverImage`、`tags`、`updatedAt` 等字段。

首页还需要聚合数据，Swagger 暂未定义：

- `GET /home`（或 `GET /home/dashboard`）：建议返回 `todayStyle`（标题、描述、封面）、`dailyQuote`、`recommendedOutfits` 和统计数据，减少首页的多次请求。
- 今日风格字段：`title`、`description`、`coverImage`、`date`；目前仅以占位数据展示。
- 今日金句字段：`content`、`author`（可选）、`date`；目前仅以占位数据展示。
- 当前用户统计字段：`outfitCount`、`clothesCount`、`imageCount`；当前 Swagger 没有按当前用户聚合统计的接口。
