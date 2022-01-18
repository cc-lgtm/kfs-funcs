import { App } from 'vue'
import loopFn from './loopFn'

loopFn['install'] = function(app: App) {
  app.config.globalProperties[loopFn.name] = loopFn
}

export {
  loopFn
}
export default loopFn
