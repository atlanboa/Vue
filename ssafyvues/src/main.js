import Vue from "vue";
import App from "./App.vue";
import router from './router'

Vue.config.productionTip = false;
/*
시발점
1. Vue 객체 생성
2. render 에서 h 함수로 App.vue를 지정(호출)
*/
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
