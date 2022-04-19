import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import Collapse from "@/components/Collapse"
import Search from "@/components/Search"
import Logo from "@/components/Logo"

import '@/mock/mockServe'

Vue.component(Collapse.name, Collapse)
Vue.component(Search.name, Search)
Vue.component(Logo.name, Logo)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
