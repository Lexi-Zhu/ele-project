import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path:'/login',
    component:() => import(/* webpackChunkName: "about" */ '../views/login/Login')
  },
  {
    path:'/home',
    component:() => import(/* webpackChunkName: "about" */ '../views/index/Home')
  }

];


const router = new VueRouter({
  routes
});
<<<<<<< HEAD
me
=======
//挂载路由守卫
//to代表要去的路径，from 代表来源的url next()为一个函数放行 next（‘/’）代表强制去的路径
router.beforeEach((to,from,next)=>{
  if (to.path === '/login') return next();
  if(!store.state.token){
    return next('/login')
  }
  next();
});



>>>>>>> login
export default router
