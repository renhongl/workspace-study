# JSX语法

## 介绍[​](https://renhongl.github.io/site/docs/react/a12#%E4%BB%8B%E7%BB%8D "Direct link to heading")

JSX 将 HTML 语法直接加入到 Javascript 代码中，再通过翻译器转换到纯 Javascript 后由浏览器执行。在实际开发中，JSX 在产品打包阶段都已经编译成纯 Javascript，不会带来任何副作用，反而会让代码更加直观和易于维护。编译过程由 Babel 的 JSX 编译器实现。

原理是什么呢？ 要明白 JSX 的原理，需要先明白如何用 JavaScript 对象来表现一个 DOM 元素的结构? 看下面的 DOM 结构

```js
<div class='app' id='appRoot'>
    <h1 class='title'>欢迎进入React的世界</h1>
    <p>
        React.js 是一个帮助你构建页面 UI 的库
    </p>
</div>
```

上面这个 HTML 所有的信息我们都可以用 JavaScript 对象来表示：

```js
{
    tag: 'div',
        attrs: {
            className: 'app',
            id: 'appRoot'
        },
        children: [
        {
            tag: 'h1',
            attrs: { className: 'title' },
            children: ['欢迎进入React的世界']
        },
        {
            tag: 'p',
            attrs: null,
            children: ['React.js 是一个构建页面 UI 的库']
        }
    ]
}
```

但是用 JavaScript 写起来太长了，结构看起来又不清晰，用 HTML 的方式写起来就方便很多了。 于是 React.js 就把 JavaScript 的语法扩展了一下，让 JavaScript 语言能够支持这种直接在 JavaScript 代 码里面编写类似 HTML 标签结构的语法，这样写起来就方便很多了。编译的过程会把类似 HTML 的 JSX 结构转换成 JavaScript 的对象结构。

下面代码:

```js
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    render () {
        return (
            <div className='app' id='appRoot'>
                <h1 className='title'>欢迎进入React的世界</h1>
                <p>
                    React.js 是一个构建页面 UI 的库
                </p>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
```

编译之后将得到这样的代码:

```js
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    render () {
        return (
            React.createElement(
                "div",
                {
                    className: 'app',
                    id: 'appRoot'
                },
                React.createElement(
                    "h1",
                    {
                        className: 'title'
                    },
                    "欢迎进入React的世界"
                ),
                React.createElement(
                    "p",
                    null,
                    "React.js 是一个构建页面 UI 的库"
                )
            )
        )
    }
}

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
)
```

React.createElement 会构建一个 JavaScript 对象来描述你 HTML 结构的信息，包括标签名、属性、 还有子元素等, 语法为

```js
React.createElement(
    type,
    [props],
    [...children]
)
```

所谓的 JSX 其实就是 JavaScript 对象，所以使用 React 和 JSX 的时候一定要经过编译的过程:

> JSX —使用 react 构造组件，bable 进行编译—> JavaScript 对象 — ReactDOM.render() —>DOM 元素 —>插入页面
