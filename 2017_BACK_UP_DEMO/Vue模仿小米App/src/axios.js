import axios from 'axios'

export default {
    install (Vue) {
        const http = axios.create();
        Vue.prototype.$http = http;
    }
}
