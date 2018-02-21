export const mutations = {
  increateTag (state, tagObj) {
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
    localStorage.pageOpenedList = JSON.stringify(state.pageOpenedList)
  },
  clearAllTags (state) {
    state.pageOpenedList = []
    localStorage.pageOpenedList = JSON.stringify(state.pageOpenedList)
  },
  setOpenedList (state) {
    state.pageOpenedList = localStorage.pageOpenedList ? JSON.parse(localStorage.pageOpenedList) : []
  }
}
