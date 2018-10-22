<template>
    <div class="container">
      <!--  测试vue router 滚动行为 -->
      <div id="home" class="col-sm-12 text-center">
        <div class="background">
          <h1>欢迎大家品尝 Paizz!!!!</h1>
        </div>
      </div>
        <div class="bg">
          <div class="tit">
            <h1>欢迎来到paizz点餐系统</h1>
            <h2>这里有你注意喜欢的paizz</h2>
             <button @click="goTom" class="btn btn-success">指定路由跳转</button>
          </div>

        </div>

    </div>
</template>
<script>
export default {
  methods: {
    goTom() {
      //  跳转到上次浏览的页面
      //  this.$router.go(-1);
      //  跳转到指定地址
      //  this.$router.replace('/menu')
      //  指定路由跳转 的名字下
      //  this.$router.replace({name:'menu'})
      //  最常用的 通过 push 进行跳转 更多
      // this.$router.push('/menu')
      this.$router.push({ name: "menuLink" });
    }
  }
};
</script>
<style lang="sass" scoped>
.bg
  background: url("../assets/pisaa.jpg") no-repeat
  background-size: 100% 100%
  height: 85vh
  padding: 6%
  .tit
    margin: 10%
    padding: 10%
    text-align: center
    background: #ccc
    opacity: 0.8
</style>

