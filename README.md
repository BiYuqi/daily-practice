该项目地址主要是日常练习的DEMO，开发的小东西，放在此地留存
## 命名规则
* 201704    ---------month-practice
* 2017_BACK_UP_PROJECT ---------------current-year-demo
* 表单优化 -------------针对我写的表单构造器，做的针对性demo
* MongoDB -----用nodejs MongoDB 调通成功，并实现读写搜索数据
* FoundationCode ---------日常偶尔看到的面试题随性所写
* LeetCode ----------算法挑战
* 百度前端学院    ---------皆为日常所练习百度课程(样式皆采用sass编写)

## DIY常用函数目录(这里主要讲下该目录)
#### 表单构造器
```js
/**
*  @param _validator(rulelist) 依赖正则表regexp.js 具体使用参见 表单优化文件
*  @param {rulelist} 一系列正则方法表
*/

// 调用策略方法
var validator = _validator(_rules.rulelist);
// 开发代码
var forms = document.querySelector('.forms')
validator.add(forms.userphone,[
    {
        strategy:'isBlank',
        msg:'身份证号码不能为空'
    },
    {
        strategy:'isCard',
        msg:'身份证号输入有误'
    }
])
document.querySelector('.btn').onclick = function(){
    // 初始化错误参数
    var msg = validator.start()
    if(msg){
        console.log(msg)
    }else{
        console.log("提交代码")
    }
}
```
#### 时间相关的函数
```js
/**
* @param 时间格式化工具 支持类似于下面格式
* @param {String} {fmt} _format("YYYY-MM-DD hh:mm:ss")  年-月-日 时-分-秒
* @param {String} {fmt} _format("YYYY-MM-DD")    年月日
* @param {String} {fmt} _format("YYYY/MM/DD")    年月日
* @param {String} {fmt} _format("YYYY年MM月DD日 hh时mm分ss秒") 年月日时分秒
* @param {Number} {times} 时间戳  格式化指定时间 (可选) 已做兼容 非number亦可
*/

_dateFormat(fmt,times)

```

#### 拼接参数 解析参数
```js
/**
* _requireParam(obj) ajax 请求参数优雅拼接
* @param {object} 键值对
*   {
*       id:'',
*       type:'string'
*   }
* @param {String} url可选
* _getParam(url)
*/

_requireParam(obj)

_getParam(url)
```

#### 数组 随机数 相关
```js
/**
* 过滤空的数组或者对象
* @param data {Array} {object}
*/

_filterData(data)

/**
*   _getRandom 获取随机数
*   _getRandomArr 获取随机数组数据
* @param {min} Number
* @param {max} Number
*/
_getRandom(data)

_getRandomFormArr(arr)
```
