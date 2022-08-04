# 第一个React应用

```js
// 从 react 的包当中引入了 React。只要你要写 React.js 组件就必须引入React, 因为react里有
// 一种语法叫JSX，稍后会讲到JSX，要写JSX，就必须引入React
import React from 'react'
// ReactDOM 可以帮助我们把 React 组件渲染到页面上去，没有其它的作用了。它是从 react-dom 中
引入的，而不是从 react 引入。
import ReactDOM from 'react-dom'
// ReactDOM里有一个render方法，功能就是把组件渲染并且构造 DOM 树，然后插入到页面上某个特定的
// 元素上
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   // 这里就比较奇怪了，它并不是一个字符串，看起来像是纯 HTML 代码写在 JavaScript 代码里面。语
  // 法错误吗？这并不是合法的 JavaScript 代码, “在 JavaScript 写的标签的”语法叫 JSXJavaScript XML。
  <h1>欢迎进入React的世界</h1>
)
```

> **注意**： `<React.StrictMode>` 目前有助于： 识别不安全的生命周期 关于使用过时字符串 ref API 的警告 检测意外的副作用 检测过时的 context API
