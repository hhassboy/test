import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/bootstrap-3.4.1-dist/css/bootstrap.min.css'
import './assets/bootstrap-3.4.1-dist/js/bootstrap.min'
import store from './store/index'
import { Form, FormItem, Input, Button } from 'element-ui';

export const eventBus = new Vue();

// 全局事件总线（兄弟之间传参）
Vue.config.productionTip = false

Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Button);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
