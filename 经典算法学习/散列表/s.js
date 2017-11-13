var djb2HashCode = function (key) {
    var hash = 5381; // 一个较大的素数基准值
    for (var i = 0; i < key.length; i++) {
        hash = hash * 33 + key.charCodeAt(i); // 基准值乘以33再加ASCII码值
    }
    return hash % 1013; //除以1013取余
};
console.log(djb2HashCode('biyuqi'))
console.log(djb2HashCode('caiyingjie'))

// 待写。。。。。。。。。。。。。。。。。。。。。。。。
