// 定义路由模块
// 需要导入 vue vue-router模块
// vue-router 需要下载 xnpm install vue-router --save
import Vue from "vue";
import VueRouter from "vue-router"

// 使用
Vue.use(VueRouter)

// 创建组件
import Home from "../views/Home/Home.vue"
import Category from "../views/Category/Category.vue"
import Search from "../views/Search/Search.vue"
import Mine from "../views/Mine/Mine.vue"
import Cart from "../views/Cart/Cart.vue"



//配置首页的子组件
import Index from "../views/Home/children/Index.vue"
import Ele from "../views/Home/children/Ele.vue"
import Person from "../views/Home/children/Person.vue"
import Box from "../views/Home/children/Box.vue"
import Phone from "../views/Home/children/Phone.vue"
import Computer from "../views/Home/children/Computer.vue"
import House from "../views/Home/children/House.vue"
import But from "../views/Home/children/But.vue"


//配置登录页面
import Login from "../views/Login/Login.vue"
import ListDetail from "../views/Category/components/ListDetail.vue"
import GoodsDetail from "../views/GoodsDetail/GoodsDetail.vue"


import DemoVuex from "../views/demoVuex/Demo.vue"
import DemoVuex2 from "../views/demoVuex/Demo2.vue"

import Searchlist from "../views/Search/searchList.vue";
// 配置路由
const routes = [{
    path: "/Home",
    name: "home",
    component: Home,
    children: [{
        path: "index",
        component: Index
    },
    {
        path: "ele",
        component: Ele
    }, {
        path: "person",
        component: Person
    }, {
        path: "box",
        component: Box
    }, {
        path: "phone",
        component: Phone
    }, {
        path: "computer",
        component: Computer
    }, {
        path: "house",
        component: House
    }, {
        path: "but",
        component: But
    }, {
        path: "/home",
        redirect: "/home/index"//重定向--进入首页时直接定位到首页-首页
    }]
}, {
    path: "/Category/:cid",
    name: "category",
    component: Category
}, {
    path: "/Mine",
    name: "mine",
    component: Mine
}, {
    path: "/Search",
    name: "search",
    component: Search
}, {
    path: "/Searchlist",
    name: "searchlist",
    component: Searchlist
}, {
    path: "/Cart",
    name: "cart",
    component: Cart
}, {
    path: "/login",
    name: "login",
    component: Login
}, {
    path: "/demovuex",
    name: "demovuex",
    component: DemoVuex
}, {
    path: "/demovuex2",
    name: "demovuex2",
    component: DemoVuex2
}, {
    path: "/listDetail",
    name: "listDetail",
    component: ListDetail
}, {
    path: "/goodsDetail",
    name: "goodsDetail",
    component: GoodsDetail
}, {
    path: "/",
    redirect: "/login"
}]

const router = new VueRouter({
    //mode:"history"        历史模式
    routes: routes
})

//暴露
export default router