import { App } from 'vue'
import setupFn from './setupFn'
import message from './message'
import { MessageFn } from './message/message'
import pick from './pick'
import loopFn from './loopFn'
import chunk from './chunk'

type Map = Function | MessageFn
const funcMap: Map[] = [
  setupFn,
  message,
  pick,
  loopFn,
  chunk
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

export {
  install
}
export default install;
