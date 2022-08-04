# 01-React Hooks

## 使用hooks理由

1. 高阶组件为了复用，导致代码层级复杂  
2. 生命周期的复杂  
3. 写成functional组件,无状态组件 ，因为需要状态，又改成了class,成本高

## useState(保存组件状态)

```js
const [state, setstate] = useState(initialState)
```

## useEffect(处理副作用)和useLayoutEffect (同步执行副作用)

Function Component 不存在生命周期，所以不要把 Class Component 的生命周期概念搬过来试图对号入座

```js
    useEffect(() => {
        //effect
        return () => {
            //cleanup
        };
    }, [依赖的状态;空数组,表示不依赖])
```

**不要对 Dependencies 撒谎, 如果你明明使用了某个变量，却没有申明在依赖中，你等于向 React 撒了谎，后果就是，当依赖的变量改变时，useEffect 也不会再次执行, eslint会报警告**

```js
let id = props.match.params.myid
useEffect(()=>{
    axios.get(`/articles/${id}`).then(res => {
        settitle(res.data.title)
        setcontent(res.data.content)
        setcategory(res.data.category)
    })
},[id])
```

## useEffect和useLayoutEffect有什么区别？

简单来说就是调用时机不同， useLayoutEffect 和原来 componentDidMount & componentDidUpdate 一致，在react完成DOM更新后马上同步调用的代码，会阻塞页面渲染。而 useEffect 是会在整个页面渲染完才会调用的 

**代码官方建议优先使用 useEffect**

在实际使用时如果想避免页面抖动（在 useEffect 里修改DOM很有可能出现）的话，可以把需要操作DOM的代码 
放在 useLayoutEffect 里。在这里做点dom操作，这些dom修改会和 react 做出的更改一起被一次性渲染到屏幕上，只有一次回流、重绘的代价。

## useCallback(记忆函数)

防止因为组件重新渲染，导致方法被重新创建 ，起到缓存作用; 只有第二个参数 变化了，才重新声明一次

```js
var handleClick = useCallback(()=>{
    console.log(name)
},[name])

<button onClick={()=>handleClick()}>hello</button>
//只有name改变后， 这个函数才会重新声明一次，
//如果传入空数组， 那么就是第一次创建后就被缓存， 如果name后期改变了,拿到的还是老的name。
//如果不传第二个参数，每次都会重新声明一次，拿到的就是最新的name.
```

## useMemo 记忆组件

useCallback 的功能完全可以由 useMemo 所取代，如果你想通过使用 useMemo 返回一个记忆函数也是完全可以的。

```js
useCallback(fn, inputs) is equivalent to useMemo(() => fn, inputs).
```

唯一的区别是：useCallback 不会执行第一个参数函数，而是将它返回给你，而 useMemo 会执行第一个函数并  且将函数执行结果返回给你。所以在前面的例子中，可以返回 handleClick 来达到存储函数的目的。  
所以 useCallback 常用记忆事件函数，生成记忆后的事件函数并传递给子组件使用。而 useMemo 更适合经过函数计算得到一个确定的值，比如记忆组件。

## useRef(保存引用值)

```js
const myswiper = useRef(null);

<Swiper ref={myswiper}/>
```

## useReducer和useContext(减少组件层级)

```js
import React from 'react'

var GlobalContext= React.createContext()

// 注意此时的reduecer 返回值是一个对象 {isShow:false,list:[]}
function App(props){
    let [state,dispatch] = useReducer(reducer,{isShow:true,list:[]})
    return <GlobalContext.Provider value={{
            dispatch
            }}>
            <div>
                {
                    state.isShow?
                    <div >我是选项卡</div>
                    :null
                } 
                {
                    props.children
                }
            </div>
    </GlobalContext.Provider>
} 

function Detail(){
    var {dispatch} = useContext(GlobalContext)

    useEffect(() => {
        //隐藏
        dispatch({
            type:"Hide",
            payload:false
        })
        return () => {
            //显示
            dispatch({
                type:"Show",
                payload:true
            })
        };
    }, [])

    return <div>
            detail
        </div>
}
```

## 自定义hooks

当我们想在两个函数之间共享逻辑时，我们会把它提取到第三个函数中。  
必须以“use”开头吗？必须如此。这个约定非常重要。不遵循的话，由于无法判断某个函数是否包含对其内部 Hook的调用，React 将无法自动检查你的 Hook 是否违反了 Hook 的规则
