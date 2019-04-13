import Vue from 'vue'
//import { mdbListGroup } from 'mdbvue';
//import App from './App'
import './asset/mdbvue.css'
import './asset/mdb-4.7.6.css'
import Router from 'vue-router'

import HomePage from './pages/home.vue'

Vue.config.productionTip = false
Vue.use(Router);

var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
  ]
});

/* eslint-disable no-new */
new Vue({
  router,
}).$mount('#app')