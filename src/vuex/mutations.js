//
import { MessageBox } from 'mint-ui'
const mutations = {     //管理数据
    addNum(state) {
        console.log(state);
        ++state.num
    },
    addNumX(state, data) {
        console.log(state);
        state.num = state.num + data
    },
    getCategoryDatas(state, data) {

        state.categoryDatas = data
    },
    getSwipeDatas(state, data) {
        state.swipeDatas = data
    },
    getUserInfo(state, data) {
        state.swipeDatas = data
    },
    getGoodsList(state, data) {
        state.goodsLists = data
    },
    getGoodsDetails(state, data) {
        state.GoodsDetails = data
        // console.log(state.GoodsDetails);
    },
    setCartDatas(state, data) {
        if (data) {
            state.carts.push(data)
        }
        localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    addCart(state, index) {
        // console.log(state.carts[index]);
        state.carts[index].value++
        localStorage.setItem("carts", JSON.stringify(state.carts))

    },
    //数字减减
    pevCart(state, index) {
        if (state.carts[index].value == 1) {
            state.carts[index].value == 1
            MessageBox({
                title: "提示",
                message: "商品个数至少为1"
            })
        } else {
            state.carts[index].value--
            localStorage.setItem("carts", JSON.stringify(state.carts))

        }
    },
    delet(state, index) {
        MessageBox.confirm("确认要删除吗？").then(() => {
            console.log("确定");
            state.carts.splice(index, 1)
            localStorage.setItem("carts", JSON.stringify(state.carts))
        }, () => {
            console.log("取消");
        })
    },
    //输入框内输入数字改变
    changeValue(state, data) {
        if (data.val <= 1) {
            data.val = 1
            console.log(data.val);
            MessageBox({
                title: "提示",
                message: "商品个数至少为1"
            })
        }
        state.carts[data.index].value = data.val
        localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    changeSelect(state, isSelect) {
        console.log(isSelect);
        console.log(state);
        state.carts[isSelect.index] = isSelect.cart
        let isCheck = state.carts.every((item) => {
            return item.isSelect == true
        })
        // console.log(isCheck);
        state.checkAll = isCheck
        localStorage.setItem("checkAll", state.checkAll)

        localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    //全选
    selectAllFn(state) {
        state.checkAll = !state.checkAll



        state.carts.forEach((item) => {
            item.isSelect = state.checkAll
        })
        localStorage.setItem("checkAll", state.checkAll)

        localStorage.setItem("carts", JSON.stringify(state.carts))
        console.log(localStorage.getItem("keywords"));

    },
    //搜索
    searchKeywords(state, data) {
        state.historyTitle.push(data[data.length - 1].keywords)
        state.searchList = data


        let arr = state.historyTitle.filter((item, index) => {
            return state.historyTitle.indexOf(item, 0) == index;
        })

        state.historyTitle = arr
        console.log(arr);


        // localStorage.setItem("title", JSON.stringify(state.historyTitle))
    },
}
export default mutations