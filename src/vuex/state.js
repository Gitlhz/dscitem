//定义数据
const state = { //state是vuex中存储数据的
    num: 1,
    categoryDatas: [],//分类管理左边的类别数据
    swipeDatas: [],//首页轮播图
    userInfo: {},//用户信息
    goodsLists: [],//产品列表
    GoodsDetails: [],//产品详情
    //购物车数据
    carts: localStorage["carts"] ? JSON.parse(localStorage["carts"]) : [],

    //全选按钮的状态
    checkAll: localStorage["checkAll"] ? JSON.parse(localStorage["checkAll"]) : false,
    //搜索框结果
    searchList: localStorage["searchList"] ? JSON.parse(localStorage["searchList"]) : [],
    //存放title
    historyTitle: localStorage["title"] ? JSON.parse(localStorage["title"]) : [],
}
export default state