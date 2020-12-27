// 商品详情页面
<template>
  <div>
    <Hsearch></Hsearch>
    <div class="container">
      <!-- 左边图片部分 -->
      <div class="left">
        <div class="actor">
          <img :src="actorC">
          <div ref="animPart" class="anim-part"
            :class="{'anim-cart': isCart, 'anim-order': isOrder}">
            <img :src="actorC">
          </div>
        </div>
        <ul class="thumbnail-list">
          <li class="thumbnail-item" v-for="(thumbnail, index) in thumbnails"
            :key="index" @mouseover="toggleActor(index)">
            <img class="thumbnail" :src="thumbnail">
          </li>
        </ul>
      </div>

      <!-- 右边部分 -->
      <div class="right">
        <h2>{{ item.text }}</h2>
        <div class="banner-price">
          <p class="params-item">
            <span class="params-label">价格</span>
            <span class="price-old">￥{{ item.price }}</span>
          </p>
          <p>
            <span class="params-label">活动价</span>
            <span class="price-new">￥{{ item.onlinePrice }}</span>
          </p>
        </div>

        <div class="banner-params">
          <p class="params-item"><span class="params-label">发货地</span>{{ item.address }}</p>
          <p class="params-item"><span class="params-label">快递方式</span>{{ item.type }}</p>
        </div>

        <div class="banner-quantity">
          <el-row>颜色 : 
              <el-button round>黑色</el-button>
              <el-button round>白色</el-button>
              <el-button round>银灰色</el-button>
            </el-row> 
          <br/>
          数量 ： 
            <el-input-number class="eli" v-model="quantity" @change="handleChange" 
              :min="1" :max="10" >
            </el-input-number>
        </div>

        <div class="banner-operate">
          <span class="btn-operate btn-cart" @click="addInCart">
            <i class="fa fa-shopping-cart"></i>
            &nbsp;加入购物车
          </span>
        </div>
        <br/>
        <div class="banner-state">
          <p class="params-item">
            <span class="params-label">服务承诺</span>
            <span class="params-label deep-gray">正品保证</span>
            <span class="params-label deep-gray">极速退款</span>
            <span class="params-label deep-gray">赠运费险</span>
            <span class="params-label deep-gray">七天无理由退换</span>
          </p>
        </div>
      </div>
    </div>

    <div class="bottom">

      <el-tabs type="border-card"  v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="宝贝详情" name="first">
          <img :src="item.delpic1"/>
          <img :src="item.delpic2"/>
        </el-tab-pane>
        <el-tab-pane label="商品评价" name="second">暂无</el-tab-pane>
        <el-tab-pane label="售后保障" name="third">
           <img :src="item.delpic3"/>
        </el-tab-pane>
      </el-tabs>

    </div>


  </div>
</template>

<script>
  import Hsearch from './hsearch'
  import config from '@/config/config'
  export default {
    components: { 
      Hsearch
    },
    name: 'Goods',
    data () {
      return {
        actorIndex: 0,
        quantity: 1,
        isCart: false, // 生成动态类名
        isOrder: false, // 生成动态类名
        cart: [],
        order: [],
        activeName:'first'
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.getStore()
        // 监听器作用：当分身动画结束后，去除动画类名
        this.$refs.animPart.addEventListener('animationend', () => {
          this.isCart = false
          this.isOrder = false
        })
      })
    },
    computed: {
      item () {
        return config.goods.find(item => item.name === this.$route.query.name)
      },
      thumbnails () {
        return this.item.thumbnails
      },
      actorC () {
        return this.item.images[this.actorIndex]
      },
      result () {
        return {
          cover: this.item.cover,
          text: this.item.text,
          type: this.item.type,
          price: this.item.onlinePrice,
          quantity: this.quantity
        }
      }
    },
    methods: {
      getStore () {
        let gsStore = window.localStorage.getItem('gsStore')
        if (gsStore) {
          gsStore = JSON.parse(gsStore)
          this.cart = gsStore.cart || []
          this.order = gsStore.order || []
        }
      },
      setStore () {
        let gsStore = {
          cart: this.cart,
          order: this.order
        }
        window.localStorage.setItem('gsStore', JSON.stringify(gsStore))
      },
      toggleActor (index) {
        this.actorIndex = index
      },
      handleChange(value) {
        console.log(value);
      },
      addInCart () {
        this.isCart = true
        this.cart.push(this.result)
        this.setStore()
      },
      addInOrder () {
        this.isOrder = true
        this.order.push(this.result)
        this.setStore()
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scoped>
  .container {
    width: 1120px;
    margin-left: auto;
    margin-right: auto;
    height: 500px;
    
  }


  .left {
    padding-top: 50px;
    width: 50%;
    float: left;
  }
  .actor {
    position: relative;
    text-align: center;
  }
  .thumbnail-list {
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
    width: 430px;
    list-style: none;
  }
  .thumbnail-item {
    display: inline-block;
    width: 20%;
    cursor: pointer;
  }
  .thumbnail {
    border: 1px solid transparent;
    box-sizing: border-box;
  }
  .thumbnail:hover {
    border-color: rgba(0, 0, 0, .2);
  }



  .right {
    padding-top: 50px;
    overflow: hidden;
  }
  .banner-price,
  .banner-params,
  .banner-quantity,
  .banner-operate,
  .banner-state {
    padding: 5px 12px;
    margin-top: 18px;
  }
  .banner-price {
    margin-right: 80px;
    color: #333;
    background-color: #e9e9e9;
  }
  .price-old {
    text-decoration: line-through;
  }
  .price-new {
    font-weight: 600;
    font-size: 24px;
    color: #ff0036;
  }
  .params-item {
    line-height: 24px;
  }
  .params-label {
    display: inline-block;
    min-width: 75px;
    color: #999;
    font-size: 12px;
  }
  .ipt-quantity {
    width: 120px;
    padding-left: 10px;
    line-height: 32px;
    outline: none;
    border: 1px solid #ccc;
  }

  .btn-operate {
    width: 200px;
    display: inline-block;
    cursor: pointer;
    line-height: 36px;
    text-align: center;
    border: 1px solid #ac2626;
    user-select: none;
  }
  .btn-cart {
    color: #fff;
    background-color: #ac2626;
  }
 
  .deep-gray {
    color: #777;
  }
  .anim-part {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
  }
  .anim-cart {
    animation-duration: 500ms;
    animation-name: addInCart;
    animation-timing-function: ease-in-out;
  }
  .anim-order {
    animation-duration: 500ms;
    animation-name: addInOrder;
    animation-timing-function: ease-in-out;
  }
/* 飞入购物车动画 */
  @keyframes addInCart {
    0% {
      transform: scale(1);
    }
    100% {
      transform: translateX(-240px) translateY(-400px) scale(0.01);
    }
  }
   .bottom {
    position:relative;
    margin-top: 7%;
    width: 1020px;
    height: 2800px;
    margin-left: auto;
    margin-right: auto;
  }

</style>
