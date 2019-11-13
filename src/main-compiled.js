import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import api from './api';
import Axios from 'axios';

// Axios.defaults.baseURL = "http://172.16.2.25";
Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.$axios = Axios;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

//# sourceMappingURL=main-compiled.js.map