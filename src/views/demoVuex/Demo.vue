<!-- demo  Vuex状态管理 -->
<template>
  <div class="demo">
    <h2>vuex状态管理</h2>
    <h2>{{ this.$store.state.num }}</h2>
    <!-- <h2>{{ this.$store.state.num }}</h2> -->
    <button @click="addNum">修改num</button><br />
    <button @click="addNumX(100)">修改num加x</button>
    <button @click="actAddNum()">修改num加x</button>
    <button @click="actAddNumX(1000)">修改num加x</button>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import store from "@/vuex/store.js";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  // store,
  data() {
    //这里存放数据
    return {};
  },
  methods: {
    addNum() {
      this.$store.commit("addNum");
    },
    addNumX(X) {
      this.$store.commit("addNumX", X);
    },
    actAddNum() {
      this.$store.dispatch("actAddNum");
    },
    actAddNumX(data) {
      this.$store.dispatch("actAddNumX", data);
    },
  },
  mounted() {
    console.log(this.$store.state.num);
  },
};
</script>
<style>
</style>