import { reqGetSearchInfo} from "@/api"
const state = {
    searchList:{}
}
//mutions是唯一修改state的地方
const mutations = {
    SEARCHLIST(state,searchList){
        state.searchList = searchList
    }
}
//action|用户处理派发action地方的，可以书写异步语句、自己逻辑地方
const actions = {
    async getSearchList({ commit },params) {
        let res = await reqGetSearchInfo(params)
        if (res.code == 200) {
            commit('SEARCHLIST', res.data)
        }
    },
}

export default {
    state,
    mutations,
    actions
};