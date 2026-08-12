# 衣风录待接入接口与字段

`design/swagger.json` 目前没有衣风录或章节相关接口。现有的 `OutfitResponse` 也没有章节关联字段，因此无法查询某章节下的穿搭。

建议补充：

- `GET /lookbook`：返回当前用户的图册信息，如 `id`、`title`、`subtitle`、`coverImage`。
- `GET /lookbook/{id}/chapters`：返回章节列表，字段包括 `id`、`title`、`subtitle`、`description`、`coverImage`、`sort`、`themeColor`、`outfitCount`。
- `GET /chapter/{id}/outfits`：返回章节下的穿搭列表。
- 在穿搭创建/更新参数及 `OutfitResponse` 中增加 `chapterId`，用于建立穿搭和章节的关联。
