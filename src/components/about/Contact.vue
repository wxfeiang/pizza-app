<template>
   <div class="crad textdatk bg-light mb-3  ">
       <div class="card-header">联系我们 </div>
       <div class="card-body">
           <h4 class="card-title">联系我们</h4>
           <p class="card-text">18309469751</p>
              <router-link class="nav-link" :to="{name: 'phoneLink'}">
               电话
              </router-link>
             <router-view ></router-view>
       </div>
   </div>
</template>