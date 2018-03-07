self.onmessage = (ev) => {
  let num = ev.data
  const inter = setInterval(() => {
    self.postMessage(--num)
    if (num <= 0) {
      clearInterval(inter)
      // self.close()
    }
  }, 1000)
}
console.log(self)
