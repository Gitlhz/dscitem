<!-- 上半部分列表部分 -->
<template>
  <div class="top-list">
    <div class="top-list-top">
      <img
        src="https://x.dscmall.cn/storage/data/gallery_album/original_img/mq7rYptqRIC6iWYkBUfWzdHGrusH4W1sCAQbHLHj.jpeg?imageView2/2/format/webp"
        alt=""
      />
      <div class="top-list-bot">
        <ul>
          <li v-for="item in dataList" :key="item.goods_id">
            <img :src="item.goods_thumb" alt="" />
            <div>{{ item.title }}</div>
            <p><span>￥</span>{{ item.market_price }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="mid-list-top">
      <img
        src="https://x.dscmall.cn/storage/data/gallery_album/original_img/CzzkibenhBz3Jcc8clYHc9imT29vc6InLFdKuN0U.jpeg?imageView2/2/format/webp"
        alt=""
      />
    </div>
  </div>
</template>


<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import axios from "axios";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      dataList: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  mounted() {
    //https://x.dscmall.cn/api/visual/checked
    axios
      .post("/api/visual/checked", {
        number: 6,
        goods_id: [1164, 1159, 1162, 1166, 1167, 1168],
      })
      .then((result) => {
        // console.log(result);
        this.dataList = result.data.data;
        console.log(this.dataList);
      });
  },
};
</script>
<style lang="less">
.top-list {
  width: 100%;
  height: 44rem;
  .top-list-top {
    width: 96%;
    margin: 0 2%;
    border: 1px solid #ccb7a1;
    border-radius: 1%;
    background: #ccb7a1;
    img {
      width: 100%;
    }
  }
  ul {
    margin: -6rem 1% 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      margin: 0 0.5% 2rem;
      width: 31.5%;
      height: 19rem;
      background: #fff;
      border: 1px solid #ffffff;
      border-radius: 3%;
      div {
        width: 80%;
        margin: 2% 10%;
        height: 4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 1.4rem;
      }
      p {
        width: 80%;
        margin: 2% 10%;
        font-size: 1.4rem;
        color: rgb(242, 12, 40);
      }
    }
  }
  .mid-list-top {
    width: 100%;
    img {
      width: 100%;
    }
  }
}
</style>