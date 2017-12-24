## 简单的拖拽小插件

## 使用方法
```html
<!-- 必须定位 top left 可不指定 -->
<div class="test"></div>

<script src="drag.js"></script>
```
```js
/*
*   @param {el}  目标元素 class or id or dom对象
*   @param {limit} [可选 默认整个屏幕] 控制拖拽对象可拖拽范围 注意范围不合理会抛错
*   @param {isRandomParam} [可选 默认false] 随机坐标
*   @param {styles} [可选 目标样式设置，主要是用来设置top，left值
*   @param 优先级：styles > isRandomParam
*   @param drag.stop() 锁定不让拖拽 全局锁
*   @param drag.open() 打开全局锁
*   @param drag.getParam() 获取当前坐标位置
*   @param drag.lockX() 水平锁定 并且返回true or false 可动态更新UI组件
*   @param drag.lockY() 垂直锁定 并且返回true or false 可动态更新UI组件
*/
const drag = new Drags({
    el: '',
    limit: [top,right,bottom,left],
    isRandomParam: false,
    styles: {
        top: '200px',
        left: '100px'
    }
})
drag.stop()
drag.open()
drag.getParam()
const islockX = dragger.lockX()
console.log(islockX)
const islockY = dragger.lockY()
console.log(islockY)
```
