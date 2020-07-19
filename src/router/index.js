import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/galeria',
    name: 'galeria',
    component: () => import('../views/Galeria.vue')
  },
  {
    path: '/contactos',
    name: 'contactos',
    component: () => import('../views/Contactos.vue')
  },
  {
    path: '/mision',
    name: 'mision',
    component: () => import('../views/Mision.vue')
  },/* ,
  {
    path: '/vision',
    name: 'vision',
    component: () => import('../views/Vision.vue')
  }, */
  {
    path: '/mallac',
    name: 'mallac',
    component: () => import('../views/Mallac.vue')
  },
  {
    path:'/c_honor',
    name:"c_honor",
    component:()=>import('../views/C_honor.vue')
  },
  {
    path: '/horario',
    name: 'horario',
    component: () => import('../views/Horario.vue')
  },
  {
    path:'/pei',
    name:'pei',
    component:()=>import('../views/Pei.vue')
  },
  {
    path:'/simbolos_institucionales',
    name:'s_insti',   /* Nombre que se establece en div del component */
    component:()=>import('../views/S_inst.vue')
  },
  {
    path:'/himno',
    name:'himno', 
    component:()=>import('../views/Himno.vue')
  },
  {
    path:'/fundadores',
    name:'fundadores',
    component:()=>import('../views/Fundador.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
