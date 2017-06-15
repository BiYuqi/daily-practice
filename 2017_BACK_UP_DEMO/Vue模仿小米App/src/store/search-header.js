import Vue from 'vue'

export default {
    state:{
        cView:false //header background
    },
    mutations:{
        changeView (state) {
            state.cView = true;
        },
        backView (state) {
            state.cView = false;
        }
    },
    actions:{
        changeView ({commit}) {
            commit('changeView')
        },
        backView ({commit}) {
            commit('backView')
        }
    }
}
