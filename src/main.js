import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Row, Col } from 'element-ui'
import './assets/css/base.css'
import './assets/css/animate.min.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
