# 10-状态(State)

状态就是组件描述某种显示情况的数据，由组件自己设置和更改，也就是说由组件自己维护，使用状态的目的就是为了在不同的状态下使组件的显示不同(自己管理)

## 定义state

第一种方式

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    state = {
        name: 'React',
        isLiked: false
    } 
    render () {
        return (
            <div>
                <h1>欢迎来到{this.state.name}的世界</h1>
                <button>
                {
                    this.state.isLiked ? '❤取消' : '🖤收藏'
                }
                </button>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
```

另一种方式

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    constructor() {
        super()
        this.state = {
            name: 'React',
            isLiked: false
        }
    } 
    render () {
        return (
            <div>
                <h1>欢迎来到{this.state.name}的世界</h1>
                <button>
                {
                    this.state.isLiked ? '❤取消' : '🖤收藏'
                }
                </button>
            </div>
        )
    }
} 

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
```

this.state 是纯js对象,在vue中，data属性是利用 Object.defineProperty 处理过的，更改data的数据的时候会触发数据的 getter 和 setter ，但是React中没有做这样的处理，如果直接更改的话, react是无法得知的，所以，需要使用特殊的更改状态的方法 setState 。

## setState

isLiked 存放在实例的 state 对象当中，组件的 render 函数内，会根据组件的 state 的中的isLiked 不同显示“取消”或“收藏”内容。下面给 button 加上了点击的事件监听。

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    constructor() {
        super()
        this.state = {
            name: 'React',
            isLiked: false
        }
    }

    handleBtnClick = () => {
        this.setState({
            isLiked: !this.state.isLiked
        })
    } 

    render () {
        return (
            <div>
                <h1>欢迎来到{this.state.name}的世界</h1>
                <button onClick={this.handleBtnClick}>
                {
                    this.state.isLiked ? '❤取消' : '🖤收藏'
                }
                </button>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
```

setState 有两个参数  
第一个参数可以是对象，也可以是方法return一个对象，我们把这个参数叫做 updater

- 参数是对象

```js
this.setState({
    isLiked: !this.state.isLiked
})
```

- 参数是方法

```js
this.setState((prevState, props) => {
    return {
        isLiked: !prevState.isLiked
    }
})
```

注意的是这个方法接收两个参数，第一个是上一次的state, 第二个是props 

setState 是异步的，所以想要获取到最新的state，没有办法获取，就有了第二个参数，这是一个可选的回调函数

```js
this.setState((prevState, props) => {
    return {
        isLiked: !prevState.isLiked
    }
}, () => {
    console.log('回调里的',this.state.isLiked)
})
console.log('setState外部的',this.state.isLiked)
```
