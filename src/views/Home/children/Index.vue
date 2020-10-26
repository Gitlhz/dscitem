<!-- 首页的首页 -->
<template>
  <div class="home-index">
    <div class="bg1 bg"></div>
    <div class="bg2 bg"></div>
    <div class="swipe-wrap">
      <Swipe />
    </div>
    <QuickNav />
    <SwipeNews />
    <div class="imgs">
      <img
        src="https://x.dscmall.cn/storage/data/gallery_album/original_img/CPvH5WHHbF0EoG9XjRQbbT3knMVCeEt9DlYGQhJM.png?imageView2/2/format/webp"
        alt=""
      />
    </div>
    <miaosha />
    <SwipeList :SwipeListDatas="SwipeListDatas" />
    <SwipeList :SwipeListDatas="SwipeListDatas" />
    <div style="height: 10rem"></div>
    <HomeCon />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Swipe from "@/components/Swipe.vue";
import QuickNav from "../components/QuickNav.vue";
import SwipeNews from "../components/SwipeNews.vue";
import SwipeList from "../components/SwipeList.vue";
import miaosha from "../components/miaosha.vue";
import HomeCon from "../components/HomeCon.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Swipe,
    QuickNav,
    SwipeNews,
    SwipeList,
    miaosha,
    HomeCon,
  },
  data() {
    //这里存放数据
    return {
      // Index.vue是SwipeList.vue的父组件，我们可以通过父传子将数据传递给子组件
      SwipeListDatas: [
        {
          id: 1,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489105638483.jpg?imageView2/2/format/webp",
          title: "洗衣机数据1",
        },
        {
          id: 2,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489105638483.jpg?imageView2/2/format/webp",
          title: "洗衣机数据2",
        },
        {
          id: 3,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489105638483.jpg?imageView2/2/format/webp",
          title: "洗衣机数据3",
        },
        {
          id: 4,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489105638483.jpg?imageView2/2/format/webp",
          title: "洗衣机数据4",
        },
        {
          id: 5,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489105638483.jpg?imageView2/2/format/webp",
          title: "洗衣机数据5",
        },
        {
          id: 6,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489105638483.jpg?imageView2/2/format/webp",
          title: "洗衣机数据6",
        },
        {
          id: 7,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489105638483.jpg?imageView2/2/format/webp",
          title: "洗衣机数据7",
        },
        {
          id: 8,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489105638483.jpg?imageView2/2/format/webp",
          title: "洗衣机数据8",
        },
        {
          id: 9,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489105638483.jpg?imageView2/2/format/webp",
          title: "洗衣机数据9",
        },
        {
          id: 10,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489105638483.jpg?imageView2/2/format/webp",
          title: "洗衣机数据10",
        },
      ],
    };
  },
  mounted() {},
};
</script>
<style lang="less">
.home-index {
  .bg {
    width: 100%;
    height: 2rem;
    background: red;
    position: absolute;
    left: 0;
    z-index: 1;
  }
  .bg1 {
    top: 8.8rem;
  }
  .bg2 {
    top: 9.8rem;
    border-radius: 30px;
  }
  .swipe-wrap {
    margin: 0 10px;
    position: relative;
    z-index: 2;
    div {
      border-radius: 10px;
    }
  }
}
.imgs {
  width: 94%;
  height: 20rem;
  margin-left: 3%;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>