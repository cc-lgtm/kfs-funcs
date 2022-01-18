function loopFn(funcs: Array<(next: Function) => void>) {
  let curr = 0
  function next() {
    return funcs[curr++](next)
  }
  next()
}

export default loopFn
