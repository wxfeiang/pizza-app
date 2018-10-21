<template>
 <div class="row mb-5">
     <div class="col-4">
       
         <div class="list-group mb-5">
             
              <router-link tag="li" class="nav-link" :to="{name: 'historyLink'}">
                  <a class="list-group-item list-group-item-action">历史订单</a>
              </router-link>
               <router-link tag="li" class="nav-link" :to="{name: 'contantLink'}">
                  <a class="list-group-item list-group-item-action">联系我们</a>
              </router-link>
               <router-link tag="li" class="nav-link" :to="{name: 'DelieryLink'}">
                  <a class="list-group-item list-group-item-action">点餐文档</a>
              </router-link>
               <router-link tag="li" class="nav-link" :to="{name: 'OtherLink'}">
                  <a class="list-group-item list-group-item-action">快递信息</a>
              </router-link>
              
             <!-- 在min.js 实现路由配置 -->

         </div>

     </div>
        <div class="col-8 mb-5">
            <!-- 导航信息展示 -->
            <router-view ></router-view>
        </div>
   
 </div>
</template>
<script>
export default {
       //  进入组件
  /*  beforeRouteEnter: (to,from ,next) =>{
        // 数据渲染完 哪数据
       //alert('hellow'+ this.name ); 
        next(vm =>{
           alert('hellow'+ vm.name +'组件内守卫'); 
        })

    }, */
    // 离开组件
  /*  beforeRouteLeave (to, from, next) {
       if(confirm('骚年,确定离开嘛')== true){
           next();
       }else{
           next(false);
       }
   } */

    
}
</script>

