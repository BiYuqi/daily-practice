export const mutations = {
  increateTag (state, tagObj) {
    if (tagObj && tagObj.meta && tagObj.meta.isLocal) { // 过滤不需要加入tagview的组件
      return
    }
    state.pageOpenedList.push(tagObj)
  },
  pageOpenedList (state, params) {
    let opendPage = state.pageOpenedList[params.index]
    if (params.arg) {
      opendPage.arg = params.arg
    }
    if (params.query) {
      opendPage.query = params.query
    }
    state.pageOpenedList.splice(params.index, 1, opendPage)
    localStorage.setItem('pageOpenedList', JSON.stringify(state.pageOpenedList))
  },
  clearAllTags (state) {
    state.pageOpenedList = []
    localStorage.setItem('pageOpenedList', JSON.stringify(state.pageOpenedList))
  },
  setOpenedList (state) {
    const local = localStorage.pageOpenedList && JSON.parse(localStorage.pageOpenedList).length > 0
    if (local) {
      state.pageOpenedList = JSON.parse(localStorage.pageOpenedList)
    }
  },
  setSidebar (state) { // 侧边栏开关
    // if (!localStorage.getItem('sidebarStatus')) {
    //   localStorage.setItem('sidebarStatus', '0')
    // }
    // if (localStorage.getItem('sidebarStatus') === '0') { // 0
    //   state.sidebarStatus = '1'
    //   localStorage.setItem('sidebarStatus', '1')
    // } else {
    //   state.sidebarStatus = '0'
    //   localStorage.setItem('sidebarStatus', '0')
    // }
    if (state.sidebarStatus === 1) {
      state.sidebarStatus = 0
    } else {
      state.sidebarStatus = 1
    }
  },
  setHeadVisetedShow (state) {
    state.headVisetedShow = !state.headVisetedShow
  }
}
