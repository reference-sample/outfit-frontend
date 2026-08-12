# 穿搭列表与详情待接入说明

Swagger 已提供 `GET /outfit/page`、`GET /outfit/{id}`、`GET /outfit-image/list`、`GET /outfit-item/list`，可满足列表、详情、图片和搭配单品的基础查询。

仍缺少或需明确：

- 列表筛选：`/outfit/page` 仅有关键词和单个 `tags`（整数）参数；设计稿中的约会、通勤、度假、晚宴等场景筛选需要 `scene` / `occasion` 字段及查询参数，或明确标签字典映射。
- 详情字段：设计稿需要 `scene`、`occasion`、`season`、`weather`、`likeCount`、`isFavorite`；当前 `OutfitResponse` 未定义。
- 收藏能力：需新增 `POST /outfit/{id}/favorite` 和 `DELETE /outfit/{id}/favorite`，或等效接口。
- 分享能力：需定义分享链接/海报的接口或客户端策略。
