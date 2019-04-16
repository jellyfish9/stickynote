//import App from './App'
import './asset/bootstrap.min.css'
import './asset/mdb.css'
//import './asset/all.css'

import Vue from 'vue'

//console.log(mdbCol)
Vue.config.productionTip = false

import router from './router.js'

new Vue({
	router,
	el: '#app'
})
