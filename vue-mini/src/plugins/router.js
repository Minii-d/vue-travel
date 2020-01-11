import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);


//代表着所有组件 引入了,以为着所有的样式 都插入到style标签了
import Home from '../pages/Home.vue'
import Column from '../pages/Column.vue'
import Follow from '../pages/Follow.vue'
import OrderForm from '../pages/OrderForm.vue'
import User from '../pages/User.vue'
import Reg from '../pages/Reg.vue'
import Login from '../pages/Login.vue'
import Detail from '../pages/Detail.vue'
import BDMap from '../pages/BDMap.vue'
import Reset from '../pages/Reset.vue'
import NoPage from '../pages/NoPage.vue'

let routes=[
  {path:'/Home',component:Home},
  {path:'/Column',component:Column},
  {path:'/OrderForm/:_id',component:OrderForm},
  {path:'/Follow',component:Follow},
  {path:'/User',component:User},
  {path:'/Reg',component:Reg},
  {path:'/Login',component:Login},
  {path:'/Reset',component:Reset},
  {path:'/BDMap',component:BDMap},
  {path:'/Detail/:_id',component:Detail},
  {path:'/',redirect:'/home'},
  {path:'*',component:NoPage}
];

let router = new VueRouter({
  mode:'history',
  routes
});

export default router;