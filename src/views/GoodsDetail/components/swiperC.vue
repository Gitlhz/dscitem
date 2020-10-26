<!-- 中间内容部分 -->
<template>
  <div class="good-c">
    <div class="good-con">
      <div class="detail-price">{{ goodsdetail.cost_price }}</div>
      <div class="detail-title">{{ goodsdetail.goods_name }}</div>
      <div class="imgs" v-html="goodsdetail.goods_desc"></div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //方法集合
  methods: {},
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  computed: {
    goodsdetail() {
      return this.$store.state.GoodsDetails;
    },
  },
  mounted() {
    this.$store.dispatch("getGoodsDetails", {
      goods_id: this.$route.query.goods_id,
    });
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.good-con {
  width: 100%;
  overflow: hidden;
  border: 10px solid #ffffff;
  width: calc(100% - 20px);
  .detail-price {
    color: #ff0000;
    font-size: 1.8rem;
    font-weight: 600;
    &::before {
      font-size: 1.2rem;
      content: "￥";
    }
  }
  .detail-title {
    font-size: 1.4rem;
    line-height: 2rem;
    color: #333;
    margin: 2px 0px;
  }
  .imgs {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>