# 02-在Vanillajs项目中使用Webpack

这一节，我们使用Webpack来配置我们的原生js项目，让我们同样能使用模块化的方式来开发原生js应用。

通过使用Webpack，我们可以让原生JS开发变得容易。

- 不用再手动引入script标签

- 不用在担心全局变量污染

- 都使用简单统一的方式引入各种资源

## 创建Vanillajs项目

- 初始化项目

```js
mkdir learn-webpack
cd learn-webpack
npm init
```

- 安装Webpack

```js
npm install --save-dev webpack
npm install --save-dev webpack-cli
```

正常情况下，在js文件中，我们无法使用**import**的方式导入js代码或者其他资源，但是有了Webpack，这一切都变得简单：

```js
import _ from 'lodash' // 报错

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
```

## 创建配置文件webpack.config.js

通过上一节我们知道，webpack可以通过入口文件，把所有的文件当做包来引入，并且打包生成一个新的js文件bundle.js

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

那么，我们的index.html只要引入打包之后的bundle.js文件，那么就既可以使用**import**的方式引入包，又可以让页面正常运行。

## 支持加载css

为了从 JavaScript 模块中 `import` 一个 CSS 文件，你需要在 [`module` 配置中](https://www.webpackjs.com/configuration/module) 安装并添加 [style-loader](https://www.webpackjs.com/loaders/style-loader) 和 [css-loader](https://www.webpackjs.com/loaders/css-loader)：

```js
npm install --save-dev style-loader css-loader
```

增加配置

```js
 const path = require('path');

  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
+   module: {
+     rules: [
+       {
+         test: /\.css$/,
+         use: [
+           'style-loader',
+           'css-loader'
+         ]
+       }
+     ]
+   }
  };
```

那么在js文件中，就可以使用一下方式引用css了

```js
import _ from 'lodash';
+ import './style.css';

  function component() {
    var element = document.createElement('div');

    // lodash 是由当前 script 脚本 import 导入进来的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
+   element.classList.add('hello');

    return element;
  }

  document.body.appendChild(component());
```

## 加载图片

假想，现在我们正在下载 CSS，但是我们的背景和图标这些图片，要如何处理呢？使用 [file-loader](https://www.webpackjs.com/loaders/file-loader)，我们可以轻松地将这些内容混合到 CSS 中：

```js
npm install --save-dev file-loader
```

增加配置

```js
const path = require('path');

  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
+       {
+         test: /\.(png|svg|jpg|gif)$/,
+         use: [
+           'file-loader'
+         ]
+       }
      ]
    }
  };
```

可以在js文件中引入图片

```js
import _ from 'lodash';
  import './style.css';
+ import Icon from './icon.png';

  function component() {
    var element = document.createElement('div');

    // Lodash，现在由此脚本导入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

+   // 将图像添加到我们现有的 div。
+   var myIcon = new Image();
+   myIcon.src = Icon;
+
+   element.appendChild(myIcon);

    return element;
  }

  document.body.appendChild(component());
```

也可以在css中使用图片

```js
.hello {
    color: red;
+   background: url('./icon.png');
  }
```

## 全局资源

上述所有内容中最出色之处是，以这种方式加载资源，你可以以更直观的方式将模块和资源组合在一起。无需依赖于含有全部资源的 `/assets` 目录，而是将资源与代码组合在一起。例如，类似这样的结构会非常有用：

```js
- |- /assets
+ |– /components
+ |  |– /my-component
+ |  |  |– index.jsx
+ |  |  |– index.css
+ |  |  |– icon.svg
+ |  |  |– img.png
```

### 使用 webpack-dev-server

以上步骤让我们实现了在原生js中进行模块化开发的功能，唯一的缺点是，为了看到修改后的实际效果，你需要刷新浏览器。如果能够自动刷新浏览器就更好了，可以尝试使用 `webpack-dev-server`，恰好可以实现我们想要的功能。

`webpack-dev-server` 为你提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)。让我们设置以下：

```js
npm install --save-dev webpack-dev-server
```

修改配置文件，告诉开发服务器(dev server)，在哪里查找文件：

```js
 const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const CleanWebpackPlugin = require('clean-webpack-plugin');

  module.exports = {
    entry: {
      app: './src/index.js',
      print: './src/print.js'
    },
    devtool: 'inline-source-map',
+   devServer: {
+     contentBase: './dist'
+   },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'Development'
      })
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };
```

在package.json中我们增加命令：

```js
 "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "watch": "webpack --watch",
+     "start": "webpack-dev-server --open",
      "build": "webpack"
    },
```

现在，我们可以在命令行中运行 `npm start`，就会看到浏览器自动加载页面。如果现在修改和保存任意源文件，web 服务器就会自动重新加载编译后的代码。试一下！
