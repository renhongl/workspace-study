# 06-详细学习Plugin

## 如何写一个plugin

## Plugins

webpack 有着丰富的插件接口(rich plugin interface)。webpack 自身的多数功能都使用这个插件接口。这个插件接口使 webpack 变得**极其灵活**。 

## [`AggressiveSplittingPlugin`](https://www.webpackjs.com/plugins/aggressive-splitting-plugin)

将原来的 chunk 分成更小的 chunk

## [`BabelMinifyWebpackPlugin`](https://www.webpackjs.com/plugins/babel-minify-webpack-plugin)

使用 [babel-minify](https://github.com/babel/minify)进行压缩

## [`BannerPlugin`](https://www.webpackjs.com/plugins/banner-plugin)

在每个生成的 chunk 顶部添加 banner

## [`CommonsChunkPlugin`](https://www.webpackjs.com/plugins/commons-chunk-plugin)

提取 chunks 之间共享的通用模块

## [`CompressionWebpackPlugin`](https://www.webpackjs.com/plugins/compression-webpack-plugin)

预先准备的资源压缩版本，使用 Content-Encoding 提供访问服务

## [`ContextReplacementPlugin`](https://www.webpackjs.com/plugins/context-replacement-plugin)

重写 `require` 表达式的推断上下文

## [`CopyWebpackPlugin`](https://www.webpackjs.com/plugins/copy-webpack-plugin)

将单个文件或整个目录复制到构建目录

## [`DefinePlugin`](https://www.webpackjs.com/plugins/define-plugin)

允许在编译时(compile time)配置的全局常量

## [`DllPlugin`](https://www.webpackjs.com/plugins/dll-plugin)

为了极大减少构建时间，进行分离打包

## [`EnvironmentPlugin`](https://www.webpackjs.com/plugins/environment-plugin)

## [`DefinePlugin`](https://www.webpackjs.com/plugins/define-plugin) 中 `process.env` 键的简写方式。

## [`ExtractTextWebpackPlugin`](https://www.webpackjs.com/plugins/extract-text-webpack-plugin)

从 bundle 中提取文本（CSS）到单独的文件

## [`HotModuleReplacementPlugin`](https://www.webpackjs.com/plugins/hot-module-replacement-plugin)

启用模块热替换(Enable Hot Module Replacement - HMR)

## [`HtmlWebpackPlugin`](https://www.webpackjs.com/plugins/html-webpack-plugin)

简单创建 HTML 文件，用于服务器访问

## [`I18nWebpackPlugin`](https://www.webpackjs.com/plugins/i18n-webpack-plugin)

为 bundle 增加国际化支持

## [`IgnorePlugin`](https://www.webpackjs.com/plugins/ignore-plugin)

从 bundle 中排除某些模块

## [`LimitChunkCountPlugin`](https://www.webpackjs.com/plugins/limit-chunk-count-plugin)

设置 chunk 的最小/最大限制，以微调和控制 chunk

## [`LoaderOptionsPlugin`](https://www.webpackjs.com/plugins/loader-options-plugin)

用于从 webpack 1 迁移到 webpack 2

## [`MinChunkSizePlugin`](https://www.webpackjs.com/plugins/min-chunk-size-plugin)

确保 chunk 大小超过指定限制

## [`NoEmitOnErrorsPlugin`](https://www.webpackjs.com/plugins/no-emit-on-errors-plugin)

在输出阶段时，遇到编译错误跳过

## [`NormalModuleReplacementPlugin`](https://www.webpackjs.com/plugins/normal-module-replacement-plugin)

替换与正则表达式匹配的资源

## [`NpmInstallWebpackPlugin`](https://www.webpackjs.com/plugins/npm-install-webpack-plugin)

在开发时自动安装缺少的依赖

## [`ProvidePlugin`](https://www.webpackjs.com/plugins/provide-plugin)

不必通过 import/require 使用模块

## [`SourceMapDevToolPlugin`](https://www.webpackjs.com/plugins/source-map-dev-tool-plugin)

对 source map 进行更细粒度的控制

## [`EvalSourceMapDevToolPlugin`](https://www.webpackjs.com/plugins/eval-source-map-dev-tool-plugin)

对 eval source map 进行更细粒度的控制

## [`UglifyjsWebpackPlugin`](https://www.webpackjs.com/plugins/uglifyjs-webpack-plugin)

可以控制项目中 UglifyJS 的版本

## [`ZopfliWebpackPlugin`](https://www.webpackjs.com/plugins/zopfli-webpack-plugin)

通过 node-zopfli 将资源预先压缩的版本
