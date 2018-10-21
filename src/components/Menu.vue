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
           <tbody v-for="items in getMenuItems " :key="items.name">
               <tr>
                   <td><strong>{{items.name}}</strong></td>
               </tr>
               <tr v-for="option in items.options" :key="option.size">
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
export default {
  data() {
    return {
      BasktText: "购物车暂时是空得",
      Baskts:  [],
      getMenuItems: {
        1: {
          name: "榴莲pizza",
          description: "这是喜欢吃榴莲朋友的最佳选择",
          options: [
            {
              size: 9,
              price: 38
            },
            {
              size: 12,
              price: 48
            }
          ]
        },
        2: {
          name: "芝士pizza",
          description: "芝士杀手,浓浓的芝士丝, 食欲瞬间爆棚",
          options: [
            {
              size: 9,
              price: 38
            },
            {
              size: 12,
              price: 48
            }
          ]
        },
        3: {
          name: "夏威夷pizza",
          description: "众多人的默认选择",
          options: [
            {
              size: 9,
              price: 36
            },
            {
              size: 12,
              price: 46
            }
          ]
        }
      }
    };
  },
  methods: {
    addToBaskt(items, option) {
      let Baskt = {
        name: items.name,
        size: option.size,
        price: option.price,
        quantity: 1,
      }
      if(this.Baskts.length>0){
          // 过滤  重复添加
       let resut=   this.Baskts.filter((Baskt)=>{
              return (Baskt.name === items.name && Baskt.price ===option.price)
              
          })

          if(resut !=null && resut.length>0){
              resut[0].quantity++;
          }else{
               this.Baskts.push(Baskt);
          }

      }else{
        this.Baskts.push(Baskt);
      }
     



    },
    jian(item){
        item.quantity--;
        if(item.quantity<=0){
            this.remooveitem(item);
        }
    },
    jia(item){
        item.quantity++;
    },
    remooveitem(item){
        // 小于 0  移除本条信息
        this.Baskts.splice(this.Baskts.indexOf(item),1)
    }






  },
  computed:{
      totn(){
          let totns = 0;
          for(let  index in this.Baskts){
              // 拿到 每一个添加进去得对象 
              let  indivitem = this.Baskts[index]
              totns += indivitem.quantity * indivitem.price;
          }
          return totns;
      }
  }
};
</script>
