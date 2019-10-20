# 实现思路

* 如何封装
    * 自定义TabBar组件，在应用中使用。
    * 让TabBar位于底部，并且设置相关样式。
* TabBar中显示的内容由外界决定
    * 定义插槽。
    * flex布局平分TabBar。
* 自定义TabBarItem，可以传入图片和文字
    * 定义TabBarItem，并且定义两个插槽：图片、文字。
    * 给两个插槽外层包装div，用于设置样式。
    * 填充插槽，实现底部TabBar的效果。
