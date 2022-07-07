import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.less'
import 'amfe-flexible'
import '@/styles/icon.less'
import '@/styles/reset.less'
import '@/styles/index.less'
import * as obj from '@/fliters'
import FollowUser from '@/components/FollowUser.vue'
import '@/components'
Vue.component(FollowUser.name, FollowUser)
Object.keys(obj).forEach(key => {
  Vue.filter(key, obj[key])
})
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
