# 仰观工坊 · 空间叙事与世界模型（网页演示版）

单文件静态网页，用于汇报时配合 PPT 做动画演示。原生 HTML/CSS/JS，无构建依赖，浏览器直接打开 `index.html` 即可。

## 本地预览

直接双击 `index.html`，或在本目录启动静态服务：

```bash
python3 -m http.server 8080
# 浏览器打开 http://localhost:8080
```

## 操作

- 左右方向键 / PageUp · PageDown 翻页
- 底部按钮与圆点导航跳转
- URL hash 记录当前页码，可直接分享某一页

## 页面结构（15 页）

1. 封面
2. 任务脉络总览
3. 背景与契机（里斯本 Mapping / FDUK 入选 / 同济 AI 分享）
4. 资源四象限（场馆科普渠道 / 高校研究机构 / 赛事投稿通道 / 设备研发单位）
5. 痛点与机会
6. 定位与命名
7. 五大研究方向总览
8. 方向 ① 球面叙事学 · ② AI 球面生成一致性
9. 方向 ③ 可交互穹顶 · ④ 集体在场感 · ⑤ 多模态协同
10. 组织架构
11. 课程体系
12. 三年路线图
13. 可持续发展与节展通道
14. 对标 SAT 工具链与六支柱生态（6 个工具卡片各带子链接详情面板）
15. SceneForge 舞台预演系统（本机 iframe 子链接 + 新标签页打开）

## SAT 工具子链接面板

第 14 页 6 个工具卡片点击后展开详情面板（Esc 或「返回工具链」关闭），含官方演示素材、能力要点与官方外链：

- **SpatGRIS**：官方海报图；GitHub `GRIS-UdeM/SpatGRIS`、GRIS 官网
- **Spatial Protocol Mapper**：官方海报图；Suite SAT Creator 工具页
- **LivePose**：官方海报图；文档站 `sat-mtl.github.io/livepose`、GitHub `sat-mtl/livepose`（演示影片为 QuickTime，在文档站内播放）
- **Koaia**：官方海报图；文档站 `sat-mtl.github.io/koaia`（演示影片为 QuickTime，在文档站内播放）
- **Carto**：官方界面截图 + 现场点云照片；文档站与 GitHub `sat-mtl/carto`
- **Domeport**：内嵌官方 H.264 演示视频（`sat-mtl.github.io/DomeportPro`），另附在线 Web 版与 Native 文档链接

素材均为 Suite SAT / 各工具官方站点的外链引用，未打包进本仓库；若官方站点迁移或更换资源路径，需同步替换面板中的 URL。

## SAT 对标页补充内容（来自公众号供稿）

- 机构与硬件数据条：SAT 1996 年成立；Satosphere 2011 年开放，210° 视角 × 360° 球面、8 台激光投影机、157 只扬声器 / 93.5 声道、SATIE 空间音频引擎发源地；驻留沉淀 180+ 部穹顶作品；18 米穹顶参数为 Derivative domeViewer 预制组件基准。
- 标杆案例卡：Jules Roze《Syntropie》（Dome Fest West 2022 最佳音乐短片），含创作理念、后续作品与 TouchDesigner 工作坊流程。
- 资源四象限·赛事通道：补入光点·国际新媒体艺术节（TouchDesigner 教学体系、Moment Factory 球幕经验分享）。
- 供稿文章中的视频 / GIF 尚未提供附件，待素材到位后内嵌到案例卡与对应工具面板。

## 预演系统子链接说明

- 第 15 页内嵌 iframe 指向本机 `http://127.0.0.1:5175/`（SceneForge Stage Viewer），并附新标签页打开按钮。
- 该地址为回环地址，仅在运行 SceneForge 本地服务的同一台机器上可访问；需先启动其本地服务并保持窗口开启。
- 公网 GitHub Pages 与其他设备无法访问 `127.0.0.1`；线上演示前需将预演系统单独部署为公开地址，并替换 iframe 与按钮中的 URL。

## GitHub Pages

仓库：`MaloMi-Max/yangguan-dome`，页面源为 `main` 分支根目录；
访问地址：`https://malomi-max.github.io/yangguan-dome/`。

## 待补充素材（占位，收到后替换）

- 工坊 / 个人 Logo（透明底 SVG 或 PNG）
- 作品剧照：《Vanished - Seeking》及其他 fulldome 成片截图
- 作品视频片段（MP4，封面或内嵌演示用）
- 现场照片：里斯本 Mapping、FDUK、同济分享、球幕现场
- 环境配乐（可选）
- 已获授权使用的机构 / 合作方标识

## 安全说明

- 本仓库仅包含自研演示页面，不引入第三方 skill、模板或外部代码
- 推送前排查并排除 `.env`、密钥、令牌等敏感文件
- 外部字体与 JS 库仅走可信 CDN；当前版本未引入第三方 JS 库
