import { App } from 'vue'
import parseurl from './parseUrl'

parseurl['install'] = function(app: App) {
  app.config.globalProperties[parseurl.name] = parseurl
}

export {
  parseurl
}
export default parseurl
