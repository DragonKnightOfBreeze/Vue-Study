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

# 计算属性

