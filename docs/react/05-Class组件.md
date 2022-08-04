# Class组件

ES6的加入让JavaScript直接支持使用class来定义一个类，react创建组件的方式就是使用的类的继承，ES6 class 是目前官方推荐的使用方式，它使用了ES6标准语法来构建，看以下代码：

```js
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    render () {
        return (
            <h1>欢迎进入React的世界</h1>
        )
    }
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

es6 class 组件其实就是一个构造器,每次使用组件都相当于在实例化组件，像这样：

```js
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    render () {
        return (
            <h1>欢迎进入{this.props.name}的世界</h1>
        )
    }
}

const app = new App({
    name: 'react'
}).render()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(app)
```
