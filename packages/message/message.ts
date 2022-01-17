import { render, createVNode, ref } from 'vue'
import message from './message.vue'

type Options = {
  text: string
}
type Func = (options: Options) => void
type MessageFn = {
  'error': Func,
  'warn': Func,
  'success': Func
}

function createMessage(props: {
  text: string,
  type: 'error' | 'warn' | 'success'
}) {
  const vnode = createVNode(message, props)
  render(vnode, document.querySelector('body')!)
  setTimeout(() => {
    const vnode = createVNode(null!, props)
    render(vnode, document.querySelector('body')!)
  }, 3000)
}

function Message(): MessageFn {
  return {
    error({ text }) {
      createMessage({
        text: text,
        type: 'error'
      })
    },
    warn({ text }) {
      createMessage({
        text: text,
        type: 'warn'
      })
    },
    success({ text }) {
      createMessage({
        text: text,
        type: 'success'
      })
    }
  }
}

export default Message
