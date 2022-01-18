import { App } from 'vue'
import pick from './pick'

pick['install'] = function(app: App) {
  app.config.globalProperties[pick.name] = pick
}

export {
  pick
}
export default pick
