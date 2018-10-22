<template>
 <div class="row">

 
<!--菜单-->
   <div class=" col-md-8 col-sm-12">
       <table class="table table-hover">
           <thead class="thead-defult">
               <tr>
                   <th>尺寸</th>
                   <th>价格</th>
                   <th>加入</th>
               </tr>
           </thead>
           <tbody v-for="items in getMenuItems " >
               <tr>
                   <td><strong>{{items.name}}</strong></td>
               </tr>
               <tr v-for="option in items.options" >
                   <td>
                       <strong>{{option.size}}</strong>
                       </td>
                   <td>
                       <strong> {{option.price}}</strong>
                       </td>
                   <td>
                       <button @click="addToBaskt(items,option)" class="btn btn-sm btn-outline-success">+</button>
                       </td>

               </tr>
               
           </tbody>
       </table>

    
   </div>
   <!-- 购物车 -->
   <div class="col-md-4 col-sm-12">
       <div v-if="Baskts.length>0">
            <table class="table table-hove">
                <thead class="thead-defult">
                    <tr>
                        <th>数量</th>
                        <th>品种</th>
                        <th>价格</th>
                    </tr>
                </thead>
                <tbody v-for="item in Baskts">
                    <tr>
                        <td>
                            <button @click="jian(item)" class="btn btn-sm">-</button>
                            <span >{{item.quantity}}</span>
                            <button  @click="jia(item)" class="btn btn-sm">+</button>
                        </td>
                        <td>{{item.name}}{{item.size}}</td>
                        <td>{{item.price*item.quantity}}</td>
                    </tr>
                </tbody>
            </table>
            <p>总价{{totn + "RMB"}}</p>
            <button class="btn btn-success btn-block">提交</button>

        </div>
      <div v-else>
       {{BasktText}}   
      </div>
   </div>
</div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      BasktText: "购物车暂时是空得",
      Baskts: [],
     // getMenuItems: {}
    };
  },
  created() {
       this.fetchData()
 
  },
  methods: {
    // 实现
     fetchData(){
        // fetch("https://wd5014675358wlahmy.wilddogio.com/menu.json")
        //   .then(res => {
        //     return res.json()
        //   })
        //   .then(data => {
        //     this.getMenuItems = data
        //   })

        // axios.get("menu.json")
        //      .then(res => this.getMenuItems = res.data)

        // this.http.get("menu.json")
        //          .then(res => this.getMenuItems = res.data)

        // 将 请求到得数据 存到 vuex 中集中管理
         this.http.get("menu.json")
                  .then(res =>this.$store.commit("setMenuItems", res.data))
      },

    

    addToBaskt(items, option) {
      let Baskt = {
        name: items.name,
        size: option.size,
        price: option.price,
        quantity: 1
      };
      if (this.Baskts.length > 0) {
        // 过滤  重复添加
        let resut = this.Baskts.filter(Baskt => {
          return Baskt.name === items.name && Baskt.price === option.price;
        });

        if (resut != null && resut.length > 0) {
          resut[0].quantity++;
        } else {
          this.Baskts.push(Baskt);
        }
      } else {
        this.Baskts.push(Baskt);
      }
    },
    jian(item) {
      item.quantity--;
      if (item.quantity <= 0) {
        this.remooveitem(item);
      }
    },
    jia(item) {
      item.quantity++;
    },
    remooveitem(item) {
      // 小于 0  移除本条信息
      this.Baskts.splice(this.Baskts.indexOf(item), 1);
    }
  },
  computed: {
   
      // 方法
   getMenuItems(){
  // 在 vuex 中获取数据
     return this.$store.state.menuItems;
   },

   //  计算总价
    totn() {
      let totns = 0;
      for (let index in this.Baskts) {
        // 拿到 每一个添加进去得对象
        let indivitem = this.Baskts[index];
        totns += indivitem.quantity * indivitem.price;
      }
      return totns;
    }
  }
};
</script>
