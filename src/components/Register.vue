<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img class="mx-auto d-block" src="../../src/assets/icon.png" alt="">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email">邮箱</label>
              <input 
                type="email"
                class="form-control"
                v-model="email"
                >
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input 
                type="password"
                class="form-control"
                v-model="password"
                >
            </div>
            <div class="form-group">
              <label for="password2">确认密码</label>
              <input 
                type="password"
                class="form-control"
                v-model="password2"
                >
            </div>
            <button type="submit" class="btn btn-block btn-success">注册</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import axios from 'axios'

  export default{
    data(){
       return {
            email: "",
            password: "",
            password2: ""

        }
      
    },
    methods:{
      onSubmit(){
        if(this.password ==this.password2){
          const formData ={
            email: this.email,
            password: this.password,
            password2: this.password2
          }
          axios.post('/users.json',formData)  // 已经存数据库

            .then(res=>{
             // console.log(res);  跳转到登录页面
             this.$router.push({name:"LoginLink"}) })

        }else{
          alert("两次输入密码不一致")
        }


        
      }
     
      
    }
  }

</script>
