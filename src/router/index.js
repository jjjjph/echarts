import { createRouter, createWebHistory} from 'vue-router'

import { useStore } from 'vuex'
const Home=()=> import('../pages/home/index.vue')


const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',component:Home},
    ]
})



export default router
