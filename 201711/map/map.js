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

const map = new MyMap()

map.set('key',true)
map.set('key2','测试2')
map.set('key3','测试3')
const data = map.opt
for(item in data){
    if(!map.get(item)){
        console.log(item)
    }
}

map.clear()
console.log(map)
