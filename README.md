### docs
#### 安装 & 使用
```ts
yarn add ksf-funs

import KfsFuns from 'kfs-funs'
create(App).use(KfsFuns).mount('#app')

import { proxy } = getCurrentInstance()
const { proxy } = getCurrentInstance()
```
#### setupFn
```ts
proxy.setupFn(component, props)
```

#### message
```ts
proxy.Message().error({
  text: "test"
})
proxy.Message().warn({
  text: "test"
})
proxy.Message().success({
  text: "test"
})
```
