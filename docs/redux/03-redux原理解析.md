# 04-redux原理解析

```js
store 是通过 createStore创建出来的，所以他的结构
export const createStore =
function(reducer, initialState) {
...
return {
dispatch, 用于action的分发，
改变store里面的state（currentState =
reducer(currentState,action)） ，并
在内部遍历subcribe注册的监听器
subscribe,注册listener，
store里面state发生改变后，执行该
listener
getState, 取store里面的
state
...
}
}

function createStore(reducer){
var list = [];
var state =reducer();
function subscribe(callback){
list.push(callback);
} f
unction dispatch(data){
state =
reducer(state,data);
for(var i in list){
list[i]();
}
} f
unction getState(){
return state;
} r
eturn {
subscribe,
dispatch,
getState
}
}
```
