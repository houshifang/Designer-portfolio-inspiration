# 精选最佳设计师的个人网站

静态作品集索引。用浏览器打开 `dist/index.html` 即可运行。项目使用原生 HTML、CSS 和 JavaScript，无需安装依赖。

## 更新收录

1. 把截图放到 `dist/images/`。建议使用 1440 × 810 或其他 16:9 尺寸的 WebP、PNG 或 JPEG。
2. 打开 `dist/sites.js`，逐条替换 `title`（标题）、`url`（原网站链接）和 `image`（截图路径）。每次打开或刷新页面时，作品会随机排列。
3. 刷新页面查看。分享或部署时，将整个 `dist/` 目录作为静态站点发布。

示例缩略图为对应作品集的浏览器截图，卡片链接指向各作品原站。

## 分享封面

封面是 `dist/share-cover.jpg`。`dist/index.html` 的 `<head>` 中，`og:image` 和 `twitter:image` 使用封面的完整 HTTPS 地址，`og:url` 使用正式首页地址。如果更换域名，请同步更新这三项。
