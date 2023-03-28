// import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

import home from '../views/Home.vue'
import login from '../views/Login.vue'
import register from '../views/Register.vue'

let routes = [
    {
        path:'/login',
        component:login,
        name:'',
        hidden:true
    },
    {
        path:'/home',
        component:home,
        name:'',
        hidden:true
    },
    {
        path:'/register',
        component:register,
        name:'',
        hidden:true
    },
]

export default routes;