//import App from './App'
import './asset/bootstrap.min.css'
import './asset/mdb-4.7.6.css'
//import './asset/all.css'

import Vue from 'vue'
import Router from 'vue-router'
//import { mdbCol } from 'mdbvue'
import HomePage from './pages/home.vue'
import ButtonPage from './pages/button.vue'
import TabsPage from './pages/tabs.vue'
import FormsPage from './pages/forms.vue'
import NavigationPage from './pages/navigation.vue'
//console.log(mdbCol)
Vue.config.productionTip = false
Vue.use(Router);

var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/button',
      name: 'buttonPage',
      component: ButtonPage
    },
    {
      path: '/tabs',
      name: 'tabsPage',
      component: TabsPage
    },
    {
      path: '/forms',
      name: 'formsPage',
      component: FormsPage
    },
    {
      path: '/navigation',
      name: 'navigation',
      component: NavigationPage
    },
    
  ]
});

/* eslint-disable no-new */
new Vue({
  router,
}).$mount('#app')