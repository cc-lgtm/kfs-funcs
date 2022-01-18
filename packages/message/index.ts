import { App } from 'vue'
import message from './message'

message['install'] = function(app: App) {
  app.config.globalProperties[message.name] = message
}

export {
  message
}
export default message
