# React介绍

## React 起源与发展[​](https://renhongl.github.io/site/docs/react/#react-%E8%B5%B7%E6%BA%90%E4%B8%8E%E5%8F%91%E5%B1%95 "Direct link to heading")

React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决 定自己写一套，用来架设 Instagram 的网站。做出来以后，发现这套东西很好用，就在 2013 年 5 月开源 了。

## React 与传统 MVC 的关系[​](https://renhongl.github.io/site/docs/react/#react-%E4%B8%8E%E4%BC%A0%E7%BB%9F-mvc-%E7%9A%84%E5%85%B3%E7%B3%BB "Direct link to heading")

轻量级的视图层库！A JavaScript library for building user interfaces React 不是一个完整的 MVC 框架，最多可以认为是 MVC 中的 V（View），甚至 React 并不非常认可 MVC 开 发模式；React 构建页面 UI 的库。可以简单地理解为，React 将界面分成了各个独立的小块，每一个块 就是组件，这些组件之间可以组合、嵌套，就成了我们的页面。

## React 的特性[​](https://renhongl.github.io/site/docs/react/#react-%E7%9A%84%E7%89%B9%E6%80%A7 "Direct link to heading")

- 声明式设计-React 采用声明范式，可以轻松的描述应用。
- 高效-React 通过对 DOM 的模拟（虚拟 DOM），最大限度的减少与 DOM 的交互。
- 灵活-React 可以与已知的库或者框架很好的配合。
- JSX-JSX 是 Javascript 语法的扩展。
- 组件-通过 React 构建组件，使得代码更加容易得到服用，能够很好的应用在大项目的开发中。
- 单项响应的数据流-React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。

## 虚拟 DOM[​](https://renhongl.github.io/site/docs/react/#%E8%99%9A%E6%8B%9F-dom "Direct link to heading")

- 传统 DOM 真实页面对应一个 DOM 树。在传统页面开发模式中，每次需要更新页面时，都要手动操作 DOM 来进行更新。
- 虚拟 DOM DOM 操作非常昂贵。我们都知道在前端开发中，性能消耗最好的就是 DOM 操作，而且这部分代码会让整体项目的代码变得难以维护。React 把真实 DOM 树转换成 Javascript 对象树，也就是 Virtual DOM。
