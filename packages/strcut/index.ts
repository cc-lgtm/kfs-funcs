import { App } from 'vue'
import strcut from './strcut'

strcut['install'] = function(app: App) {
  app.config.globalProperties[strcut.name] = strcut
}

export {
  strcut
}
export default strcut
