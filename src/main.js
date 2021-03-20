import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
