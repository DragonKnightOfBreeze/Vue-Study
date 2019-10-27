# 目录结构

```
asserts
    ...
common //公共js文件
    ...
components
    common //不限于当前项目
    content //业务相关
network
    index.js
    ...
router
    index.js
    ...
store
    index.js
    ...
views
    ...
    
App.vue
main.js
```

# 步骤

* 划分目录结构。
* 引用了两个css文件。
* `vue.config.js`和`.editorconfig`。
* 项目的模块划分：tabbar-路由映射关系。

# 笔记

## 如何实现鼠标拖拽功能

```css
.tab-control{
  /*很多浏览器都不支持，移动端大部分支持*/
  position: sticky; 
  top: 100px;
}
```

或者：使用`better-scroll`。
* wrapper元素里面只能有一个子元素。 
* 传入属性：
    * overflow：是否显示滚动条


## 切换列表时图片不切换的问题

设置`v-for`对应的`:key`属性。

