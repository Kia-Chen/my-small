// 首页数据
<template>
  <div>
    <Hsearch></Hsearch>
    <div class="container"> 
      <div class="swiper-bg" :style="{backgroundColor: slidesColor[index]}"></div>
      <div class="stage">
        <ul class="category-nav">
          <li v-for="(item, index) in navbars" :key="index" class="cate-nav-item">
            <i class="cate-nav-icon" :class="item.icon"></i>&nbsp;&nbsp;{{ item.text }}
            <div class="pane">
              <br/>
              &nbsp;&nbsp;客厅家具<i class="el-icon-caret-right"></i>沙发&nbsp;|&nbsp;茶几&nbsp;|&nbsp;电视柜
              &nbsp;|&nbsp;鞋柜&nbsp;|&nbsp;衣帽架<br/><br/>
              &nbsp;&nbsp;客厅家具<i class="el-icon-caret-right"></i>沙发&nbsp;|&nbsp;茶几&nbsp;|&nbsp;电视柜
              &nbsp;|&nbsp;鞋柜<br/><br/>
              &nbsp;&nbsp;客厅家具<i class="el-icon-caret-right"></i>沙发&nbsp;|&nbsp;茶几&nbsp;|&nbsp;电视柜
              &nbsp;|&nbsp;鞋柜&nbsp;|&nbsp;衣帽架<br/><br/>
              &nbsp;&nbsp;客厅家具<i class="el-icon-caret-right"></i>沙发&nbsp;|&nbsp;茶几&nbsp;|&nbsp;电视柜
              &nbsp;|&nbsp;鞋柜
            </div>
          </li>
        </ul>
        <!-- 轮播图 -->
        <div class="swiper">
          <Swiper :slides="slidesImage" v-model="index"></Swiper>
        </div>
      </div>

      <!-- 促销活动部分 -->
      <div class="rec-banner1">
        <div>
          <h1 class="banner-title">促销活动 | 每期活动 优惠不停</h1>
        </div>
        <hr class="hx"/><br/>

        <div class="procuct">

          <div class="coll">
            <img src="../../static/images/sony1.jpg" width="240px" height="240px"/>
            <p class="rec-params">
              原价: <span class="rec-price">￥6999.00</span>&nbsp;
              促销价: <span class="rec-online-price">￥6599.00</span>
            </p>
            <p>索尼（SONY）KD-65X9000H 65英寸 4K超高清</p>
          </div>

          <div class="coll">
            <img src="../../static/images/fridge.jpg" width="240px" height="240px"/>
            <p class="rec-params">
              原价: <span class="rec-price">￥999.00</span>&nbsp;
              促销价: <span class="rec-online-price">￥799.00</span>
            </p>
            <p>上菱(shangling) BCD-173K 173L 双门冰箱家用节能环保</p>
          </div>

          <div class="coll">
            <img src="../../static/images/wash.jpg" width="240px" height="240px"/>
            <p class="rec-params">
              原价: <span class="rec-price">￥6999.00</span>&nbsp;
              促销价: <span class="rec-online-price">￥199.00</span>
            </p>
            <p>小鸭 WPS3001T 3公斤仿生手洗 一键洗涤 黑</p>
          </div>

          <div class="coll">
            <img src="../../static/images/washion.jpg" width="240px" height="240px"/>
            <p class="rec-params">
              原价: <span class="rec-price">￥6999.00</span>&nbsp;
              促销价: <span class="rec-online-price">￥1399.00</span>
            </p>
            <p>小鸭 WGC8CP 96度高温煮烫洗 快速洗涤 8公斤 白</p>
          </div>
          
        </div>
      </div>
      

      <!-- 热卖商品部分 -->
      <div class="rec-banner">
        <h1 class="banner-title">热卖商品 |</h1>
        <hr class="hx"/><br/>
        <ul class="rec-list">
          <li class="rec-card" v-for="(item, index) in goods"
              :key="index" @click="togglePage(item)">
            <img class="rec-media" :src="item.cover"/>
            <div class="rec-profile">
              <p class="rec-params">
                <span class="rec-online-price2">￥{{ item.onlinePrice }}</span>
              </p>
              <h4>{{ item.text }}</h4>
            </div>
          </li>
        </ul>
        <br/> <br/>
        <ul class="rec-list">
          <li class="rec-card" v-for="(item, index) in goods"
              :key="index" @click="togglePage(item)">
            <img class="rec-media" :src="item.cover"/>
            <div class="rec-profile">
              <p class="rec-params">
                <span class="rec-online-price2">￥{{ item.onlinePrice }}</span>
              </p>
              <h4>{{ item.text }}</h4>
            </div>
          </li>
        </ul>
      </div>
   
    </div> 
  </div>
</template>

<script>
  import Hsearch from './hsearch'
  import Swiper from '@/widgets/Swiper'
  import config from '@/config/config'
  export default {
    name: 'Index',
    components: { 
      Hsearch,
      Swiper
    },
    data () {
      return {
        index: 0
      }
    },
    computed: {
      navbars () {
        return config.navbars
      },
      goods () {
        return config.goods
      },
      slidesColor () {
        return config.goods.map(item => item.color)
      },
      slidesImage () {
        return config.goods.map(item => item.poster)
      }
    },
    methods: {
      togglePage (item) {
        this.$router.push({ path: 'goods', query: { name: item.name } })
      }
    }
  }
</script>

<style scoped>

.rec-banner1 {
  margin: 20px auto;
  padding-top: 8px;
  padding-bottom:350px;
  width: 1120px;
  background-color: #fff;
  }
.coll {
  float: left;
  margin-left:17px;
  width: 20%;
  border: 10px solid #fff;
}

.container {
  position: relative;
  background-color: #f5f5f5;
  border-bottom: 1px solid transparent;
}
.swiper-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 500px;
  background-color: #ffffff;
}

.stage {
  margin: 0; padding: 0; width: 1120px;
  margin-left: auto;  margin-right: auto;
  background-color: rgb(235, 235, 235);
}
.stage ul li .pane {
  background-color: rgba(255, 255, 255, 0.897);
  display: none; position: absolute;
  top: 0;  left: 200px; width: 400px; height: 480px;
  font-size: 17px;
}
.stage ul li:hover {
  background-color:rgba(255, 255, 255, 0.753);
}
.stage ul li:hover .pane {
  display: block;
}

.category-nav {
  display: inline-block;
  position: absolute;
  width: 200px;
  height: 500px;
  z-index: 2;
  list-style: none;
  background-color: rgba(0, 0, 0, 0.55);
}
.cate-nav-item {
  padding-left: 12px;
  line-height: 35.7143px;
  color: #fff;
  cursor: pointer;
}
.cate-nav-item:hover {
  color: #787878;
  background-color: rgba(255, 255, 255, .8);
}
.cate-nav-icon {
  opacity: .5;
}
.swiper {
  height: 500px;
  background-color: #e8e8e8;
}
.rec-banner {
  margin: -20px auto;
  padding-top: 8px;
  padding-bottom: 50px;
  width: 1120px;
  background-color: #fff;
}
.hx{
  width: 97%;
  size: 10px;
  margin-left: 15px;
}
.banner-title {
  padding: 8px 15px;
  
}
.rec-list {
  list-style: none;
}
.rec-card {
  display: inline-block;
  width: 25%;
  text-align: center;
  vertical-align: top;
  cursor: pointer;
}
.rec-media {
  width: 240px;
}
.rec-profile {
  width: 200px;
  display: inline-block;
  color: #444;
}
  .rec-price {
  text-decoration: line-through;
}
.rec-online-price {
  color: #ff0036;
  font-size: 19px;
}
.rec-online-price2 {
  color: #ff0036;
  font-size: 22px;
  margin-left: -170px;
}
.rec-params {
  font-size: 12px;
  color: #888;
}
</style>
