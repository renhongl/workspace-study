# 01-Flux与Redux

Flux 是一种架构思想，专门解决软件的结构问题。它跟MVC架构是同一类东西，但是更加简单和  
清晰。Flux存在多种实现(至少15种)

> [实现链接]([GitHub - voronianski/flux-comparison: Practical comparison of different Flux solutions](https://github.com/voronianski/flux-comparison))

Facebook Flux是用来构建客户端Web应用的应用架构。它利用单向数据流的方式来组合React  
中的视图组件。它更像一个模式而不是一个正式的框架，开发者不需要太多的新代码就可以快  
速的上手Flux。

Redux最主要是用作应用状态的管理。简言之，Redux用一个单独的常量状态树（state对象）保存这一整个应用的  
状态，这个对象不能直接被改变。当一些数据变化了，一个新的对象就会被创建（使用actions和reducers），这  
样就可以进行数据追踪，实现时光旅行。

## Redux介绍

- state以单一对象存储在store对象中

- state只读（每次都返回一个新的对象）

- 使用纯函数reducer执行state更新

# redux工作流
