# 09-Ref的应用

- 给标签设置ref="username"

通过这个获取this.refs.username , ref可以获取到应用的真实dom

- 给组件设置ref="username"

通过这个获取this.refs.username ,ref可以获取到组件对象

- 新的写法

```js
myRef = React.createRef()

<div ref={this.myRef}>hello</div>

// 访问this.myRef.current 
```
