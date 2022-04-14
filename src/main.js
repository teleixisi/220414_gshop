/*
入口js
*/
import Vue from 'vue';
import App from './App.vue'
import router from './router'; 
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant)
new Vue ({
    el:'#app',
    render: h => h(App),
    router
})