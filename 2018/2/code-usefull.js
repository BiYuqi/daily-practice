const log = (data) => {
    console.log(data)
}
/**
* 数组相似(交集)
*/
const similarity = (arr, arr2) => {
  return arr.filter((item) => {
    return arr2.includes(item)
  })
}
/**
* 扁平化一个二维数组
*/
const flatten = (arr) => {
  return arr.reduce((start, item) => {
    return start.concat(item)
  }, [])
}
/**
* 数组对象去重
* @param {source} 数据源
* @param {name} 需要比较的key
* @return {无重复的数据}
*/
const filterRepeat = (source, name) => {
  let result = []
  let isRepeat
  for (var i = 0; i < source.length; i++) {
    isRepeat = false
    for (var j = 0; j < result.length; j++) {
      if (source[i][name] === result[j][name]) {
        isRepeat = true
        break
      }
    }
    if (!isRepeat) {
      result.push(source[i])
    }
  }
  return result
}
