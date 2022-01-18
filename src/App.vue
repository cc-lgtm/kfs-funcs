<template>
  <div>
  </div>
</template>
<script setup lang="ts">
import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()!
// import Test from './test.vue'

// const TestFn = proxy!.setupFn(Test)
// TestFn({
//   text: 'test'
// })

// console.log(proxy!.setupFn)
// console.log(proxy!.Message)
// proxy!.message.warn({
//   text: "test"
// })

// console.log(
//   proxy!.pick({ 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c'])
// )

// proxy!.loopFn([
//   next => { console.log('0 seconds'); next(); },
//   next => { console.log('1 second');  setTimeout(next, 1000); },
//   next => { console.log('2 seconds'); }
// ])

// console.log(
//   proxy!.chunk([[1, 2],2,{
//     a: 'test'
//   },4,'a'], 2)
// )

// console.log(
//   proxy!.strcut('url?id=adssa&test=das', '?'),
//   proxy!.strcut('testd', 2)
// )

// console.log(proxy!.parseUrl('https://test?id=dada&en=zh'))

// console.log(proxy!.objToArr({a: 1, b: 2}))
// console.log(proxy!.throttle(() => {
//   console.log(1)
// }, 1000))
</script>
