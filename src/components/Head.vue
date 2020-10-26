<!-- 头部公用组件 -->
<template>
  <div class="head">
    <div
      class="back iconfont icon-jiantou3"
      v-if="left"
      onclick="window.history.back()"
    ></div>
    <div class="title">{{ title }}</div>
    <div class="right-icon" v-if="right"></div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  components: {},
  data() {
    return {};
  },
  props: {
    title: String,
    left: Boolean,
    right: Boolean,
  },
  computed: {},
};
</script>
<style lang="less">
.head {
  width: 100%;
  height: 4.4rem;
  border-bottom: 1px solid #efefef;
  background: #ffffff;
  text-align: center;
  display: flex;
  justify-content: space-between;
  line-height: 4.4rem;
  font-size: 1.4rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  .back {
    width: 10%;
    text-align: center;
    position: relative;
    z-index: 10;
  }
  .right-icon {
    width: 10%;
    text-align: center;
  }
  .title {
    width: 100%;
    left: 0;
    position: relative;
    z-index: 9;
  }
}
</style>