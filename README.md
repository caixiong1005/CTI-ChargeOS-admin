







# CTI 充电运营平台 - 管理后台前端





当前版本：3.0.9

## 项目组成

- 充电平台微服务源码（ChargeOS-cloud）
- 充电管理后台前端源码（CTI-ChargeOS-admin，当前仓库）
- 充电小程序源码（HUIZHI-ChargeOS-mini）

<div align="center">

## PC 管理端 - CTI 充电运营平台

</div>

<div align="center" >
    <a href="#">
        <img src="https://img.shields.io/badge/Licence-GPL3.0-green.svg?style=flat" />
    </a>
    <a href="#">
        <img src="https://img.shields.io/badge/Edition-3.0.9-blue.svg" />
    </a>
</div>

## 开发

```bash
# 克隆项目
git clone <your-repo-url>/CTI-ChargeOS-admin

# 跳转目录

cd CTI-ChargeOS-admin

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 http://localhost:80

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```


|                                          |                                                            |
|------------------------------------------|------------------------------------------------------------|
| ![登录页.png](doc/huizhi/intro/登录页.png)     | ![运营管理.png](doc/huizhi/intro//运营管理.png)     |
| ![站点信息.png](doc/huizhi/intro//站点信息.png)  | ![充电桩.png](doc/huizhi/intro//充电桩.png)       |
| ![模拟充电桩.png](doc/huizhi/intro//模拟充电桩.png) | ![充电口.png](doc/huizhi/intro//充电口.png)       |
| ![互联互通.png](doc/huizhi/intro//互联互通.png)  | ![订单.png](doc/huizhi/intro//订单.png)         |
| ![充电订单.png](doc/huizhi/intro//充电订单.png)  | ![小程序用户.png](doc/huizhi/intro//小程序用户.png)   |
| ![计费规则.png](doc/huizhi/intro//计费规则.png)  | ![修改计费规则.png](doc/huizhi/intro//修改计费规则.png)   |
| ![微信小程序.png](doc/huizhi/intro//微信小程序.png) | ![租户套餐.png](doc/huizhi/intro//租户套餐.png)   |
| ![租户管理.png](doc/huizhi/intro//租户管理.png)  | ![对象存储配置.png](doc/huizhi/intro//对象存储配置.png)   |
| ![用户管理.png](doc/huizhi/intro//用户管理.png)  | ![菜单管理.png](doc/huizhi/intro//菜单管理.png)   |
| ![角色管理.png](doc/huizhi/intro//角色管理.png)  | ![部门管理.png](doc/huizhi/intro//部门管理.png)  |
| ![岗位管理.png](doc/huizhi/intro//岗位管理.png)  | ![字典管理.png](doc/huizhi/intro//字典管理.png) |
| ![参数设置.png](doc/huizhi/intro//参数设置.png)  | ![通知公告.png](doc/huizhi/intro//通知公告.png)   |
| ![操作日志.png](doc/huizhi/intro//操作日志.png)  | ![登录日志.png](doc/huizhi/intro//登录日志.png)   |