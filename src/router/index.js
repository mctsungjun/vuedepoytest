import BoardRegister from '@/views/BoardRegister.vue';
import BoardRepl from '@/views/BoardRepl.vue';
import BoardUpdate from '@/views/BoardUpdate.vue';
import BoardView from '@/views/BoardView.vue';
import BordList from '@/views/BordList.vue';
import ContackUs from '@/views/ContackUs.vue';
import FindIdPassword from '@/views/FindIdPassword.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Login from "../views/Login.vue";
import Mainview from "../views/Main.vue";
import Register from "../views/Register.vue";
import ShowList from '@/views/ShowList.vue';
import ShowDetails from '../views/ShowDetails.vue';
import ShowRegister from '@/views/ShowRegister.vue';
import SalesList from '@/views/SalesList.vue';
import ImageInsert from '@/views/imageInsert.vue';
import ProductUdate from '@/views/ProductUdate.vue';
const routes = [
  {
    path: '/',
    name: 'main',
    component: Mainview
  },
  {
    path:'/login',
    name: 'Login',
    component: Login
  },
  {
    path:'/register',
    name: 'Register',
    component: Register,
  },
  {
    path:'/findIdPassword',
    name: 'FindId',
    component: FindIdPassword,
  },
  {
    path:'/contackUs',
    name: 'ContackUs',
    component: ContackUs,
  },
  {
    path:'/boardList',
    name: 'BoardList',
    component: BordList,
  },
  {
    path:'/boardRegister',
    name: 'BoardRegister',
    component: BoardRegister,
  },
  {
    path:'/boardView',
    name: 'BoardView',
    component: BoardView,
  },
  {
    path:'/boardUpdate',
    name: 'BoardUpdate',
    component: BoardUpdate,
  },
  {
    path:'/boardRepl',
    name: 'BoardRepl',
    component: BoardRepl,
  },
  {
    path:'/showList',
    name: 'ShowList',
    component: ShowList,
  },
  {
    path:'/showDetails',
    name: 'ShowDetails',
    component: ShowDetails,
  },
  {
    path:'/salesList',
    name:'SalesList',
    component: SalesList
  },
  {
    path:'/productRegisterForm',
    name: 'ShowRegister',
    component: ShowRegister,
  },
  {
    path:'/goToImageInsertForm',
    name: 'ImageInsert',
    component: ImageInsert,
  },
  {
    path:'/goToUpdate',
    name: 'ProductUdate',
    component: ProductUdate,
  },
  
    
  

 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
