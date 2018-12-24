import Vue from "vue";
import VueRouter from 'vue-router';
import Welcome from './components/Welcome.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    router:[
        {
            path: "/",
            component: Welcome,
            meta:{
                forVisitors: true
            }
        }
    ]
});

export default router