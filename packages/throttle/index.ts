import { App } from 'vue'
import throttle from './throttle'

throttle['install'] = function(app: App) {
  app.config.globalProperties[throttle.name] = throttle
}

export {
  throttle
}
export default throttle
