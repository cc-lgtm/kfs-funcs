import { App } from 'vue'
import setupFn from './setupFn'
import message from './message'
import { MessageFn } from './message/message'
import pick from './pick'
import loopFn from './loopFn'
import chunk from './chunk'
import strcut from './strcut'
import parseUrl from './parseUrl'
import objToArr from './objToArr'
import throttle from './throttle'

type Map = Function | MessageFn
const funcMap: Map[] = [
  setupFn,
  message,
  pick,
  loopFn,
  chunk,
  strcut,
  parseUrl,
  objToArr,
  throttle
]

function install(app: App) {
  funcMap.forEach(func => {
    app.config.globalProperties[func.name] = func
  })
}

export * from './setupFn'
export * from './message'
export * from './pick'
export * from './loopFn'
export * from './chunk'
export * from './strcut'
export * from './parseUrl'
export * from './objToArr'
export * from './throttle'

export {
  install
}
export default install
