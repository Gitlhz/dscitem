<!-- 右边的 -->
<template>
  <div class="category-right-con">
    <div class="categoey-right">
      <div class="categoey-ab">
        <a href>
          <img
            src="https://x.dscmall.cn/storage/data/touch_catads/15630384831872.jpg"
            alt
          />
        </a>
      </div>
      <div
        class="category-content2"
        v-for="lists in categoryRightDatas"
        :key="lists.cat_id"
      >
        <h3>
          - <span>{{ lists.cat_name }}</span> -
        </h3>
        <ul>
          <li v-for="list in lists.child" :key="list.cat_id">
            <router-link :to="'/listDetail?cat_id=' + list.cat_id">
              <img :src="list.touch_icon" alt="" />
              <h4>
                <span>{{ list.cat_name }}</span>
              </h4>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
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
      categoryRightDatas: [],
    };
  },
  methods: {
    getCategoryRightDatas(cid) {
      // https://x.dscmall.cn/api/catalog/list
      // Axios.get(`/api/v1/category/categorylist/${cid}`).then((res) => {
      Axios.get(`/api/catalog/list/${cid}`).then((res) => {
        if (res.status == 200) {
          this.categoryRightDatas = res.data.data;

          var arr = this.$store.state.categoryDatas.filter((item) => {
            return item.cat_id == cid;
          });
          console.log(arr);
        }
      });
    },
  },
  watch: {
    $route(to) {
      let cid = to.params.cid;
      this.getCategoryRightDatas(cid);
      var arr = this.$store.state.categoryDatas.filter((item) => {
        return item.cat_id == cid;
      });
      console.log(arr);
    },
  },
  mounted() {
    this.getCategoryRightDatas("858");
  },
};
</script>
<style lang="less">
.category-right-con {
  width: 100%;
  height: 100%;
  .categoey-right {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    .categoey-ab {
      width: 100%;
      img {
        width: 90%;
        margin-left: 5%;
      }
    }
    .category-content2 {
      font-weight: normal;
      h3 {
        font-size: 1.4rem;
        text-align: center;
        height: 4.4rem;
        line-height: 4.4rem;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        li {
          width: 33%;
          height: 8.2rem;
          margin-bottom: 1rem;
          img {
            width: 5.2rem;
            height: 5.2rem;
          }
          h4 {
            color: #666;
            height: 3rem;
            line-height: 3rem;
          }
        }
      }
    }
  }
}
</style>