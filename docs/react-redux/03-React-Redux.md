# 03-React-Redux

- 通过上一节，我们学习了redux整个运行的流程，但是我们在和页面绑定时，操作dom非常繁琐。

- 所以，多数情况下，redux是需要配合其他库使用的

- 本节我们学习redux如何配合react，在不直接操作dom的情况下，简单的实现页面绑定我们的数据

## 同样使用Vite创建一个React项目

```js
npm create vite@latest
```

## 安装依赖

```js
npm install
```

## 运行开发服务器

```js
npm run dev
```

## 安装Redux

```js
npm install --save redux
```

**这次还需要安装react 绑定库**

```js
npm install --save react-redux
```

> 对于新版本，简化了redux的定义，还使用了**@reduxjs/toolkit**，不过这一节我们不使用它。

## 创建Reducer

创建方法和Vanillajs中相同

```js
const initState = {
    todoList: [
        {
            id: 0,
            text: 'some text'
        }
    ]
}

export function todoReducer(state = initState, action) {
    switch(action.type) {
        case 'ADD':
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

## 创建Store

创建方法和Vanillajs中相同

```js
import { createStore } from 'redux'

import { todoReducer } from './reducers'

const store = createStore(todoReducer)

export default store
```

## 绑定在组件上

这是增加的部分，需要在根组件上，定义好供应商。那么，在其他组件中，就可以使用唯一的store了。

```js
import './App.css'
import { TodoList, AddTodo } from './components'
import store from './store'
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <TodoList></TodoList>
        <AddTodo></AddTodo>
      </div>
    </Provider>
  )
}

export default App
```

## 读取State

```js
import React from 'react'
import { useSelector } from 'react-redux'

export function TodoList() {
    // 通过该方式，读取State
    const list = useSelector((state) => state.todoList) 
    return (
        <div>
            <div>TODO</div>
            {
                list.map(item => <div key={item.id}>{item.text}</div>)
            }
        </div>
    )
}
```

## 更新State

```js
import React, { useRef, useCallback  } from 'react'
import { useDispatch } from 'react-redux'

export function AddTodo() {
    const inputRef = useRef()
    const dispatch = useDispatch(); // 获取dispatch

    const addTodo = useCallback(
      () => {
        const value = inputRef.current.value
        dispatch({ // dispatch action然后修改state
            type: 'ADD',
            payload: {
                id: Math.random(),
                text: value
            }
        })
      },
      [],
    )

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={addTodo}>Add</button>
        </div>
    )
}
```

## 合并多个Reducer

多数情况下，我们的应用不止一个reducer，那么我们需要合并它们

```js
import { createStore, combineReducers } from 'redux'
import { todoReducer, testReducer } from './reducers'

const reducers = combineReducers({
    todoReducer,
    testReducer
})

const store = createStore(reducers)

export default store
```

在组件使用时，就要获取对应reducer的state

```js
import React from 'react'
import { useSelector } from 'react-redux'

export function TodoList() {
    // const list = useSelector((state) => state.todoList)
    // 获取todoReducer下的todoList
    const list = useSelector((state) => state.todoReducer.todoList)
    return (
        <div>
            <div>TODO</div>
            {
                list.map(item => <div key={item.id}>{item.text}</div>)
            }
        </div>
    )
}
```

## 总结

- 配合React使用，终于省去了繁琐的dom操作，提高了项目的开发效率
