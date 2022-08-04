# 05-Redux异步

在项目中，最基本的功能就是从后端获取数据。在前面的章节中，我们学习使用了Redux,但是在Redux中，action都是同步的，那我们如何在Redux中做异步操作呢？

### 使用 Middleware 中间件处理异步逻辑

就其本身而言，Redux store 对异步逻辑一无所知。它只知道如何同步 dispatch action，通过调用 root reducer 函数更新状态，并通知 UI 某些事情发生了变化。任何异步都必须发生在 store 之外。

但是，如果您希望通过调度或检查当前 store 状态来使异步逻辑与 store 交互，该怎么办？ 这就是 [Redux 中间件](http://cn.redux.js.org/tutorials/fundamentals/part-4-store#middleware) 的用武之地。它们扩展了 store，并允许您：

- dispatch action 时执行额外的逻辑（例如打印 action 的日志和状态）
- 暂停、修改、延迟、替换或停止 dispatch 的 action
- 编写可以访问 `dispatch` 和 `getState` 的额外代码
- 教 `dispatch` 如何接受除普通 action 对象之外的其他值，例如函数和 promise，通过拦截它们并 dispatch 实际 action 对象来代替

[使用中间件的最常见原因是允许不同类型的异步逻辑与 store 交互](http://cn.redux.js.org/faq/actions#how-can-i-represent-side-effects-such-as-ajax-calls-why-do-we-need-things-like-action-creators-thunks-and-middleware-to-do-async-behavior)。这允许您编写可以 dispatch action 和检查 store 状态的代码，同时使该逻辑与您的 UI 分开。

Redux 有多种异步中间件，每一种都允许您使用不同的语法编写逻辑。最常见的异步中间件是 [`redux-thunk`](https://github.com/reduxjs/redux-thunk)，它可以让你编写可能直接包含异步逻辑的普通函数。Redux Toolkit 的 `configureStore` 功能[默认自动设置 thunk 中间件](https://redux-toolkit.js.org/api/getDefaultMiddleware#included-default-middleware)，[我们推荐使用 thunk 作为 Redux 开发异步逻辑的标准方式](http://cn.redux.js.org/style-guide/#use-thunks-for-async-logic)。

早些时候，我们看到了[Redux 的同步数据流是什么样子](http://cn.redux.js.org/tutorials/essentials/part-1-overview-concepts#redux-application-data-flow)。当我们引入异步逻辑时，我们添加了一个额外的步骤，中间件可以运行像 AJAX 请求这样的逻辑，然后 dispatch action。这使得异步数据流看起来像这样：

![](http://cn.redux.js.org/assets/images/ReduxAsyncDataFlowDiagram-d97ff38a0f4da0f327163170ccc13e80.gif)

### Thunk 函数[​](http://cn.redux.js.org/tutorials/essentials/part-5-async-logic#thunk-%E5%87%BD%E6%95%B0 "Direct link to heading")

将 thunk 中间件添加到 Redux store 后，它允许您将 *thunk 函数* 直接传递给 `store.dispatch`。调用 thunk 函数时总是将 `(dispatch, getState)` 作为它的参数，你可以根据需要在 thunk 中使用它们。

Thunks 通常还可以使用 action creator 再次 dispatch 普通的 action，比如 `dispatch(increment())`：

```js
const store = configureStore({ reducer: counterReducer })

const exampleThunkFunction = (dispatch, getState) => {
  const stateBefore = getState()
  console.log(`Counter before: ${stateBefore.counter}`)
  dispatch(increment())
  const stateAfter = getState()
  console.log(`Counter after: ${stateAfter.counter}`)
}

store.dispatch(exampleThunkFunction)
```

为了与 dispatch 普通 action 对象保持一致，我们通常将它们写为 *thunk action creators*，它返回 thunk 函数。这些 action creator 可以接受可以在 thunk 中使用的参数。

```js
const logAndAdd = amount => {
  return (dispatch, getState) => {
    const stateBefore = getState()
    console.log(`Counter before: ${stateBefore.counter}`)
    dispatch(incrementByAmount(amount))
    const stateAfter = getState()
    console.log(`Counter after: ${stateAfter.counter}`)
  }
}

store.dispatch(logAndAdd(5))
```

Thunk 通常写在“切片”文件中。`createSlice` 本身对定义 thunk 没有任何特殊支持，因此您应该将它们作为单独的函数编写在同一个切片文件中。这样，他们就可以访问该切片的普通 action creator，并且很容易找到 thunk 的位置。

## 在我们的todo切片中，添加thunk函数

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

// thunk函数是一个返回一个方法的函数，返回的方法中可以获取到dispatch和getState
// 那么，我们就可以在方法中做异步操作，完成后，再dispatch一个action更新状态
export const fetchData = (params) => {
    console.log(params)
    return (dispatch, getState) => {
        console.log('before fetch', getState())
        setTimeout(() => {
            dispatch(add({
                id: Math.random(),
                text: 'load from api'
            }))
            console.log('after fetch', getState())
        }, 3000)
    }
}

export const { add } = todoSlice.actions
export default todoSlice.reducer
```

## Thunk的原理

我们在redux-thunk中，找到源码：

```js
import type { Action, AnyAction } from 'redux'

import type { ThunkMiddleware } from './types'

export type {
  ThunkAction,
  ThunkDispatch,
  ThunkActionDispatch,
  ThunkMiddleware
} from './types'

/** A function that accepts a potential "extra argument" value to be injected later,
 * and returns an instance of the thunk middleware that uses that value
 */
function createThunkMiddleware<
  State = any,
  BasicAction extends Action = AnyAction,
  ExtraThunkArg = undefined
>(extraArgument?: ExtraThunkArg) {
  // Standard Redux middleware definition pattern:
  // See: https://redux.js.org/tutorials/fundamentals/part-4-store#writing-custom-middleware
  const middleware: ThunkMiddleware<State, BasicAction, ExtraThunkArg> =
    ({ dispatch, getState }) =>
    next =>
    action => {
      // The thunk middleware looks for any functions that were passed to `store.dispatch`.
      // If this "action" is really a function, call it and return the result.
      if (typeof action === 'function') {
        // Inject the store's `dispatch` and `getState` methods, as well as any "extra arg"
        return action(dispatch, getState, extraArgument)
      }

      // Otherwise, pass the action down the middleware chain as usual
      return next(action)
    }
  return middleware
}

const thunk = createThunkMiddleware() as ThunkMiddleware & {
  withExtraArgument<
    ExtraThunkArg,
    State = any,
    BasicAction extends Action = AnyAction
  >(
    extraArgument: ExtraThunkArg
  ): ThunkMiddleware<State, BasicAction, ExtraThunkArg>
}

// Attach the factory function so users can create a customized version
// with whatever "extra arg" they want to inject into their thunks
thunk.withExtraArgument = createThunkMiddleware

export default thunk
```

它的源码非常少，主要概念就是：

- 判断一个action是否是方法，如果是方法，就执行该方法，并且把dispatch, getState作为参数传入该方法，那么在该方法中就可以正常dispatch action和获取state了

- 如果action不是方法，那就不做任何操作

> 所以，在使用redux-thunk中间件后，dispatch可以不仅是传入action了，还可以传入thunk函数
