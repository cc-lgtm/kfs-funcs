import { App } from 'vue'
import setupFn from './setupFn'
setupFn['install'] = function(app: App) {
  app.config.globalProperties[setupFn.name] = setupFn
}

export {
  setupFn
}
export default setupFn
