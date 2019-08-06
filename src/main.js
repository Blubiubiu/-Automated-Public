import Vue from 'vue'
import App from './App.vue'
import qs from 'qs'
// import router from './router'

Vue.config.productionTip = false
Vue.prototype.$qs = qs

new Vue({
  render: h => h(App),
}).$mount('#app')
