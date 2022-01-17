import { App } from 'vue'
import setupFn from './setupFn'
import Message from './message'

const funcMap: Function[] = [
  setupFn,
  Message
]

function install(app: App) {
  funcMap.forEach(func => {
    app.config.globalProperties[func.name] = func
  })
}

export * from './setupFn'
export * from './message'

export default install;
