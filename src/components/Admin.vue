<template>
<h1>
    admin
</h1>
</template>
<script>
export default {
    data(){
        return {
            name: '王鹏'
        }
    },
    //  进入组件
  /*  beforeRouteEnter: (to,from ,next) =>{
        // 数据渲染完 哪数据
       //alert('hellow'+ this.name ); 
        next(vm =>{
           alert('hellow'+ vm.name +'组件内守卫'); 
        })

    }, */
    // 离开组件
   beforeRouteLeave (to, from, next) {
       if(confirm('骚年,确定离开嘛')== true){
           next();
       }else{
           next(false);
       }
   }
}
</script>