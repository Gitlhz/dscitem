<!--  -->
<template>
  <div class="detail-f">
    <!-- 底部 -->
    <div class="detail-footer">
      <div class="kefu">
        <i class="iconfont icon-kefu"></i>
        <span>客服</span>
      </div>
      <div class="shou">
        <i class="iconfont icon-shoucang"></i>
        <span>收藏</span>
      </div>
      <div class="cart">
        <router-link to="/cart">
          <i class="iconfont icon-gouwuche"></i>
          <div :class="{ addNum: flag }" v-show="flag">+1</div>
          <em>{{ count }}</em>
          <span>购物车</span>
        </router-link>
      </div>
      <div class="join" @click="addCartFn(goodsdetail)">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
// import { log } from "console";
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      flag: false,
      timer: "",
    };
  },
  //监听属性 类似于data概念
  computed: {
    goodsdetail() {
      return this.$store.state.GoodsDetails;
    },

    count() {
      let count = 0;
      this.$store.state.carts.map((item) => {
        count += item.value;
      });
      return count;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //添加购物车方法
    addCartFn(data) {
      console.log(data);
      this.flag = true;
      this.timer = setTimeout(() => {
        this.flag = false;
      }, 1000);
      //处理数据
      console.log(this.$store.state.carts);
      let isCart = this.$store.state.carts.find((item) => {
        if (item.goods_id == data.goods_id) {
          item.value++;
        }
        return item.goods_id == data.goods_id;
      });
      if (!isCart) {
        var cartData = {
          goods_id: data.goods_id,
          goods_name: data.goods_name,
          shop_price: data.shop_price,
          goods_img: data.goods_img,
          value: 1,
          isSelect: false,
        };
      }
      this.$store.commit("setCartDatas", cartData);
    },
  },
  mounted() {
    this.$store.dispatch("getGoodsDetails", {
      goods_id: this.$route.query.goods_id,
    });
  },
};
</script>
<style lang="less">
.detail-footer {
  width: 100%;
  height: 4.9rem;
  border-top: 1px solid #cccccc;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: flex;
  > div {
    font-size: 1.2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #666;
    i {
      font-size: 2rem;
    }
  }
  .join {
    background-color: #ff5555;
    flex: 2;
    color: #ffffff;
    font-size: 1.4rem;
  }
  .buy {
    background-color: #ff976a;
    flex: 2;
    color: #ffffff;
    font-size: 1.4rem;
  }
  .cart {
    position: relative;
    a {
      display: block;
      display: flex;
      flex-direction: column;
      text-align: center;
    }
    em {
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
      width: 1.4rem;
      height: 1.4rem;
      min-width: 1.4rem;
      border-radius: 0.7rem;
      background: red;
      color: #ffffff;
      text-align: center;
      line-height: 1.4rem;
      font-style: normal;
      padding: 0.2rem;
    }
    .addNum {
      color: #f00;
      position: absolute;
      font-size: 2rem;
      top: 1rem;
      font-weight: 600;
      animation: moveup 1s ease;
    }
    @keyframes moveup {
      0% {
        top: 0.5rem;
        opacity: 0;
      }
      50% {
        top: -1.5rem;
        opacity: 1;
      }
      100% {
        top: -1.5rem;
        opacity: 0;
      }
    }
  }
  .shou {
    border-left: 1px solid #cccccc;
    border-right: 1px solid #cccccc;
  }
}
</style>