//  不统计文件夹 注意引入路径

// 一级路由组件
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'
// 二级路由
import Contact from './components/about/Contact'
import Deliery from './components/about/Deliery'
import History from './components/about/History'
import Other from './components/about/Other'
// 三级路由
import phone from './components/about/phone'  



export const routes = [
    // 配置路径
    {
        path: '/',
        name: "homeLink",
        // 单个组件
        //component: Home
        // 多个组件
        components: {
          default: Home , //  默认显示
          // 前面的name  名 跟页面的所相同
         'historyLink': History,
       
         'DelieryLink': Deliery,
         'OtherLink': Other
        
  
        }
      },
    {
      path: '/menu',
      name: 'menuLink',
      component: Menu
    },
    {
      path: '/admin',
      component: Admin,
       //路由独享组件
    /*   beforeEnter: (toolbar,from,next)=>{
       alert("非登录状态,无法查看");
        next('/Logoin');
        //next(flase); 就不会跳转页面
       next();
      } */
    },
    {
      path: '/Login',
      name: "LoginLink",
      
      component: Login
    },
    {
      path: '/about',
      component: About,
      redirect: '/about/Contact', // 多级默认展示
      children: [
        {
          path: '/about/Contact',
          component: Contact,
          name: 'contantLink',
          children: [
            // 三级路由
            {
              path: '/phone',
              component: phone,
              name: 'phoneLink'
            }
          ]
        },
        , {
          path: '/History',
          component: History,
          name: 'historyLink'
        }
        , {
          path: '/Deliery',
          component: Deliery,
          name: 'DelieryLink',
          
        }
        , {
          path: '/Other',
          component: Other,
          name: 'OtherLink'
        }
  
      ]
    },
    {
      path: '/register',
      name: "RegisterLink",
      component: Register
    },
  
    // 找不到路由  跳转到制定的路由
    , {
      path: '*',
      redirect: '/'
    }
  
  ]



