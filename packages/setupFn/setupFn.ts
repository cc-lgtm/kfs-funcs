import { createVNode, render, Component } from 'vue'

type Options = {
  component: Component | null,
  props: {
    [k: string]: any
  }
}
function setupFn(options: Options) {
  const { component, props } = options
  const container = document.createElement('div')
  const vnode = createVNode(component!, props)
  render(vnode, container)
  document.querySelector('body')?.appendChild(container)
}

export default setupFn
