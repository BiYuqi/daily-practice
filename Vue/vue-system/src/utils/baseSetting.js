/**
* 全局基础配置文件
*/
let util = {}
util.title = (title) => {
  title = title || ''
  window.document.title = title
}

util.opendPage = (vm, name, arg = '', query = '') => {
  let pageOpenedList = vm.$store.state.pageOpenedList
  let opendLen = pageOpenedList.length
  let i = 0
  let tagHasOpened = false
  if (opendLen > 0) {
    for (; i < opendLen; i++) {
      if (name === pageOpenedList[i].name) {
        vm.$store.commit('pageOpenedList', {
          index: i,
          arg: arg,
          query: query
        })
        tagHasOpened = true
        break
      }
    }
  }
  if (!tagHasOpened) {
    let tag = {
      name: name
    }
    if (arg) {
      tag.arg = arg
    }
    if (query) {
      tag.query = query
    }
    vm.$store.commit('increateTag', tag)
  }
}
export default util
