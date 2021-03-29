import Vue from 'vue'
import singleSpaVue from 'single-spa-vue'

import App from './App.vue'
import router from './router'
import store from './store'
import { HIDE_NAV_BAR, SHOW_NAV_BAR } from '@/store/types.js'

Vue.config.productionTip = false

router.beforeEach(function (to, from, next) {
  console.log('$router.beforeEach', to)
  if (to.path === '/account/login') {
    store.commit(HIDE_NAV_BAR)
  } else {
    store.commit(SHOW_NAV_BAR)
  }
  next()
})

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render (h) {
      return h(App, {
        props: {
          // single-spa props are available on the "this" object. Forward them to your component as needed.
          // https://single-spa.js.org/docs/building-applications#lifecyle-props
          // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
          /*
          name: this.name,
          mountParcel: this.mountParcel,
          singleSpa: this.singleSpa,
          */
        }
      })
    },
    router,
    store
  }
})

export const bootstrap = vueLifecycles.bootstrap
export const mount = vueLifecycles.mount
export const unmount = vueLifecycles.unmount
