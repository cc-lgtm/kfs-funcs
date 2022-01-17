import { App } from 'vue'
import Message from './message'

Message['install'] = function(app: App) {
  app.config.globalProperties[Message.name] = Message
}

export {
  Message
}
export default Message
