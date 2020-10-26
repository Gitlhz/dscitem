<!--  -->
<template>
  <div class="cart">
    <Head title="购物车" :left="left" :right="right" />
    <div class="cart-con" v-if="!noCart">
      <ul>
        <li v-for="(cart, index) in cartLists" :key="cart.goods_id">
          <!-- 选择框 -->
          <div class="select" @click="changeSelect(cart, index)">
            <i class="iconfont icon-danxuankuang" v-if="!cart.isSelect"></i>
            <i
              class="iconfont icon-danxuankuangxuanzhong"
              style="color: red"
              v-else
            ></i>
          </div>
          <!-- 图片 -->
          <div class="cart-img">
            <img :src="cart.goods_img" alt="" />
          </div>
          <!-- 右边内容部分 -->
          <div class="cart-info">
            <div class="cart-title">{{ cart.goods_name }}</div>
            <div class="cart-wrag">
              <span class="price">{{ cart.shop_price }}</span>
              <div class="cart-num">
                <a href="javascript:;" @click="pevCart(index)">-</a>
                <input
                  type="number"
                  value="1"
                  ref="val"
                  @change="changeValue(index)"
                  v-model="cart.value"
                />
                <a href="javascript:;" @click="addCart(index)">+</a>
                <button
                  class="dele iconfont icon-shanchu"
                  @click="delet(index)"
                ></button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="cart-no" v-else>
      <i class="iconfont icon-gouwuche1"></i>
      <h2>没有加入购物车物品，<router-link to="/home">去逛逛 </router-link></h2>
    </div>
    <div class="cartFooter">
      <div class="checkAll" @click="selectAllFn">
        <i class="iconfont icon-danxuankuang" v-if="!selectAll"></i>
        <i
          class="iconfont icon-danxuankuangxuanzhong"
          v-else
          style="color: red"
        ></i>
        <span>全选</span>
      </div>
      <div class="priceAll">
        合计：
        <span>{{ total }}</span>
      </div>
      <div class="gobuy">去结算({{ count }})</div>
    </div>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Footer from "@/components/Footer.vue";
import Head from "@/components/Head";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
    Head,
  },
  data() {
    //这里存放数据
    return {
      left: true,
      right: false,
    };
  },
  computed: {
    cartLists() {
      return this.$store.state.carts;
    },
    selectAll() {
      return this.$store.state.checkAll;
    },
    total() {
      let totalPrice = 0;

      this.$store.state.carts.map((item) => {
        if (item.isSelect) {
          totalPrice += item.value * item.shop_price;
        }
      });
      return totalPrice;
    },
    count() {
      let count = 0;
      this.$store.state.carts.map((item) => {
        if (item.isSelect) {
          count += item.value;
        }
      });
      return count;
    },
    noCart() {
      return this.$store.state.carts.length == 0;
    },
  },
  methods: {
    // ...mapMutations(["addCart", "pevCart", "delet"]),
    selectAllFn() {
      this.$store.commit("selectAllFn");
    },
    addCart(index) {
      // console.log(index);
      this.$store.commit("addCart", index);
    },
    pevCart(index) {
      this.$store.commit("pevCart", index);
    },
    delet(index) {
      this.$store.commit("delet", index);
    },
    changeValue(index) {
      console.log(this.$refs.val[index].value);
      console.log(index);
      let val = this.$refs.val[index].value;
      this.$store.commit("changeValue", { index, val });
    },
    changeSelect(cart, index) {
      cart.isSelect = !cart.isSelect;
      this.$store.commit("changeSelect", { cart, index });
    },
  },
};
</script>
<style lang="less">
.cart-no {
  margin-top: 5rem;

  text-align: center;
  i {
    font-size: 10rem;
    color: #999;
  }
  h2 {
    a {
      color: #ff5555;
    }
  }
}
.cart-con {
  margin: 4.4rem 0 4.9rem;
  width: 100%;
  li {
    display: flex;
    height: 10rem;
    border-bottom: 1px solid #efefef;
    .select {
      display: flex;
      flex-direction: column;
      width: 10%;
      justify-content: center;
      text-align: center;
    }
    .cart-img {
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      img {
        width: 100%;
      }
    }
    .cart-info {
      width: 65%;
      margin-left: 3%;
      margin-right: 2%;
      .cart-title {
        font-size: 1.4rem;
        height: 4rem;
        line-height: 2rem;
        margin-top: 1rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        margin-bottom: 1rem;
      }
      .price {
        color: red;
        font-size: 1.6rem;
        float: left;
        &::before {
          content: "￥";
        }
      }
      .cart-num {
        float: right;
        a {
          float: left;
          width: 2rem;
          height: 2rem;
          background: #cccccc;
          text-align: center;
          line-height: 2rem;
          font-size: 1.4rem;
        }
        input {
          width: 3rem;
          height: 2rem;
          float: left;
          border: 1px solid #efefef;
          box-sizing: border-box;
          text-align: center;
        }
        .dele {
          margin-left: 2rem;
          background: transparent;
          color: #999999;
          margin-top: 0.2rem;
        }
      }
    }
  }
}
.cartFooter {
  position: fixed;
  height: 4.4rem;
  bottom: 4.9rem;
  width: 100%;
  border-top: 1px solid #efefef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-right: 10px solid #fff;
  box-sizing: border-box;
  font-size: 1.4rem;
  .gobuy {
    width: 30%;
    height: 4.4rem;
    text-align: center;
    color: #fff;
    background: #ff5555;
    line-height: 4.4rem;
    font-size: 1.4rem;
  }
  .priceAll {
    span {
      color: red;
      font-size: 1.6rem;
    }
  }
}
</style>