function myPromise(executor) {
  this.status = 'pending'
  this.value = undefined
  this.onResolveCallback = []
  this.onRejectCallback = []

  let resolve = (value) => {
    if (this.status === 'pending') {
      this.status = 'resolved'
      this.value = value
      for (let i = 0; i < this.onResolveCallback.length; i++) {
        this.onResolveCallback[i](value)
      }
    }
  }
  let reject = (reason) => {
    if (this.status === 'pending') {
      this.status = 'rejected'
      this.value = reason
      for (let i = 0; i < this.onRejectCallback.length; i++) {
        this.onRejectCallback[i](reason)
      }
    }
  }
  try {
    executor(resolve, reject)
  } catch (e) {
    reject(e)
  }
}
myPromise.prototype.then = function(onResolved, onRejected) {
  onResolved = typeof onRejected === 'function' ? onResolved : function(value) { return value}
  onRejected = typeof onRejected === 'function' ? onRejected : function(reason) { return reason}
}
