<!-- 首页的头部 -->
<template>
  <div class="home-header">
    <header class="header">
      <form>
        <input type="text" placeholder="输入关键字" />
        <i class="iconfont icon-sousuo"></i>
      </form>
      <a href>登录</a>
    </header>
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
};
</script>
<style lang="less" scoped>
// scoped 样式只在当前页面有效
.home-header {
  width: 100%;
  height: 4.4rem;
  background: red;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 15;
  .header {
    display: flex;
    form {
      width: 85%;
      position: relative;
      margin-left: 0.5rem;
      input {
        width: 100%;
        height: 3rem;
        border: 1px solid #cccc;
        border-radius: 1.5rem;
        margin-top: 0.7rem;
        box-sizing: border-box;
        font-size: 1.2rem;
        text-indent: 1.5rem;
      }
      i {
        position: absolute;
        top: 0;
        right: 1rem;
        width: 4.4rem;
        height: 4.4rem;
        text-align: center;
        line-height: 4.4rem;
      }
    }
    a {
      display: block;
      width: 15%;
      font-size: 1.6rem;
      color: #ffffff;
      line-height: 4.4rem;
      text-align: center;
    }
  }
}
</style>