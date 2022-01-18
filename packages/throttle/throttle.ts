function throttle(func: Function, wait: number) {
  let timer: any
  return (function() {
    const context = this;
    const args = arguments
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
        func.apply(context, args)
      }, wait)
    }
  })()
}

export default throttle
