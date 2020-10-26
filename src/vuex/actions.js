// import { getHomeSwipe } from "@/api/index"
import { getHomeSwipe } from "@/api/index.js"
import { getGoodsList } from "@/api/list.js"
import { getGoodsDetails } from "@/api/list.js"
import { searchFn } from "@/api/search.js"
const actions = {
    actAddNum(context) {
        context.commit("addNum")
    },
    actAddNumX(context, data) {
        context.commit("addNumX", data)
    },
    actgetCategoryDatas(context, data) {
        context.commit("getCategoryDatas", data)
    },
    async actGetCategoryDatas(context) {
        const result = await getHomeSwipe()
        context.commit("getSwipeDatas", result.data)
    },
    getUserInfo(context, data) {
        context.commit("getUserInfo", data)
    },
    async getGoodsList(context, data) {
        const result = await getGoodsList(data)
        context.commit("getGoodsList", result.data)
    },
    async getGoodsDetails(context, data) {
        const result = await getGoodsDetails(data)
        // console.log(result);
        context.commit("getGoodsDetails", result.data)
    },
    async searchKeywords(context, params) {

        const result = await searchFn(params)

        console.log(params);
        result.data.push(params);
        console.log(result.data);
        context.commit("searchKeywords", result.data)

    },
}
export default actions