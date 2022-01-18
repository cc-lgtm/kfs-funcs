import { createVNode, render, Component } from 'vue'

function setupFn(component: Component) {
  return function(props: {
    [k: string]: any
  }) {
    const container = document.createElement('div')
    const vnode = createVNode(component!, props)
    render(vnode, container)
    document.querySelector('body')?.appendChild(container)
  }
}

export default setupFn
