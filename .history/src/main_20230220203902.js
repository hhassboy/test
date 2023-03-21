import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/bootstrap-3.4.1-dist/css/bootstrap.min.css'
import './assets/bootstrap-3.4.1-dist/js/bootstrap.min'
import store from './store/index'

export const eventBus = new Vue();

// 全局事件总线（兄弟之间传参）
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
