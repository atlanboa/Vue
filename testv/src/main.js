import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import VueSession from 'vue-session'

var options = {
  persist: true
}
/*

https://github.com/victorsferreira/vue-session#readme

VueSession can be started with some options that will change its behavior.

persist A Boolean value to determine whether the data stored in the session may persist between tabs and browser instances. Defaults to false.
Pass the options in the use method:

*/

Vue.use(VueSession, options);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
