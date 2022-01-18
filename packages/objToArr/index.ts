import { App } from 'vue'
import objToArr from './objToArr'

objToArr['install'] = function(app: App) {
  app.config.globalProperties[objToArr.name] = objToArr
}

export {
  objToArr
}
export default objToArr
