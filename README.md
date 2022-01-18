### docs
#### 说明
> 自用的函数库，把一些常见和觉得有意思的函数封装了一下。。。

#### 安装 & 使用
```ts
yarn add ksf-funs

import KfsFuncs from 'kfs-funcs'
create(App).use(KfsFuncs).mount('#app')

import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
```
#### setupFn
> 把一个组件转换成函数的形式调用，通常是弹窗类组件

```ts
const c = proxy.setupFn(component)
c(props)
```

#### message
> message函数生成一个message组件，移动端的样式

```ts
proxy.message.error({
  text: "test"
})
proxy.message.warn({
  text: "test"
})
proxy.message.success({
  text: "test"
})
```

#### pick
> 找出指定数据源对象里的指定值

```ts
proxy.pick({ 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c'])
```

#### loopFn
> 同步依次执行指定的函数数组，必须传入next参数

```ts
proxy.loopFn([
  next => { console.log('0 seconds'); next(); },
  next => { console.log('1 second'); setTimeout(next, 1000); },
  next => { console.log('2 seconds') }
])
```

#### chunk
> 把指定数组分成指定大小的二维数组

```ts
proxy.chunk([[1, 2],2,{
  a: 'test'
},4,'a'], 2)
```

#### strcut
> 把指定字符串切割成数组或新字符串，第二个参数传入`string`类型则切割成以此分隔的数组，传入`number`类型则切割成此长度的字符串

```ts
proxy.strcut('url?id=adssa&test=das', '?')

proxy.strcut('testd', 2)
```

#### parseUrl
> 把指定url切割成对象对, 按照`?`,`&`,`=`切割

```ts
proxy.parseUrl('https://www.test.com?id=dada&en=zh')
```

#### objToArr
> 把指定对象转成数组对的结构

```ts
proxy.objToArr({a: {test: 'data'}, b: 'data'})
```

#### throttle
> 节流函数

```ts
proxy.throttle(() => {
  console.log(1)
}, 1000)
```