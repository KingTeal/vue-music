import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';

// import {post, fetch} from "../config/axios";
// Vue.prototype.$get = fetch;
// Vue.prototype.$post = post;

import api from '../config/api'
Vue.prototype.$api = api

Vue.config.productionTip = false
Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
