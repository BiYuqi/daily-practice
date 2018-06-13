class Watcher {
  constructor (vm, exp, cb) {
    this.vm = vm
    this.exp = exp
    this.cb = cb
    this.value = this.get()
    this.dep = new Dep()
  }
  update () {
    this.run()
  }
  run () {
    const value = this.vm.data[this.exp]
    const oldValue = this.value
    if (value !== oldValue) {
      this.value = value
      this.cb.call(this.vm, value, oldValue)
    }
  }
  get () {
    this.dep.target = this
    const value = this.vm.data[this.exp]
    this.dep.setTarget(null)
    return value
  }
}
