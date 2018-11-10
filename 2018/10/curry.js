const curry = (fn) => {
  return function curried (...arg) {
    console.log(arg)
    return arg.length >= fn.length ?
          fn.apply(null, arg) :
          function (...rest) {
            console.log(rest)
            return curried.apply(null, arg.concat(rest))
          }
  }
}
const add = (x, y) => {
  console.log(x ,y)
  return x + y
}
const res = curry(add)
const result = res(1)(7)
console.log(result)
