// 数据集中管理
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        // 设置属性
        menuItems:{}

    },
    getters:{
        // 获取属性状态

    },
    mutations:{
        // 改变属性状态
        setMenuItems(state,data){
            state.menuItems = data;

        }

    },
    actions: {
        // 应用 mutations
    }
})