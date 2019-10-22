# 邂逅Vuejs

## 认识Vuejs

* 读音类似`view`。
* 渐进式框架。
    * 可以将Vue作为应用的一部分嵌入其中，带来更丰富的交互体验。
    * 如果希望将更多的业务逻辑交由Vue实现，可以使用Vue核心课和生态系统。
    * Vue core+Vue-router+Vuex，可以满足各式各样的需求。
* 特点
    * 解耦视图和数据。
    * 可复用的组件。
    * 前端路由技术。
    * 状态管理。
    * 虚拟dom。

## 安装

### 直接使用CDN引入

* 用于制作原型和学习：`<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>`
* 用于生产环境：`<script src="https://cdn.jsdelivr.net/npm/vue@2.6.0"></script>`

### 下载和引入

* 开发环境：`https://vuejs.org/js/vue.js`
* 生产环境：`https://vue.js.org/js/vue.min.js`

### NPM安装

* 后续通过webpack和Cli的使用，我们使用这种方式。

## Hello Vuejs

* 原始js的做法：命令式编程
* Vuejs的做法：声明式编程

响应式：当数据发生改变时，界面会自动发生改变。

### Vue列表显示

* `v-for`

### 案例：计数器

* 新的属性：`methods`
* 新的指令：`@click`

### Vue的MVVM

[Wikipedia](https://zh.wikipedia.org/wiki/MVVM)

* View层
    * 视图层
    * 在前端开发中，通常就是dom层。
    * 主要的作用是给用户展示各种消息。
* Model层
    * 模型层
    * 可能是固定的数据，也可能是从服务器得到的数据。
* ViewModel层
    * 视图模型层
    * 一方面实现了数据绑定，即将模型层的更改实时响应到视图层。
    * 另一方面实现了dom监听，可以监听dom事件，并在需要的情况下改变对应的数据。


### 创建Vue实例时传入的options

* el
    * 类型：`string | HtmlElement`
    * 作用：决定Vue实例将会管理哪个dom。（传入字符串时，`#`表示id，`.`表示class）
* data
    * 类型：`Object | Function`
    * 作用：Vue实例对应的数据对象。（在组件中必须是一个函数）
* methods
    * 类型：`{[key: string]: Function}`
    * 作用：定义属于Vue的一些方法，可以在其他方法或者指令中调用。
    
### Vue的生命周期

* `beforeCreate`
* `created`
    * 一般会做一些网络请求。
* `beforeMount`
* `mounted`
* `beforeUpdate`
* `updated`
* `activated`
* `deactivated`
* `beforeDestroy`
* `destroyed`
* `errorCaptured`

# 基础语法

## mustache

> 前端项目的缩进一般是2个空格。

双花括号的插值语法。里面可以进行简单的计算。

## 指令

* `v-once`
    * 表示元素和组件仅会被渲染一次。不需要附带值。
* `v-html`
    * 插入原始html。
* `v-text`
    * 与mustache插值语法相似。
* `v-pre`
    * 将标签内的内容原封不动地显示出来，不做解析。
* `v-cloak`
    * 消除代码抖动。不需要附带值。不需要在单文件组件中使用。
* `v-bind`
    * 动态绑定元素的属性。值为vue表达式。
    * 完整写法是`v-bind:xxx`，缩写是`:xxx`。
* `class绑定`
    * 按条件绑定css class，会与原始的class属性中的css class合并。
    * 语法示例：
        * `:class="{active: isActive, highlight: false}"`
        * `:class="['active', 'highlight', extraClasses]"` 
* `style绑定`
    * 按条件绑定css style，会与原始的style属性中的css style合并。
    * 语法示例：
        * `:style="{color: redColor, fontSize: '16px'}"`
        * `:style="[baseStyles, extraStyles]"` 
* `v-on`
    * 绑定事件。
    * 完整写法是`v-on:xxx`，缩写是`@xxx`。

## 计算属性

* 对数据进行转化后进行演示，或者进行合并后进行演示。
* 计算属性要写在`computed`里面。而且要写成方法形式。调用时不要添加括号。
* 和方法的不同：会对结果进行缓存。
* 一般只提供getter，必要情况下也可以提供setter。

## v-on的基本用法和语法糖

* 前缀：`v-on:`
* 前缀缩写：`@`
* 值：Function | Inline Statement | Object
* 参数：`event`
    * 如果方法定义时没有参数，那么方法调用时不需要加括号。
    * 如果方法定义时有一个参数，那么方法调用时会默认将原生事件对象`event`参数传递进去。这是要省略括号。
    * 如果需要同时传递其他参数，同时传入event时，可以通过`$event`传入原生事件对象。

修饰符：
* `.stop` 调用`event.stopPropagation()`，阻止事件冒泡
* `.prevent` 调用`event.preventDefault()`，阻止默认事件
* `.{KeyCode | KeyAlias}` 只当事件是从特点键触发时才触发回调
* `.native` 监听组件根元素的原生事件
* `.once` 只触发一次监听

## v-if, v-else-if, v-else的使用

* `v-if`等 当满足条件时渲染。
* `v-show` 当满足条件时显示。

## v-for的使用

* `in`可被替换成`of`
* `v-for="item in items"`
* `v-for="(item, index) in items"`
* `v-for="value in map"`
* `v-for="(value, key) in map"`
* `v-for="(value, key, index) in map"`

`v-for`同级的`:key`属性：为了更高效地使用虚拟dom。

## 数组中哪些方法是响应式的

* `Array.push(...)`：添加为最后的元素
* `Array.pop(...)`：删除最后的元素
* `Array.shift(...)`：删除开头的元素
* `Array.unshift(...)`：添加为开头的元素
* `Array.splice(...)`：删除或替换指定所用范围的元素
* `Array.sort(...)`：排序
* `Array.reverse(...)`：倒置
* `Vue.set(array, index, newValue)`

## Javascript高阶函数的使用

> 不如Kotlin

* `Collection.map(...)`
* `Collection.foreach(...)`
* `Collection.reduce(...)`
* `Collection.flatMap(...)`
* `Collection.filter(...)`
* ...

## v-model的双向绑定

* 当表单输入元素拥有`v-model`属性时，不需要再添加`name`属性，大部分情况下不需要添加`value`属性。
* 值绑定：动态给拥有多个选项的表单输入元素的`value`属性赋值。 

v-model指令的修饰符
* `.lazy` 懒绑定，在失去焦点或回车时再进行更新。
* `.number` 固定类型为数字。
* `.trim` 去除首位空格 。


# 组件化开发

## Vue组件化思想

* 组件化是Vue.js中的重要思想
    * 它提供了一种抽象，让我们可以开发出一个个独立可复用的小组件来构造我们的应用。
    * 任何的应用都会被抽象成一颗组件树。

## 注册组件的基本步骤

* 组件的使用分成三个步骤：
    * 创建组件的构造器。调用`Vue.extend(options)`创建。
    * 注册组件。调用`Vue.component(name, obj)`注册。
    * 使用组件。在Vue实例的作用域范围内使用组件。
    * 组件作为自定义标签使用，可嵌套。

> 注意：Vue中的组件需要一个确切的唯一的根元素。

## 全局组件和局部组件

* 当使用`Vue.component()`注册时为全局组件。
* 当在组件声明中使用`components`属性注册时为局部组件。

## 父组件和子组件

* 在Vue组件声明中使用`components`注册为子组件。
* 可在此组件模版中使用，但不能直接在使用此组件的组件中使用。
* 组件与组件之间存在层级关系。
* 其中一种非常重要的关系就是父子关系。

## 组件中的数据存放问题

* 组件内部不能直接访问Vue实例的数据。
* 组件的data属性必须为一个函数，且返回一个对象，内部保存着数据。
* 原因：组件实例之间不共享data对象。

## 父子组件通信：父组件->子组件

* 通过props向子组件传递数据
* props的值有两种方式
    * 字符串数组，其中字符串为传递时的名称。
    * 对象，其中可以设置传递时的类型，也可以设置默认值等。
* props约束对象的属性
    * `type`：类型。可以为多个类型。
    * `default`：默认值，如果类型为Array或Object，需要为一个工厂函数。
    * `required`：如果值为true，则必须传递，否则vue报错。
    * `validator`：验证函数，传入value作为参数，返回boolean。
* 关于props中的驼峰标识
    * 在js中定义时，可以使用CamelCase。
    * 在html中使用时，由于html不区分大小写，需要使用kebab-case。
    * 在模版字符串或者Vue模版中使用时，没有以上限制。
子组件->父组件

## 父子组件通信：子组件->父组件

* 通过自定义事件向父组件发送消息
* v-on不仅可以用于监听dom事件，也可以用于组件之间的自定义事件。
* 自定义事件的流程
    * 在子组件中，通过`this.$emit()`来触发事件。
    * 在父组件中，通过`v-on`来监听子组件事件。
    * 当在事件监听中调用方法而省略参数时，将会传入携带的数据。
* 在原生html中，自定义事件在触发和监听时都必须是kebab-case。

## 使用watch监听属性变化

* 监听方法在组件声明的`watch`属性中定义，传入`newValue`和可选的`oldValue`作为参数。

## 父子组件的访问

* 父组件访问子组件：使用`this.$children`或`this.$refs`
* 子组件访问父组件：使用`$parent`
* 访问根组件即Vue实例：使用`$root`

$children的使用
* 是一个数组类型，包含所有子组件对象。
* 不常用，一般使用`$ref`。

$refs的使用
* 必须在子组件上添加ref属性
* 是一个对象类型，包含所有带有ref属性的子组件对象。
* 通过将ref属性作为键来得到子组件。

$parent的使用
* 开发里面不建议使用，有耦合性。

$root的使用

## 插槽的使用

为什么使用插槽
* 组件的插槽让我们封装的组件更加具有扩展性
* 让使用者可以决定组件内部的一些内容到底展示什么。

***

* 在组件模版中使用`slot`标签声明插槽的位置。
* 可以在定义时在插槽里面添加内容，传入默认值。

## 具名插槽

* 在组件模版中使用显式的`name`属性声明插槽的名字。
* 在使用时使用显式的`slot`属性区分插入的位置。

## 编译的作用域

* 父组件模版的所有东西都会在父级作用域内编译。
* 子组件模版的所有东西都会在子级作用域内编译。

## 作用域插槽

* 目的：父组件提花插槽的标签，但是内容由子组件提供。
* 在组件模版中使用`:data`属性传入需要传递的数据。
* 在使用时使用`#xxx`来接受被传递的数据，`xxx`是插槽的名字，默认为default。
* 接受传递的数据时，可以使用解构语法。

# Vue CLI详解

## 前端模块化

* 问题：变量名冲突，脚本导入顺序，代码复用性。
* 可以解决的方式：闭包/立即执行函数表达式。

## 模块化雏形和CommonJS

* 常见的模块化规范：CommonJS，AMD，CMD，ES6的modules。
* CommonJS只是一个规范，具体的实现是node。

CommonJS
* 核心：导入和导出

```
//导出
//sample.js
module.exports= {
  a: "123",
  b: function(){}
}

//导出
let {a, b} = require("./sample.js")
```

## ES模块化的导入和导出

需要在引入时为`script`标签声明`type="module"`。

导入
* `export`指令
    * `export let name="Windea"`
    * `export {name, weapon}`
* 可以导出变量、函数和类。
* `export default`指令
    * `export default "Windea"`
* 一个文件中只能存在一个`export default`指令。

导出
* `import`指令
    * `import {name} from "./script"`
* `import default`指令
    * `import name from "./script"`
* `import as`指令
    * `import * as aaa from "./script"` 
* 花括号中的是解构语法。
* 导入路径对应的文件是js文件时，后缀名可省略。

## webpack的介绍和安装

* 从本质上来讲，webpack是一个现代的Javascript应用的静态打包工具。
* 核心是模块和打包。
* 强调模块化开发处理。
* 依赖于node环境。
* 为了管理node包，需要使用npm。

和grunt/gulp的对比
* grunt/gulp的核心是Task
* 我们可以配置一系列的task，并且定义task要处理的事务。
* 之后让其依次执行这些task，而且让整个流程自动化。
* 所有grunt/gulp也被称为前端自动化任务管理工具。
* 强调前端流程的自动化。

webpack安装
* 首先需要安装node.js，自带软件包管理工具npm。

## webpack的基本使用

* src 源码，需要通过webpack打包到dist
* dist->distribution 最终发布的代码

## webpack.config.js和package.json的配置

* 打包项目：`npm run build`
* 运行项目：`npm run serve`

局部安装webpack
* 项目中需要安装自己局部的webpack。
* 通过node-modules/.bin/webpack启动webpack打包。

package.json中定义启动
* 在`scripts`属性中定义脚本。
* 执行时，首先会寻找本地的`node_modules/bin`路径中对应的命令。
* 如果没有找到，则会到全局的环境变量中去寻找。

## webpack中使用css文件的配置

什么是loader
* loader是webpack中一个非常核心的概念。
* webpack用来做什么
    * 在开发中除了基本的js代码之外，还需要加载图片，以及转化ts、less等。
    * 对于webpack本身来说，对于这些转化是不支持的。
    * 这时就需要扩展对应的loader。
* loader的使用步骤
    * 通过npm安装对应的loader
    * 在webpack.config.js的modules关键字下面进行配置。 
    * webpack从右向左读取loader。

## webpack图片文件的处理

* 加载图片使用url-loader或file-loader。
* 图片没有正确显示出来，可能是图片路径不正确，需要添加关于`publicPath`的配置。

options里面的name的选项
* `img`：文件要打包到的文件夹。
* `name`：获取文件原来的名字，放在该位置。
* `hash:8`：为了防止命名冲突。可以指定截取的位数。
* `ext`：使用图片原来的扩展名。

## webpack ES6转ES5的babel

* `npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-es2015 webpack`
* 配置webpack.config.js文件
```
{
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['es2015']
    }
  }
}
```
* 重新打包，查看bundle.js文件，发现其中的内容变成了ES5的语法。

## webpack 配置vue

* `npm install --save vue`

打包项目报错
* runtime-only 代码中不允许有任何template
* runtime-compiler 代码中可以有template
* 解决方案：修改webpack的配置，添加如下内容
```
resolve: {
  alias: {
    "vue$": "vue/dist/vue.esm.js"
  }
}
```

## 创建Vue时template和el的关系

* template会替换el。
* `npm install --save-dev vue-loader vue-template-compiler`
* 高版本的vue-loader需要安装插件。

## webpack插件的使用

loader和plugin的区别
* loader主要用于转换某些类型的模块，它是一个转换器。
* plugin是插件，是对webpack本身的扩展，是一个扩展器。

plugin的使用过程
* 通过npm安装需要使用的插件。
* 在webpack.config.js的plugins中配置文件。

## webpack BannerPlugin的使用

* 用于生成版权信息。

```
const webpack = require("webpack");

module.exports = {
  /*...*/
  plugins:[
    new webpack.BannerPlugin("Copyright @DragonKnightOfBreeze")
  ]
}
```

## Webpack HtmlWebpackPlugin的使用

* 可以自动生成一个index.html文件。（可以指定模版生成）
* 将打包的js文件，自动通过script标签插入到body中。

安装与使用
* `npm install --save-dev html-webpack-plugin`
* template表示根据什么模版来生成index.html。
* 需要删除之前在output中添加的publicPath属性。
* 否则插入的script标签中的src可能会有问题。

```
module.exports = {
  /*...*/
  plugins:[
    new htmlWebpackPlugin({
      template: "index.html"
    })
  ]
}
```

## webpack UglifyJsWebpackPlugin的使用

* 在项目发布之前，我们必然需要对js等文件进行压缩处理
* 这里，我们就要对打包的js文件进行压缩

安装和使用
* `npm install --save-dev uglifyjs-webpack-plugin`
* 修改webpack.config.js文件，使用插件。
* 查看打包后的bundle.js文件，是已经被压缩过的了。

```
const uglifyJsPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
  /*...*/
  plugins: [
    new uglifyJsPlugin()
  ]
}
```

## webpack-dev-server搭建本地服务器

webpack提供了一个可选的本地开发服务器，这个服务器基于node.js搭建，内部使用express框架。

> 开发阶段，不建议使用丑化js插件。

安装和使用
* `npm install --save-dev webpack-dev-server`
* devServer也是webpack配置文件中的一个选项，有以下属性：
    * contentBase：为哪一个文件夹提供本地服务，默认是根文件夹，我们这里需要填写`./dist`。
    * port：端口号。
    * inline：页面实时刷新。
    * historyApiFallback：在SPA页面中，依赖html5的history模式。
* 可以再配置另外一个script，`--open`表示直接打开浏览器：
    * `"dev": "webpack-dev-server --open"`

```
devServer: {
  contentBase: "./dist",
  inline: true
}
```

## webpack配置文件的分离

* `npm install --save-dev webpack-merge`
* 将配置分离为`base.config.js`、`prod.config.js`、`dev.config.js`
* `prop.config.js`的编写示例：
* 在`package.json`的script中指定配置文件：`--config ./prod.config.js`

```
const uglifyJsWebpackPlugin = require("uglifyjs-webpack-plugin");
const webpackMerge = require("webpack-merge");
const baseConfig = require("./base.config")

module.exports= webpackMerge(baseConfig, {
  plugins:[
    new uglifyJsWebpackPlugin()
  ]
});
```

## Vue CLI脚手架的介绍和安装

* CLI全称Command line interface，翻译为命令行接口，俗称脚手架。
* Vue CLI是官方发布的vue.js项目脚手架。
* 使用vue-cli可以快速搭建Vue开发环境以及对应的webpack配置。 

Vue Cli使用前提：node

Vue Cli3安装
* `npm install -g @vue/cli`

Vue CLI2初始化项目，拉取2.x模版
```
npm install -g @vue/cli init
vue init webpack my-project
```

## runtime-compiler和runtime-only的区别

* 如果在以后的开发中，仍然使用template，就要使用runtime-compiler。
* 如果在以后的开发中，仅使用单组件文件开发，那么可以选择runtime-only。

## Vue CLI2的安装和使用

（略）

## Vue CLI3的安装和使用

版本之间的区别
* vue-cli 3基于webpack4打造，vue-cli 2还是webpack3.
* vue-cli 3的设计原则是0配置，移除了配置文件根目录下的build、config等目录。
* vue-cli 3提供了vue ui命令，提供了可视化的配置，更加人性化。
* 移除了static文件夹，新增了public文件夹，并且将index.html移动到public中。
* 隐藏了许多东西。

修改配置的方式
* 启动配置服务器`vue ui`。

> 箭头函数的this引用的是最近作用域的this。

# vue-router

## 什么是路由和其中的映射关系

* 什么是路由
    * 路由是一个网络工程中的术语。
    * 路由就是通过互联的网络把信息从源地址传输到目标地址的活动。
* 路由器提供了两种方式：路由和转发。
    * 路由是决定数据包从来源到目的地的路径。
    * 转发将输入端的数据转移到合适的输出端。
* 路由中有一个非常重要的概念叫路由表
    * 路由表本质上是一个映射表，决定了数据包 指向。

什么是前端渲染，什么是后端渲染
* 后端渲染
    * 后端处理url和页面之间的映射关系。
    * 后端路由有利于seo优化。
* 前后端分离
    * 后端只负责提供数据。
* 前端渲染
    * 浏览器中显示的大部分内容都是由js代码完成。
* 单页面富应用阶段
    * 最主要的特点就是在前后端分离的基础上加了一层前端路由。
    * 一个前端路由对应一个前端页面。
* 后端专注于数据，前端专注于交互和可视化。

## url的hash和html5的history

* 监听hash的改变
* history相关方法
    * `history.pushState(obj, title, url)`
    * `history.replaceState(obj, title, url)`
    * `history.go(num = 1)`
    * `history.forward()`
    * `history.back()`

## 安装与使用vue-router

安装
* `npm install --save vue-router`
* 导入路由器对象，并且调用`Vue.use(VueRouter)`
* 创建路由实例，传入路由映射配置。
* 在Vue实例中挂载创建的路由实例。

使用
* 创建路由组件
* 配置路由映射：组件与路由的映射关系。
* 通过`router-link`和`router-view`标签使用路由。

## router-link

属性
* `to` 指定需要转发到的路径，可为绝对可为相对。
* `tag` 指定显示的格式。如`button`。
* `replace` 使用`history.replaceState()`
* `activeClass` 激活时需要添加的css class。也可以在路由配置中使用`linkActiveClass`配置。

## 通过代码跳转路由

* `this.$router.push(location)`
* `this.$router.replace(location)`
* `this.$router.go(n)`
* `this.$router.forward()`
* `this.$router.back()` 

## 路由的懒加载

官方的解释
* 当打包构建应用时，javascript包会变得非常大，影响页面加载。
* 如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。

路由懒加载做了什么
* 主要作用就是讲路由对应的组件打包成一个个小的js代码块。
* 只有在这个路由被访问到的时候，才加载对应的组件。

懒加载的方式
* AMD：`const About = resolve => require(['../components/About.vue'], resolve);`
* ES6：`const Home = () => import('./components/About.vue')`

## 路由的嵌套

* 在路由定义中使用`children`属性定义子路由。
* 子路由的`name`属性不需要以斜线开头。
* 存在子路由的路由，对应的组件页面需要添加`router-outlet`，且在跳转时需要使用完整绝对路径。

## 参数传递

传递参数主要有两种方式：params和query。

* 传入参数
    * `/user/:id`，`id`是一个参数。
* 得到参数
    * `this.$route.params.id`，`id`是一个参数。
    * 在组件方法中使用。

* 传入查询参数
    * `/login?url=xxx`，`url`是一个查询参数。
* 得到查询参数
    * `this.$route.query.name`，`name`是一个查询参数。
    * 在组件方法中使用。

> URL的组成：
> * `协议类型:[//[用户信息@]服务器:端口号][/资源层级UNIX文件路径]文件名[?查询][#片段ID]`
> * `scheme:[//[userInfo@]host:port][/path]fileName[?query][#fragment]`

## router和route的区别

* 所有的组件都继承自Vue的原型。
* `this.$router`和`this.$route`即使添加到Vue原型的方法。
* `this.$router`为全局的、唯一的路由器实例。
* `this.$route`是基于当前组件的当前路由实例。

## 导航守卫

* vue-router提供的导航守卫主要用来监听路由的进入和离开。
* 通用的导航守卫回调：beforeEach、afterEach。
* 路由独享的导航守卫回调：beforeEnter、afterEnter。
* 组件内的导航守卫回调：beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave。
* vue-router
  它们会在路由即将改变前和改变后触发。
* 可以定义全局守卫、路由独享守卫和组件内守卫。

* `next()`
* `next(false)`
* `next("/login")`
* `next(error)`

## keep-alive遇见vue-router

* keep-alive是Vue内置的一个组件，可以使被包含的组件保留状态，避免重新渲染。
* router-view也是一个组件，如果直接被包在keep-alive里面，
  所有路径匹配到的视图组件都会被缓存。

* 组件回调`activated`和`deactivated`：
  只有当组件被keep-alive组件包围时才有效。

重要的属性：
* include：字符串或正则表达式，只有匹配的组件会被缓存。
* exclude：字符串或表达式，任何匹配的组件都不会缓存。
* 里面的组件名用逗号隔开，不要添加空格。

## 文件路径引用问题

```
//在dom中使用时，需要在别名路径前面添加"~"
resolve: {
  alias: {
    "@"： resolve("src")
  }
}
```

# vuex

## Promise语法

* Promise是异步编程的一种解决方案。
* 链式编程。

什么情况下会用到Promise
* 进行异步请求操作时。
* new -> 构造函数（保存了一些状态信息，执行传入的参数）。
* 构造参数中的resolve和reject回调是在内部执行的。
* then是操作成功时的回调，catch是操作失败时的回调。

```javascript
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("data");
  }, 1000);
  //reject("error message");
}).then(value => {
  //return Promise.resolve(value+"123");
  return value + "123";
}).then(value => {
  console.log(value);
}).then(value => {
  //return Promise.reject("Error");
  throw "Error";
}).catch(reason => {
  console.error(reason);
}).finally(() => {
  console.log("Finished.")
});
```

Promise的三种状态
* pending 等待状态。正在进行网络请求，或者定时器没有到时间。
* fulfill 满足状态。当主动回调了resolve时。会回调then。
* reject 拒绝状态。当主动回调了reject时。会回调catch。

Promise all方法的使用
* `Promise(promises)`
* 当所有Promise都被解析成功时，创建一个解析成功的Promise，
  否则创建一个拒绝的Promise。


## vuex的概念和作用解析

Vuex是一个专为vuejs应用程序开发的状态管理模式。
* 采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态
  以一种可预测 方式发生变化。
* Vuex也继承到vue的官方调试工具devtools extension，提供了诸如零配置的
  time-travel调试、状态快照导入导出等高级调试功能。

状态管理
* 把需要多个组件共享的变量全部存储在一个对象里面。

响应式

管理什么状态
* 用户登录状态、用户信息
* 购物车、收藏

## 单界面到多界面状态管理切换

单界面状态管理

* State：状态，例如data中的属性。
* View：视图层，可以针对State的状态，显示不同的消息。
* Actions：主要是用户的各种操作。如点击、输入等。

多界面状态管理

全局单例模式（大管家）

* 将共享的状态抽取出来，交给我们的大管家，统一进行管理。
* 之后，每个试图，按照约定好的方式，进行访问和修改等操作。

## Vuex state 单一状态树的理解

# 网络封装

# 项目实战

# 项目部署

# vuejs原理
