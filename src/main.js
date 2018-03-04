import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import UserList from './components/UserList.vue'
import UserDetail from './components/UserDetail.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI)

const routes = [
  { 
    name: 'user_list',
    path: '/user_list', 
    component: UserList 
  },
  { 
    name: 'user_detail', 
    path: '/user_detail', 
    component: UserDetail, 
    props: true 
  }
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
