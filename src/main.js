import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import App from './App.vue'
// 引入抽离得 路由组件
import { routes } from './routes'
//https://wd5014675358wlahmy.wilddogio.com/ 野狗云数据地址

// 引入 axios 
axios.defaults.baseURL= 'https://wd5014675358wlahmy.wilddogio.com/'
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'history'  ,// 解决再次刷新
  scrollBehavior (to, from, savedPosition) {  // 滚动行为
    return { x: 0, y: 100 }
  }

})
//  全局守卫 调用router对象  进入组件之前
/* router.beforeEach((to, from, next) => {

  // alert("还没有登录,请先登录");
  // next();
 // 最先开始 判断是否登录
 //if  store.gettes.isLogin === false
 console.log(to)  //  当前的具体路径
 // 判断具体的路径  是 正常展示 不是的话引导到页面
 if(to.path =='/Login' || to.path =='/Register' ){
  next(); 
}else{
  alert("还没有登录,请先登录");
  next('/Login');
} 

})
 */

//  后置钩子函数  进入组件之后   不会太多的使用  没有next
/* router.afterEach((to,from )=>{
  
  alert(1)
}) */
//  路由独享守卫  写在组件路径里面   admin
/* router.beforeEnter((toolbar,from,next) =>{
  alert("非登录状态,无法查看");
})
 */
// 组件内的守卫

//  页面组件的滚动行为


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
