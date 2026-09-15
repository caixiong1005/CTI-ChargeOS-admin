# AGENTS.md — CTI-ChargeOS-admin（充电运营平台管理后台前端）

## 定位
CTI 充电运营平台的管理后台前端，派生自 RuoYi-Vue（Vue2 + Element UI）。与后端 `ChargeOS-cloud`（微服务）及 `CTI-ChargeOS-mini`（UniApp 小程序）为三个独立仓库，本仓库只含前端。

## 怎么跑
- 安装：`npm install`
- 本地开发：`npm run dev` → http://localhost:80 ；`vue.config.js` 代理 `/dev-api` → `127.0.0.1:38080`（网关）。
- 生产构建：`npm run build:prod`（本地 Node 24 需 `--openssl-legacy-provider`，脚本已带）。
- 构建输出在 `dist/`（已 gitignore）。

## 技术栈
Vue 2.6 / Element UI / vue-cli 4 / axios / SCSS；登录态走 cookie（`Hcp-Token`）。

## 目录与约定
- `src/views/*` 页面（登录 `src/views/login.vue`，侧边栏 `src/layout/components/Sidebar/Logo.vue`）；`src/api/*` 接口。
- `src/assets/logo/logo.svg` 中性站点图标（蓝绿渐变+白色闪电，无文字）；`public/favicon.svg` 标签页图标；`public/index.html` 的 `<title>` 为「充电桩平台」。
- 非显然业务逻辑/登录链路/部署坑见 Agent memory（权威版，knowledge id 15637250），本文件不复述。

## 当前状态与下一步
- 品牌清理已完成：界面与标签页已无 慧知/HUIZHI/HZ/开源/中科/二维码/源码·博客·文档链接；登录与侧边栏用 `logo.svg`，标签页用 `favicon.svg`。
- 部署：本地构建后 `scp -r dist/*` 到腾讯云 `ubuntu@42.193.115.234:/home/ubuntu/deploy/docker/nginx/html/dist`（nginx 容器挂载源，绝不可部署到父目录 `html/`）。**关键坑**：scp 会把 `static/` 子目录生成成 `700`，需 `chmod -R a+rX` 修正后再 `sudo docker exec hcp-nginx nginx -s reload`，否则静态资源 403。详见 memory 15637250。
- 待办（pending，非阻塞）：README 的 `doc/screenshots/intro/*.png` 截图仍为旧版带 HUIZHI 的界面图，需在干净环境重截。
