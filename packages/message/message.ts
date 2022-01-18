import { render, createVNode, ref } from 'vue'
import message from './message.vue'

type Options = {
  text: string
}
type Type = 'error' | 'warn' | 'success'
type Func = (options: Options) => void
export type MessageFn = {
  [k in Type]: Func
} & {
  name: 'message'
}

function createMessage(props: {
  text: string,
  type: Type
}) {
  const vnode = createVNode(message, props)
  render(vnode, document.querySelector('body')!)
  setTimeout(() => {
    const vnode = createVNode(null!, props)
    render(vnode, document.querySelector('body')!)
  }, 3000)
}

const  Message: MessageFn = {
  name: 'message',
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

export default Message
