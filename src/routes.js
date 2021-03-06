import Vue from "vue";
import VueRouter from 'vue-router';

//import Welcome from './components/Welcome.vue';
import Login from "./components/Login/Login.vue";
import Dashboard from "./components/Login/Dashboard.vue";
import Ordenes from "./components/clientes/ListadoOrdenes.vue";
import Orden from "./components/clientes/Ordenes.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {
            path: "/",
            component: Login,
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
        },
        {
            path: "/pacientes/:id",
            component: Ordenes,
            meta:{
                forAdmins: true
            }
        },
        {
            path: "/ordenes/:id",
            component: Orden,
            meta:{
                forAdmins: true
            }
        }
    ]
});

export default router