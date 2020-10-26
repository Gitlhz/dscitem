import ajax from "./ajax"

const Base_URL = "/api"


//产品列表  https://x.dscmall.cn/api/catalog/goodslist
export const getGoodsList = (params) => ajax(Base_URL + "/catalog/goodslist", params, "post")

//https://x.dscmall.cn/api/goods/show
//产品详情页
export const getGoodsDetails = (params) => ajax(Base_URL + "/goods/show", params, "post")
