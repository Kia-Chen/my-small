<template>
    <div>
        <div class="dao-logo">Shop-Mall</div>
        <!-- 搜索框 -->
        <div class="header-search">
          <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
          <!-- 搜索框下文字 -->
          <div >
            <table class="t-search">
              <tr>
                <td>海尔空调</td>  <td>美的冰箱</td>    <td>管家服务专场</td>
                <td>洗衣机</td>    <td>55英寸彩电</td>  <td>厨房卫浴</td>
              </tr>
            </table>
          </div>
        </div>
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

<style scoped>
.header-search{
  width:750px;
  padding-left:39% ;
  margin:12px 0px;
}
.input-with-select { 
  width: 700px;
  height: 40px;
}
.t-search{
  width:690px;
  text-align:center;
}
.dao-logo {
    float: left;
    margin-left:17% ;
    margin-top: 8px;
    font-size:30px;
    width: 150px;
}
</style>