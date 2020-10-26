<!-- 搜索 -->
<template>
  <div class="search-list">
    <Head title="搜索列表" :left="left" :right="right" />
    <SearchList :lists="searchLists" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Head from "@/components/Head.vue";
import SearchList from "@/components/List.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    SearchList,
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
    searchLists() {
      return this.$store.state.searchList;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  mounted() {
    this.$store.dispatch("searchKeywords", {
      keywords: this.$route.query.keywords,
    });
  },
};
</script>
<style>
</style>