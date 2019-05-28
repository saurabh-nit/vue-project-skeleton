import Vue from 'vue'

let prevEle
export const clickOutside = {
  bind (el, binding, vnode) {
    if (prevEle && prevEle !== el.children[0].id) {
      document.body.click()
    }
    prevEle = el.children[0].id
    el.event = function (event) {
      vnode.context[binding.expression]()
    }
    el.addEventListener('click', function (event) {
      event.stopPropagation()
    })
    document.body.addEventListener('click', el.event)
  },
  unbind (el) {
    el.removeEventListener('click', function (event) {
      event.stopPropagation()
    })
    document.body.removeEventListener('click', el.event)
  }
}

Vue.directive('click-outside', clickOutside)
