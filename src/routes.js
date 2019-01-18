import Vue from "vue";
import VueRouter from 'vue-router';

import Welcome from './components/Welcome.vue';
import Login from "./components/Login/Login.vue";
import Dashboard from "./components/Login/Dashboard.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {
            path: "/",
            component: Welcome,
            meta:{
                forVisitors: true
            }
        },
        {
            path: "/login",
            component: Login,
            meta:{
                forVisitors: true
            }
        },
        {
            path: "/dashboard",
            component: Dashboard,
            meta:{
                forAdmins: true
            }
            
        }

    ]
});

export default router