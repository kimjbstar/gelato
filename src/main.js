import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
// Vue.prototype.$http = axios


Vue.mixin({
  methods: {
    capitalizeFirstLetter: str => str.charAt(0).toUpperCase() + str.slice(1)
  }
})
// 이거보다 플러그인으로 https://kr.vuejs.org/v2/guide/plugins.html

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')