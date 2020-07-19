import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
// ================================
//  Alert vue
// ===============================
import VueSimpleAlert from 'vue-simple-alert';

Vue.use(BootstrapVue);
Vue.use(VueSimpleAlert);
import 'bootstrap/dist/css/bootstrap.css'

import 'bootstrap/dist/js/bootstrap.min.js'
// import 'bootstrap/dist/js/jquery-3.4.1.js'

import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
