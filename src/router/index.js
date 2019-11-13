/*
 * @作用:
 * @Author: xufanghe
 * @Date: 2019-11-13 10:50:49
 * @LastEditors: xufanghe
 * @LastEditTime: 2019-11-13 13:10:54
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
//xufanghe导入信息管理
import Xinxinguanli from '../views/xinxiguanli/Xinxiguanli.vue'
Vue.use(VueRouter)

const routes = [
  // xfh 开始
  { path: '/xinxi', component: Xinxinguanli }
  // xfh 结束
]

const router = new VueRouter({
  routes
})

export default router
