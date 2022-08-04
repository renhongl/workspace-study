# 04-Redux Toolkit

新版本的Redux使用了Toolkit工具，用于简化Redux定义，使编写 Redux 应用程序更加容易。

[**Redux Toolkit**](https://redux-toolkit.js.org/) 是我们官方推荐的编写 Redux 逻辑的方法。它包含了 Redux 核心，并包含我们认为对于构建 Redux 应用必不可少的软件包和功能。Redux Toolkit 建立在我们建议的最佳实践中，简化了大多数 Redux 任务，防止了常见错误，并使编写 Redux 应用程序更加容易。

RTK 包含了有助于简化许多常见场景的工具，包括 [配置 Store](https://redux-toolkit.js.org/api/configureStore)， [创建 reducer 并编写 immutable 更新逻辑](https://redux-toolkit.js.org/api/createreducer)， 甚至还包含 [一次性创建整个 State 的 “切面”](https://redux-toolkit.js.org/api/createslice)。

## 我们现在就来创建一个使用RTK的项目吧

```js
npm create vite@latest
```

## 安装依赖

```js
npm install
```

## 启动开发服务器

```js
npm run dev
```

## 安装React和Redux

```js
npm install --save react
npm install --save redux
npm install --save react-redux
```

## 安装Redux Toolkit

```js
npm install --save-dev @reduxjs/toolkit
```

## 创建Slice

```js
import { createSlice } from "@reduxjs/toolkit"

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todoList: [
            {
                id: 0,
                text: 'some text'
            }
        ]
    },
    reducers: {
        add: (state, action) => {
            state.todoList.push(action.payload)
        }
    }
})

export const { add } = todoSlice.actions

export default todoSlice.reducer
```

## 创建Store

```js
import { configureStore } from "@reduxjs/toolkit"
import todoReducer from './components/todo/slice'

// 现在使用configureStore来创建store
const store = configureStore({
    reducer: {
        todoReducer
    },
})

export default store
```

## 在组件中获取State

```js
import React from 'react'
import { useSelector } from 'react-redux'

export default function TodoList() {
    // 和之前一样，因为都是使用react-redux的api
    const list = useSelector(state => state.todoReducer.todoList)
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

## 修改State，添加todo

```js
import React, { useCallback, useRef} from 'react'
import { useDispatch } from 'react-redux'
import { add } from './slice'

export default function AddTodo() {
    const dispatch = useDispatch()
    const inputRef = useRef()

    const onAdd = useCallback(
      () => {
        // action从slice中导出
        dispatch(add({
            id: Math.random(),
            text: inputRef.current.value
        }))
      },
      [],
    )

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={onAdd}>Add</button>
        </div>
    )
}
```

## 总结

- 使用Redux Toolkit不用再在各个文件创建action type, action还有reducer
