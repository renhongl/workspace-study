# 05-reducer 扩展

如果如果不同的action所处理的属性之间没有联系，我们可以把 Reducer 函数拆分。不同的函数  
负责处理不同属性，最终把它们合并成一个大的 Reducer 即可。

```js
import {combineReducers} from "redux";
const reducer = combineReducers({
a: functionA,
b: functionB,
c: functionC
})
访问：
(state)=>{
return {
kerwinstate:state.a (不同的命名空间)
}
}
```

## redux中间件

在redux里，action仅仅是携带了数据的普通js对象。action creator返回的值是这个action类型的  
对象。然后通过store.dispatch()进行分发。同步的情况下一切都很完美，但是reducer无法处理异  
步的情况。  
那么我们就需要在action和reducer中间架起一座桥梁来处理异步。这就是middleware。

### 中间件的由来与原理、机制

```js
export default function thunkMiddleware({ dispatch, getState }) {
return next => action =>
typeof action === 'function' ?
action(dispatch, getState) :
next(action);
}
```

这段代码的意思是，中间件这个桥梁接受到的参数action，如果不是function则和过去一样直接执  
行next方法(下一步处理)，相当于中间件没有做任何事。如果action是function，则先执行action，  
action的处理结束之后，再在action的内部调用dispatch。

### 常用异步中间件：

a. redux-thunk (store.dispatch参数可以是一个function)

```js
i
mport thunk from 'redux-thunk';
import {applyMiddleware} from "redux";
const store = createStore(fetchReducer, applyMiddleware(thunk));
const getComingSoon = ()=>{
//进行异步请求
return (dispatch,store)=>{
}
}
```

b. redux-promise (store.dispatch参数可以是一个promise对象)

```js
i
mport promiseMiddleware from 'redux-promise';
const store = createStore(fetchReducer, applyMiddleware(thunk,promiseMiddleware));
const getComingSoon = ()=>{
//进行异步请求
return axios.get(`****`).then(res=>{
return {
type:"cominglist",
info:res.data.data
} }
)
}
```

## Redux DevTools Extension

> [GitHub - zalmoxisus/redux-devtools-extension: Redux DevTools extension.](https://github.com/zalmoxisus/redux-devtools-extension)

```js
i
mport { createStore, compose} from 'redux'
import reducer from './reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers())
export default store
```
