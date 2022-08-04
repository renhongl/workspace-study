# 02-在Vanillajs项目中使用Redux

redux在多数情况下，是和其他库绑定使用的，例如：react和angular，但是在这里，我们先只学习redux的核心内容。

## 创建项目

我们使用Vite生成一个全新的Vanilla项目

```js
npm create vite@latest
```

安装依赖

```js
npm install
```

启动开发服务器

```js
npm run dev
```

## 安装Redux

```js
npm install --save redux
```

## 创建Reducer

- 在跟文件夹下创建**reducers**文件夹，用于存放所有的reducer文件

- 在reducers文件夹下，创建**todo.js**文件

```js
export default function (state, action) {
    switch (action.type) {
        default:
            return {
                ...state
            };
    }
}
```

- 在reducers文件夹下，创建**index.js**文件，用于导出所有的reducer

```js
export * from './todo';
```

## 创建Store

- 在根文件夹下创建store.js文件

```js
import { createStore } from 'redux';
import { todoReducer } from './reducers';

const store = createStore(todoReducer);

export default store;
```

这样整个redux项目基本上搭建好了。现在，我们就去实际功能中应用它。

## 设置初始值，设置action对应的reducer

在todo reducer中，我们这样写

```js
const initState = { // state的初始值
    todoList: [
        {
            id: 0,
            text: 'some text'
        }
    ]
}

export function todoReducer(state = initState, action) {
    switch (action.type) {
        case 'ADD': // 添加todo的reducer方法
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
        default:
            return {
                ...state
            }
    }
}
```

## 读取初始值

在todoList.js组件中，获取todo列表，并监听列表变化

```jsx
import store from '../store'

export class TodoList {
    constructor(ele) {
        this.ele = ele
        const state = store.getState(); // 通过store.getState获取初始值
        this.render(state);
        store.subscribe(() => { // 通过store.subscribe监听状态变化
            const state = store.getState();
            this.render(state);
        })
    }

    render(state) {
        this.ele.innerHTML = `
            <div>TODO</div>
        `
        const list = state.todoList;
        list.forEach(item => {
            this.ele.innerHTML += `<div>${item.text}</div>`
        })
    }
}
```

## 创建一个TODO

我们在addTodo.js组件中，点击添加就添加一个todo

```js
import store from '../store'

export class AddTodo {
    constructor(ele) {
        this.ele = ele
        this.value = 'no message';
        this.render()
    }

    render() {
        const addBtn = document.createElement('button')
        const input = document.createElement('input')
        this.ele.appendChild(input)
        this.ele.appendChild(addBtn)
        addBtn.textContent = 'add'
        input.addEventListener('change', (e) => {
            this.value = e.target.value;
        })
        addBtn.addEventListener('click', () => {
            store.dispatch({ // 通过store.dispatch修改state
                type: 'ADD',
                payload: {
                    id: Math.random(),
                    text: this.value
                }
            })
        })
    }
}
```

## 总结

- 通过上述代码，我们实现了在Vanillajs中使用Redux，那么在最基本的js项目中，我们可以很好的管理我们的数据。

- 我们发现，每个js组件在render时，都要手动的操作dom，这是一件很繁琐的事。为了优化它，我们可以使用react。

- 如果我们不想使用任何View库，那么通过上述的代码，我们已经搭建了一个基本的Vanillajs框架，可用于深度开发各种功能。加上redux的状态管理，我们可以把js项目混乱的数据管理得很顺畅。
