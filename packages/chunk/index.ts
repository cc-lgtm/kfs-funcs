import { App } from 'vue'
import chunk from './chunk'

chunk['install'] = function(app: App) {
  app.config.globalProperties[chunk.name] = chunk
}

export {
  chunk
}
export default chunk
