# create-react-app

## 全局安装 create-react-app[​](https://renhongl.github.io/site/docs/react/a1#%E5%85%A8%E5%B1%80%E5%AE%89%E8%A3%85-create-react-app "Direct link to heading")

```
npm install -g create-react-app
```

## 创建一个项目[​](https://renhongl.github.io/site/docs/react/a1#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E9%A1%B9%E7%9B%AE "Direct link to heading")

```
create-react-app your-app
```

## 如果不想全局安装，可以直接使用 npx[​](https://renhongl.github.io/site/docs/react/a1#%E5%A6%82%E6%9E%9C%E4%B8%8D%E6%83%B3%E5%85%A8%E5%B1%80%E5%AE%89%E8%A3%85%E5%8F%AF%E4%BB%A5%E7%9B%B4%E6%8E%A5%E4%BD%BF%E7%94%A8-npx "Direct link to heading")

```
npx create-react-app your-app
```

## 安装结果[​](https://renhongl.github.io/site/docs/react/a1#%E5%AE%89%E8%A3%85%E7%BB%93%E6%9E%9C "Direct link to heading")

1. react: react 顶级库
2. react-dom: 因为 react 有很多运行环境，比如 app 端的 react-native，我们要在 web 上运行就使用 react-dom
3. react-scripts: 包含运行和打包 react 应用程序的所有脚本及配置

## 安装失败[​](https://renhongl.github.io/site/docs/react/a1#%E5%AE%89%E8%A3%85%E5%A4%B1%E8%B4%A5 "Direct link to heading")

1. 切换 npm 镜像为淘宝镜像
2. 使用 yarn
3. 删除 node_modules 以及 package-lock.json 然后重新执行`npm install`命令
4. 删除 node_modules 以及 package-lock.json 然后清除 npm 缓存`npm cache clean --force`之后再执行`npm install`命令

## 切换 npm 镜像[​](https://renhongl.github.io/site/docs/react/a1#%E5%88%87%E6%8D%A2-npm-%E9%95%9C%E5%83%8F "Direct link to heading")

1. 安装 nrm： `npm i -g nrm`
2. 查看仓库地址：`nrm ls`
3. 切换仓库地址：`nrm use taobao`
