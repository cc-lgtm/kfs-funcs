<template>
  <div>
  </div>
</template>
<script setup lang="ts">
import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()!

// console.log(proxy!.setupFn)
// console.log(proxy!.Message)
// proxy!.Message().warn({
//   text: "test"
// })
</script>
