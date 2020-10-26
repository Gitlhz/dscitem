<!-- 商品详情页 -->
<template>
  <div class="good-goods">
    <Head title="商品详情" :left="left" :right="right" />
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img :src="goodsdetail.original_img" alt="" />
        </div>
        <div class="swiper-slide">
          <img :src="goodsdetail.original_img" alt="" />
        </div>
        <div class="swiper-slide">
          <img :src="goodsdetail.original_img" alt="" />
        </div>
        <div class="swiper-slide">
          <img :src="goodsdetail.original_img" alt="" />
        </div>
        <div class="swiper-slide">
          <img :src="goodsdetail.original_img" alt="" />
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <swiperc />
    <swiperf />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import swiperf from "./components/swiperD";
import swiperc from "./components/swiperC";
import Head from "@/components/Head";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    swiperf,
    swiperc,
    Head,
  },
  data() {
    //这里存放数据
    return {
      left: true,
      right: false,
    };
  },
  //监听属性 类似于data概念
  computed: {
    goodsdetail() {
      return this.$store.state.GoodsDetails;
    },
  },
  mounted() {
    this.$store.dispatch("getGoodsDetails", {
      goods_id: this.$route.query.goods_id,
    });
    new Swiper(".swiper-container", {
      autoplay: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
};
</script>
<style lang="less">
.swiper-container {
  width: 100%;
  height: 37.5rem;
  img {
    width: 100%;
    height: 37.5rem;
  }
}
</style>