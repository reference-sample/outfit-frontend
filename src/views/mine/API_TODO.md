# 我的页面待接入接口与字段

根据 `design/swagger.json`，当前仅有按用户 ID 读取或更新资料的接口：

- `GET /user/{id}`：可返回 `id`、`username`、`nickname`、`email`、`roles`、`status`、`updatedAt`。
- `PUT /user/{id}`：可更新 `username`、`nickname`、`email`、`password`、`roles`、`status`。

页面还需要以下服务端能力，Swagger 暂未定义：

- `GET /user/me`：获取当前登录用户，避免前端从 JWT 解析用户 ID；建议返回上述用户资料以及 `avatar`、`bio`（个人简介）。
- `GET /user/me/statistics`：返回 `outfitCount`（穿搭数）、`clothesCount`（衣物数）、`imageCount`（图片数）。
- `POST /auth/logout`：使当前 token 失效；当前页面仅清除本地 token。
- 缓存统计/清除：若服务端有缓存，需明确 `cacheSize` 与清除接口；目前页面的 `12.6M` 仅为设计稿占位。
