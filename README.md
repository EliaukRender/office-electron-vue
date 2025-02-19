# office-electron-vue
    基于electron+vue3实现office功能

## 快速开始

```sh
# 安装依赖
npm install

# 开发环境
npm run dev

# 打包构建
npm run dev
```

## 目录说明

```diff
+ ├─┬ electron
+ │ ├─┬ main
+ │ │ └── index.ts    主线程入口
+ │ └─┬ preload
+ │   └── index.ts    预加载脚本
  ├─┬ src
  │ └── main.ts       渲染进程入口
  ├── index.html
  ├── package.json
  └── vite.config.ts
```
