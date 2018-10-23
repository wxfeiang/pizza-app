// 数据集中管理
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        // 设置属性
        menuItems:{},
        currentUser: null,
    isLogin:false

    },
    getters:{
        // 获取属性状态
        getMenuItems :state =>state.menuItems,
        // 获取登录状态
        currentUser:state => state.currentUser,
        isLogin:state => state.isLogin

    },
    mutations:{
        // 改变属性状态
        setMenuItems(state,data){
            state.menuItems = data;

        },
        // 将匹配到 得 menuarry 数组删除
        removeMenuItems(state,data){
            state.menuItems.array.forEach((item,index) => {
                if(item == data ){
                    state.menuItems.splice(index,1)
                }
                
            });
        },
        //  将新添加得  push 到menuItems
        pushToMenuItems(state,data){
            state.menuItems.push(data)
        },
        // 更改用户状态信息
        userStatus(state,user){
            if(user){
                state.currentUser = user
                state.isLogin = true
            }else{
                state.currentUser = null
                state.isLogin = false
            }


        }
        
    },
    actions: {
        // 应用 mutations
        setUser({commit},user){
            commit("userStatus",user)
        }
       
    }
})