import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/bootstrap-3.4.1-dist/css/bootstrap.min.css'
import './assets/bootstrap-3.4.1-dist/js/bootstrap.min'
import store from './store/index'

const eventBus = new Vue();


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
