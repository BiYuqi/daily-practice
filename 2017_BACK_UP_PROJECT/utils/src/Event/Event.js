/**
*   event emmiter
*
*/
export default class Emiter {
    constructor() {
        this.clientList = {}
    }

    on(key, fn) {
        if(!this.clientList[key]){
            this.clientList[key] = []
        }
        this.clientList[key].push(fn)
    }

    trigger() {
        const key = [].shift.call(arguments)
        const fns = this.clientList[key]

        if(!fns || fns.length === 0){
            return
        }

        for(let i=0;i<fns.length;i++){
            fns[i].apply(this,arguments)
        }
    }

    off(key, fn) {
        const fns = this.clientList[key]
        if(!fns){
            return
        }
        const len = fns.length
        for(let i=0;i<len;i++){
            const fk = fns[i]
            if(fk === fn){
                fns.splice(i, 1)
            }
        }
    }

    once(type, fn) {
        let flag = false
        const ck = function(){
            this.off(type, ck)

            if(!flag){
                flag = true
                fn.apply(this, arguments)
            }
        }
        this.on(type, ck)
    }
}
