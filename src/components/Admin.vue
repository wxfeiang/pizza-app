<template>
   <div class="row">
       <div class="col-sm-12 col-md-8">
           <!-- new -pizza -->
           <appNewpizza></appNewpizza>
       </div>
       <div class="col-sm-12 col-md-4">
           <!-- show -pizza -->
           <h3 class="text-muted my-5">菜单</h3>
           <table class="table table-hover">
               <thead class="table table-defult">
                   <tr>
                       <th>品种</th>
                       <th>删除</th>
                   </tr>
               </thead>
               <tbody v-for="item in getMenuItems" >
                   <tr>
                       <td>{{item.name}}</td>
                       <td><button @click="deledata(item)" class="btn btn-outline-danger btn-sm">&times</button></td>
                   </tr>
               </tbody>
           </table>


       </div>
   </div>
</template>
<script>
import Newpizza from './Newpizza';
export default {
    components:{
      appNewpizza: Newpizza //注册组件 冲突标签 驼峰直接写

    },
    data(){
        return {
             //  获取到得 数据
          //  getMenuItems:[]
        }
    },
    computed:{
        getMenuItems:{
        // 在vuex中获取数据
        get(){
          // return this.$store.state.menuItems
          // 通过getters获取数据
          return this.$store.getters.getMenuItems
        },
        set(){

        }
      }

    },

    //  后置钩子  进入路由
    created(){
         fetch("https://wd5014675358wlahmy.wilddogio.com/menu.json")
         .then(res=>{
             return res.json()
         })
         .then(data =>{
             //console.log(data)
             let menuArry= [];
             for(let key in data){

                 //  console.log(data[key])

                 data[key].id= key;
               //  console.log(data[key].id)
                 menuArry.push(data[key])
             }
             // 数据同步  到 vuex 
             this.$store.commit("setMenuItems",menuArry)
           //  this.getMenuItems = menuArry;
         })

    },
    methods:{
        // 删除对应得数据
    deledata(item){
            fetch("https://wd5014675358wlahmy.wilddogio.com/menu/"+item.id+"/.json",{
           
                 method:"DELETE",
                headers:{
                    'Content-type':'application/json'
                }

             })
              .then(res => res.json())

                // 刷新 
                .then(data => this.$store.commit("removeMenuItems",item))
              //.then(data => this.$router.push({name: "menuLink"}))
             //.then(data => console.log(data))
              .catch(err => console.log(err))
    }

       
    }
 


}
</script>