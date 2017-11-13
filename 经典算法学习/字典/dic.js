/**
*   @param set(key,value)：向字典中添加新元素。
*   @param remove(key)：通过使用键值来从字典中移除键值对应的数据值。
*   @param has(key)：如果某个键值存在于这个字典中，则返回true，反之则返回false。
*   @param get(key)：通过键值查找特定的数值并返回。
*   @param clear()：将这个字典中的所有元素全部删除。
*   @param size()：返回字典所包含元素的数量。与数组的length属性类似。
*   @param keys()：将字典所包含的所有键名以数组形式返回。
*   @param values()：将字典所包含的所有数值以数组形式返回。
*/

class Dictionary {
    constructor() {
        this.option = {}
    }

    set(key, value) {
        this.option[key] = value
    }

    remove(key) {
        delete this.option[key]
    }

    has(key) {
        return key in this.option
    }

    get(key) {
        return this.option[key]
    }

    clear() {
        this.option = {}
    }

    size() {
        return Object.keys(this.option).length
    }

    keys() {
        return Object.keys(this.option)
    }

    values() {
        const value = []
        for(let i in this.option){
            if(this.has(i)){
                value.push(this.option[i])
            }
        }
        return value
    }

}

const d = new Dictionary()
d.set('biyuqi', 25)
d.set('caicai', 24)
console.log(d.has('biyuqi'))
console.log(d.size())
console.log(d.keys())
console.log(d.values())
