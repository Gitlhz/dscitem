<!-- 登录页面 -->
<template>
  <div class="login-login">
    <div class="login-inner">
      <div class="logo">
        <img src="../../assets/logo.png" alt="" />
      </div>
      <div class="login-con">
        <a href="javascript:;" :class="{ active: loginFlag }" @click="changeTab"
          >短信登陆</a
        >
        <a
          href="javascript:;"
          :class="{ active: !loginFlag }"
          @click="changeTab"
          >账号登录</a
        >
      </div>
      <div class="login-content">
        <!-- 短信登录 -->
        <div v-if="loginFlag">
          <section>
            <input
              type="tel"
              placeholder="请输入手机号"
              maxlength="11"
              v-model="phone"
            />
            <button v-if="!num" class="getcode" @click="getcodeFn">
              获取验证码
            </button>
            <button disabled v-else class="getcode">已发送{{ num }}s</button>
          </section>
          <section>
            <input type="text" maxlength="11" placeholder="请输入验证码" />
          </section>
        </div>
        <!-- 账号密码登录 -->
        <div v-else>
          <section>
            <input
              type="tel"
              placeholder="请输入手机号/账号"
              v-model="user_name"
            />
          </section>
          <section>
            <input
              type="password"
              v-if="hidePass"
              v-model="pass"
              placeholder="密码"
            />
            <input type="text" v-else v-model="pass" placeholder="密码" />
            <button
              v-if="hidePass"
              class="getcode iconfont icon-yicang"
              @click="showHidePass"
            ></button>
            <button
              v-else
              class="getcode iconfont icon-xianshi"
              @click="showHidePass"
            ></button>
          </section>
          <section>
            <input
              type="tel"
              placeholder="验证码"
              v-model="captcha"
              maxlength="11"
            />
            <img
              ref="captcha"
              src="http://114.215.173.225:3000/api/v1/users/captcha"
              alt=""
              @click="getCaptcha"
            />
          </section>
        </div>
        <router-link
          class="login-btn"
          id="login-btn"
          @click="login"
          tag="button"
          to="/home"
          >登录
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import { Toast } from "mint-ui";
import { loginuser } from "@/api/login.js";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      loginFlag: true,
      hidePass: true,
      user_name: "",
      phone: "",
      captcha: "",
      pass: "",
      num: 0,
      timer: "",
    };
  },
  conputed: {
    identifyPhone() {
      return /^[1][3,5,7,8,9][0-9]{9}$/.test(this.phone);
    },
  },

  methods: {
    changeTab() {
      this.loginFlag = !this.loginFlag;
    },
    getcodeFn() {
      if (this.identifyPhone) {
        this.num = 10;
        this.timer = setInterval(() => {
          this.num--;
          if (this.num == 0) {
            clearInterval(this.timer);
          }
        }, 1000);
      } else {
        Toast({
          message: "手机格式不正确",
          position: "center",
          duration: 3000,
        });
      }
    },
    showHidePass() {
      this.hidePass = !this.hidePass;
    },
    getCaptcha() {
      this.$refs.captcha.src =
        "http://114.215.173.225:3000/api/v1/users/captcha?t=" +
        new Date().getTime();
    },
    async login() {
      if (!this.user_name) {
        Toast("用户名/邮箱/手机号！");
        return;
      } else if (!this.pass) {
        Toast("请输入密码！");
        return;
      } else if (!this.captcha) {
        Toast("请输入验证码！");
        return;
      }
      const result = await loginuser(this.user_name, this.pass, this.captcha);
      console.log(result);
    },
  },
};
</script>
<style lang="less">
.login-login {
  width: 100%;
  height: 100%;
  background: #fff;
  position: fixed;
  top: -3rem;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .login-inner {
    width: 85%;
    margin: 0px auto;
    .logo {
      width: 10rem;
      height: 10rem;
      border: 3px solid #ccc;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
    .login-con {
      width: 100%;
      height: 4.4rem;
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;
      a {
        width: 45%;
        height: 4.4rem;
        display: block;
        float: left;
        line-height: 4.4rem;
        background: #cccccc;
        font-size: 1.4rem;
        text-align: center;
      }
      .active {
        background-color: red;
        color: #fff;
      }
    }
    .login-content {
      section {
        margin-top: 1rem;
        position: relative;
        input {
          width: 100%;
          height: 4.4rem;
          border: 1px solid #cccccc;
        }
        box-sizing: border-box;
        border-radius: 5px;
        text-indent: 10px;
        &:focus {
          border: 1px solid #f00;
        }
      }
      button {
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
        background: transparent;
        font-size: 1.4rem;
        color: #666;
      }
      img {
        position: absolute;
        right: 1rem;
        top: 50%;
        height: 4rem;
        transform: translateY(-50%);
        background: transparent;
        font-size: 1.4rem;
        color: #666;
      }
    }
    #login-btn {
      display: block;
      width: 100%;
      height: 4.4rem;
      text-align: center;
      line-height: 4.4rem;
      background: red;
      color: #fff;
      font-size: 1.4rem;
      border-radius: 5px;
      margin-top: 10px;
      position: relative;
      right: 0rem;
      top: 0;
      transform: translateY(0%);
    }
  }
}
</style>