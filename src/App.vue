<template>
  <div>
      <!-- 导航条 -->
      <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal"  @select="handleSelect" 
          background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="1" class="sy">
          <router-link  class="dao-link" to="/index">首页</router-link>
        </el-menu-item>
        <el-menu-item index="2" class="log">
          <router-link class="line" to="/login">登录</router-link>
        </el-menu-item>
        <el-menu-item index="3" class="regi"> 
          <router-link class="line" to="/register">注册</router-link>
        </el-menu-item>
        <el-menu-item index="4" class="bcar">
          <router-link class="dao-link" to="/cart">
            <i class="el-icon-shopping-cart-full"></i>我的购物车
          </router-link>  
        </el-menu-item>
        <el-menu-item index="5" class="border"> 
         <router-link class="dao-link" to="/order">
            <i class="el-icon-sell"></i>我的订单 
          </router-link>
        </el-menu-item>
        <el-submenu index="6"> 
            <template slot="title">帮助中心</template>
            <el-menu-item index="5-1">帮助中心</el-menu-item>
        </el-submenu> 
      </el-menu>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
    name: "Search",
    props:{
      disabled:{
        type:Boolean,
        default:true
      }
},
data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
  },
    {
      keyword:''
    },
    {
      input:'',
      select:''
    }
},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    search(){
      this.$emit("search",['search',this.keyword])
    },
    onInput(e){
      this.$forceUpdate();
    }
  }
}
</script>


<style> 
.line{
  text-decoration: none;
}
.sy{  
  font-size: 20px;
  text-align: center; 
  display: inline-block;
}
.nav{
  position:relative;
  left:10px
}
.dao-link { 
  color: #999; 
  text-decoration: none; 
  outline: none; 
}
.log{ 
  float: left; 
  text-align: center; 
}
.regi{
  text-align: center;
  }
.bcar{
  width: 150px;
}
.border{
  width: 150px;
}
</style>