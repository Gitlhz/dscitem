import ajax from "./ajax"

const Base_URL = "/api"


//搜索页面  
// https://x.dscmall.cn/api/catalog/goodslist
export const searchFn = (params) => ajax(Base_URL + "/catalog/goodslist", params, "post")
