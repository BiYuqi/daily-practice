
const app = {
    state: {
        userPhoto: ''
    },
    mutations: {
        SET_RESET_STATUS(state, avatar) {
            state.userPhoto = avatar
        }
    },
    actions: {
        GET_RESET_STATUS({ commit }, avatar) {
            commit('SET_RESET_STATUS', avatar)
        }
    }
}

export default app
