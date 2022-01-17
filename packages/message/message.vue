<template>
  <div class="message" :style="styles">
    {{ text }}
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  computed,
  CSSProperties
} from 'vue'

type Type = 'error' | 'warn' | 'success'
export default defineComponent({
  props: {
    text: String,
    type: {
      type: String as PropType<Type>,
      default: 'warn'
    }
  },
  setup(props) {
    const styleMap: {
      [k in Type]: string
    } = {
      error: '#ff4757',
      warn: '#eccc68',
      success: '#2ed573'
    }
    const styles = computed(() => {
      const style = {
        '--message-bg': styleMap[props.type]
      } as {
        [k: string]: string
      } & CSSProperties

      return style
    })

    return {
      styles
    }
  }
})
</script>

<style>
.message {
  width: max-content;
  padding: 3vw 8vw;
  color: #fff;
  background: var(--message-bg);
  opacity: 0.6;
  border-radius: 2vw;
  letter-spacing: 0.2rem;
  font-size: 1.1rem;
  position: absolute;
  z-index: 999;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: hide 3s ease-in-out;
}
@keyframes hide {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>