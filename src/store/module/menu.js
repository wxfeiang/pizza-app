const state = {
    menuItems:{},

}

const getters= {
    getMenuItems :state =>state.menuItems,
}

const mutations = {

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
    }


}

const actions = {
    
}
export default {
    state,
    getters,
     mutations,
     actions
}