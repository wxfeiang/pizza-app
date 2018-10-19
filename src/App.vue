<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
     <div class="container">
       <!-- 展示路由 -->
       <router-view></router-view>
     </div>

      <br>
     <!-- 路由组件的复用   在到路由组件中注册-->
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-4">
            <!--  name 展示具体得组件 -->
            <router-view name="historyLink"></router-view>
          </div>
         
           <div class="col-sm-12 col-md-4">
            <router-view name="DelieryLink"></router-view>
          </div>
          <div class="col-sm-12 col-md-4">
            <router-view name ="OtherLink"></router-view>
          </div>
        </div>
      </div>

   
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    appHeader: Header //注册组件 冲突标签 驼峰直接写
  }
};
</script>

<style lang="scss">
</style>
