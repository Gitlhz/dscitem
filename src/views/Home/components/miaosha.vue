<!-- 秒杀组件 -->
<template>
  <div class="miaosha">
    <p>
      <img
        src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978468241.png?imageView2/2/format/webp"
        alt=""
      />
    </p>
    <span>{{ dd }}天</span>
    <span>{{ hh }}时</span>
    <span>{{ mm }}分</span>
    <span>{{ ss }}秒</span>
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
    return {
      dd: "00",
      hh: "00",
      mm: "00",
      ss: "00",
      timer: "",
    };
  },
  methods: {
    timeFn() {
      var date = new Date();
      var nowTime = date.getTime();
      var endDate = new Date("2020-12-10 14:00:00");
      var endTime = endDate.getTime();
      //时间差
      var timeT = endTime - nowTime;
      if (timeT > 0) {
        //天
        this.dd = Math.floor(timeT / 1000 / 60 / 60 / 24);
        //时
        this.hh = Math.floor((timeT / 1000 / 60 / 60) % 24);
        //分
        this.ss = Math.floor((timeT / 1000 / 60) % 60);
        //秒
        this.mm = Math.floor((timeT / 1000) % 60);
      }
    },
  },
  mounted() {
    // 开启定时器;
    this.timer = setInterval(this.timeFn, 1000);
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>
<style lang="less">
.miaosha {
  float: right;
  p {
    float: left;
    width: 50%;
    height: 2rem;
    img {
      width: 50%;
      height: 100%;
      margin-top: 0.5rem;
    }
  }
  span {
    float: left;
    width: 3.5rem;
    height: 2.5rem;
    background-color: #f20d23;
    margin: 0.3rem;
    line-height: 2.5rem;
    text-align: center;
    color: #fff;
    border-radius: 40%;
  }
}
</style>