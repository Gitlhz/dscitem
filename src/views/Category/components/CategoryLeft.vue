<!-- 左边 -->
<template>
  <div class="category-left-con">
    <div class="category-left">
      <ul class="category-nav">
        <li v-for="list in this.$store.state.categoryDatas" :key="list.cat_id">
          <router-link :to="'/category/' + list.cat_id">{{
            list.cat_name
          }}</router-link>
        </li>
      </ul>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Axios from "axios";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      is_active: 0,
      flag: true,
    };
  },
  methods: {
    getCategoryDatas() {
      //https://x.dscmall.cn/api/catalog/list
      Axios.get("/api/catalog/list").then((res) => {
        console.log(res.data);
        if (res.data.status == "success") {
          this.$store.dispatch("actgetCategoryDatas", res.data.data);
        }
      });
    },
    changTab(index) {
      this.is_active = index;
    },
  },
  // watch: {},
  mounted() {
    this.getCategoryDatas();
  },
};
</script>
<style lang="less">
.category-left-con {
  height: 100%;
  .category-left {
    height: 100%;
    width: 8.4rem;
    background: #efefef;
    overflow-y: scroll;
    ul {
      li {
        height: 3.8rem;
        font-size: 1.4rem;
        line-height: 3.8rem;
        text-align: center;
      }
      .router-link-exact-active {
        display: block;
        background: #ffffff;
        color: red;
      }
    }
  }
}
</style>