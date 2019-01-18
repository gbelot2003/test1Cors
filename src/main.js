import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Router from "./routes.js";
import Vuex from "vuex";

import StoreData  from './store.js';

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store(StoreData);



new Vue({
  el: '#app',
  render: h => h(App),
  router: Router, store
}).$mount('#app')
