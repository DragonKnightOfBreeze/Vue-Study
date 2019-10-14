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


# vue-router

# vuex

# 网络封装

# 项目实战

# 项目部署

# vuejs原理
