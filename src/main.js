import Vue from 'vue'
import App from './App.vue'

// 导入路由模块
import router from "./router/index.js"

//下载mint-ui
import MintUi from "mint-ui"
import "mint-ui/lib/style.css"
//引入store模块
import store from "@/vuex/store.js"


//下载ly-tab
import LyTab from 'ly-tab'

Vue.use(LyTab)
Vue.use(MintUi)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')