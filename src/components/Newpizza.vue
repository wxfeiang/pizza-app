<template>
    <form action="">
        <h3 class="text-muted my-5">添加新的pizza</h3>
         <div class="form-group row">
            <label for="" class="col-sm-1">品种</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newpizza.name">
             </div>
        </div>
         <div class="form-group row">
            <label for="" class="col-sm-1">描述</label>
            <div class="col-sm-11">
               <textarea  rows="5"  class="form-control" v-model="newpizza.decion"></textarea>
             </div>
        </div>
       <p><strong>选项1</strong></p>
       <div class="form-group row">
            <label for="" class="col-sm-1">尺寸</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newpizza.size1">
             </div>
        </div>
         <div class="form-group row">
            <label for="" class="col-sm-1">价格</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newpizza.price1">
             </div>
        </div>
         <p><strong>选项2</strong></p>
       <div class="form-group row">
            <label for="" class="col-sm-1">尺寸</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newpizza.size2">
             </div>
        </div>
         <div class="form-group row">
            <label for="" class="col-sm-1">价格</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newpizza.price2">
             </div>
        </div>

        <div class=" from-group row">
            <button @click="addMenuitem" class="btn btn-success btn-block" type="button">提交</button>
            </div>
    </form>
</template>
<script>
export default {
    data(){
        return {
            newpizza:{

            },

        }
    },
    methods:{
        addMenuitem(){
           // console.log(this.newpizza)
           // 和 menu de 数据结构对应
           let  data ={
               name: this.newpizza.name,
               decion: this.newpizza.decion,
               options:[
                   {
                       size: this.newpizza.size,
                        price: this.newpizza.price1
                    },
                    {
                       size: this.newpizza.size1,
                        price: this.newpizza.price2
                    }
               ]
//
           }

        //  fetch  请求数据库  es6  vue 方法
            fetch("https://wd5014675358wlahmy.wilddogio.com/menu.json",{
                method:"POST",
                headers:{   
                    "Content-type":'application/json'
                },      
                body:JSON.stringify(data)
            })
            .then(res => res.json())
           .then(data => this.$router.push({name:"menuLink"}))
           .catch(err => console.log(err))
        }
    }
}
</script>
