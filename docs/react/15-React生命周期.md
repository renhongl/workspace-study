# 15-React生命周期

## 初始化阶段

- componentWillMount: render之前最后一次修改状态的机会

- render: 只能访问this.props和this.state,不允许修改状态和DOM输出

- componentDidMount: 成功render并渲染完成真实DOM之后触发，可以修改DOM

## 运行中阶段

- componentWillReceiveProps: 父组件修改属性触发

- shouldComponentUpdate: 返回false会阻止render调用

- componentWillUpdate: 不能修改属性和状态

- render: 只能访问this.props和this.state，不允许修改状态和DOM输出

- componentDidUpdate: 可以修改DOM

## 销毁阶段

- componentWillUnmount：在删除组件之前进行清理操作，比如计时器和事件监听

## 老生命周期的问题

(1) componentWillMount ,在ssr中 这个方法将会被多次调用， 所以会重复触发多遍，同时在这里如果绑定事件，将无法解绑，导致内存泄漏 ， 变得不够安全高效逐步废弃。  
(2) componentWillReceiveProps 外部组件多次频繁更新传入多次不同的 props，会导致不必要的异步请求  
(3) componetWillupdate, 更新前记录 DOM 状态, 可能会做一些处理，与componentDidUpdate相隔时间如果过长， 会导致 状态不太信  

## 新生命周期的替代

（1）getDerivedStateFromProps 第一次的初始化组件以及后续的更新过程中(包括自身状态更新以及父传子) ，返回一个对象作为新的state，返回null则说明不需要在这里更新state

```js
//老的生命周期的写法
componentDidMount() {
    if(this.props.value!==undefined){
        this.setState({
            current:this.props.value
        })
    }
} 

componentWillReceiveProps(nextProps){
    if(nextProps.value !==undefined){
        this.setState({
            current:nextProps.value
        })
    }
} 

// 新的生命周期写法
static getDerivedStateFromProps(nextProps) {
    if(nextProps.value!==undefined){
        return {
            current:nextProps.value
        }
    } 
    return null
}
```

(2) getSnapshotBeforeUpdate 取代了 componetWillUpdate ,触发时间为update发生的时候，在render之后dom渲染之前返回一个值，作为componentDidUpdate的第三个参数。

```js
//新的数据不断插入数据前面， 导致我正在看的数据向下走，如何保持可视区依旧是我之前看的数据呢？
getSnapshotBeforeUpdate(){
    return this.refs.wrapper.scrollHeight
} 

componentDidUpdate(prevProps, prevState,preHeight) {
    //if(preHeight===200)return ;
    this.refs.wrapper.scrollTop +=this.refs.wrapper.scrollHeight-preHeight
} 

<div style={{height:"200px",overflow:"auto"}}} ref="wrapper">
  <ul>
  .........
  </ul>
</div>
```

## react中性能优化的方案

1. shouldComponentUpdate

控制组件自身或者子组件是否需要更新，尤其在子组件非常多的情况下， 需要进行优化。

2. PureComponent

PureComponent会帮你 比较新props 跟 旧的props， 新的state和老的state（值相等,或者  
对象含有相同的属性、且属性值相等 ），决定shouldcomponentUpdate 返回true 或者  
false， 从而决定要不要呼叫 render function。

> 注意：如果你的 state 或 props 『永远都会变』，那 PureComponent 并不会比较快，因为  shallowEqual 也需要花时间。
