class Dep {
  constructor () {
    this.subs = []
    this.target = null
  }
  addSub (sub) {
    this.subs.push(sub)
  }
  notify () {
    this.subs.forEach((sub) => {
      sub.update()
    })
  }
  setTarget (status) {
    this.target = status
  }
}
class Observe {
  constructor (data) {
    this.data = data
    this.walk(data)
  }
  walk (data) {
    Object.keys(data).forEach((key) => {
      this.defineReactive(data, key, data[key])
    })
  }
  defineReactive (data, key, val) {
    const dep = new Dep()
    if (val && typeof val === 'object') {
      this.walk(val)
    }
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get: function () {
        if (dep.target) {
          dep.addSub(dep.target)
        }
        return val
      },
      set: (newVal) => {
        if (newVal === val) {
          return
        }
        console.log('前值：' + val + ';更新值：' + newVal)
        val = newVal
        dep.notify()
      }
    })
  }
}
