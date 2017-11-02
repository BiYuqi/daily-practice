/**
*
*
*/

class MyMap{
    constructor() {
        this.opt = {}
    }

    set(key,value) {
        this.opt[key] = value
    }

    get(key) {
        return this.opt[key]
    }

    has(key) {
        return !!this.opt[key]
    }

    clear() {
        for(item in this.opt){
            delete this.opt[item]
        }
    }

}
