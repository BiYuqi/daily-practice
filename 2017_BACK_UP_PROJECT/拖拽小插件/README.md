## 简单的拖拽小插件

## 使用方法
```html
<script src="drag.js"></script>
```
```js
/*
*   @param {el}  目标元素 class or id or dom对象
*   @param {limit} [可选 默认整个屏幕] 控制拖拽对象可拖拽范围 注意范围不合理会抛错
*   @param {isRandomParam} [可选 默认false] 随机坐标
*   @param {styles} [可选 目标样式设置，主要是用来设置top，left]
*   @param 优先级：styles > isRandomParam
*   @param drag.stop() 锁定不让拖拽
*   @param drag.open() 打开锁定
*   @param drag.getParam() 获取当前坐标位置
*/
const drag = new Drags({
    el: '',
    limit: [top,right,bottom,left],
    isRandomParam: false,
    styles: {
        top: 200,
        left: 100
    }
})
drag.stop()
drag.open()
drag.getParam()
```
