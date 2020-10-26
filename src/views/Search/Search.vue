<!--  -->
<template>
  <div class="search">
    <!-- 头部 -->
    <div class="search-wrap">
      <div class="search-header">
        <header>
          <a
            href="javascript:;"
            class="iconfont icon-jiantou3"
            onClick="window.history.back()"
          ></a>
          <form action>
            <input type="search" placeholder="搜索" v-model="keywords" />
            <i class="iconfont icon-sousuo2"></i>
          </form>
          <a
            href="javascript:;"
            style="font-size: 1.4rem"
            @click="searchKeywords"
            >搜索</a
          >
        </header>
      </div>
      <!-- 最近搜索 -->
      <div class="search-wrap2">
        <div class="search-wrap-title">
          <div class="search-title">最近搜索</div>
          <div class="iconfont icon-shanchu"></div>
        </div>
        <ul class="search-list">
          <li v-for="(item, index) in getTitle" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
      <!-- 热搜 -->
      <div class="search-wrap2">
        <div class="search-wrap-title">
          <div class="search-title">热搜</div>
        </div>
        <ul class="search-list">
          <li>手机</li>
          <li>手机</li>
          <li>手机</li>
          <li>手机</li>
          <li>手机</li>
        </ul>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Footer from "@/components/Footer.vue";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
  },
  data() {
    //这里存放数据
    return {
      keywords: "",
    };
  },
  //监听属性 类似于data概念
  computed: {
    locaData() {
      return this.$store.state.searchList;
    },
    getTitle() {
      return this.$store.state.historyTitle;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    searchKeywords() {
      if ((this.l = this.keywords)) {
        this.$router.push("/Searchlist?keywords=" + this.keywords);
      } else {
        alert("请输入搜索内容");
      }
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
};
</script>
<style lang="less">
header {
  display: flex;
  form {
    width: 70%;
    position: relative;
    input {
      height: 3rem;
      border: 1px solid #eeffee;
      width: 100%;
      border-radius: 15px;
      margin-top: 0.7rem;
      text-indent: 10px;
    }
    i {
      position: absolute;
      right: 0;
      width: 4.4rem;
      height: 4.4rem;
      line-height: 4.4rem;
      text-align: center;
      color: #cccccc;
    }
  }
  a {
    display: block;
    width: 15%;
    height: 4.4rem;
    line-height: 4.4rem;
    text-align: center;
  }
}
.search-wrap2 {
  margin-top: 1.5rem;
  line-height: 3rem;
  .search-wrap-title {
    display: flex;
    justify-content: space-between;
    margin-right: 2rem;
  }
  .search-title {
    display: flex;
    height: 4.4rem;
    justify-content: space-between;
    margin: 0 1rem;
    font-size: 1.4rem;
  }
  .search-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    li {
      width: 20%;
      height: 3rem;
      line-height: 3rem;
      text-align: center;
      border: 1px solid #efefef;
      margin: 1% 2.5%;
      box-sizing: border-box;
    }
  }
}
</style>